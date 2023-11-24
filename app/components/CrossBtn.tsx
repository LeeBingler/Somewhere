'use client';

import { RxCross1 } from 'react-icons/rx';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

function CrossBtn({ onClick }: { onClick: () => void }) {
    const ref = useRef<HTMLButtonElement | null>(null);

    useLayoutEffect(() => {
        const hover = gsap.timeline({ paused: true, defaults: { ease: 'none' } });
        hover.to(ref.current, { rotate: 90, duration: 0.5 });

        function mouseEnter() {
            hover.timeScale(1);
            hover.play();
        }

        function mouseLeave() {
            hover.timeScale(-4);
        }

        ref.current?.addEventListener('mouseenter', mouseEnter);
        ref.current?.addEventListener('mouseleave', mouseLeave);

        return () => {
            ref.current?.removeEventListener('mouseenter', mouseEnter);
            ref.current?.removeEventListener('mouseleave', mouseLeave);
            hover.kill();
        };
    }, []);

    return (
        <button
            className='flex justify-center items-center bg-transparent border-none text-4xl'
            onClick={onClick}
            ref={ref}
        >
            <RxCross1 />
        </button>
    );
}

export default CrossBtn;
