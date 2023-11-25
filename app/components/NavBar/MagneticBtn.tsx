'use client';

import gsap from 'gsap';
import { PropsWithChildren, useEffect, useRef } from 'react';
import React from 'react';

function MagneticBtn({ children }: PropsWithChildren) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleMouse(e: MouseEvent) {
            if (!(ref && ref.current)) return;
            const { clientX, clientY } = e;
            const { width, left, height, top } = ref.current?.getBoundingClientRect();

            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            gsap.to(ref.current, { x: x * 0.1, y: y * 0.1 });
        }

        function mouseLeave(e: MouseEvent) {
            gsap.to(ref.current, { x: 0, y: 0, ease: 'elastic.out' });
        }
        const HTMLref = ref.current;

        HTMLref?.addEventListener('mousemove', handleMouse);
        HTMLref?.addEventListener('mouseleave', mouseLeave);

        return () => {
            HTMLref?.removeEventListener('mousemove', handleMouse);
            HTMLref?.removeEventListener('mouseleave', mouseLeave);
        };
    }, []);

    return React.cloneElement(children as React.ReactElement, { ref });
}

export default MagneticBtn;
