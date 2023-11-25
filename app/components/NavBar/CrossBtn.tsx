'use client';

import { RxCross1 } from 'react-icons/rx';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function CrossBtn({ onClick }: { onClick: () => void }) {
    const ref = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const hover = gsap.to(ref.current, {
            rotate: 90,
            paused: true,
            ease: 'power1.out',
            duration: 1
        });
        const leave = gsap.to(ref.current, {
            rotate: -90,
            paused: true,
            ease: 'elastic.out',
            duration: 0.8
        });

        function mouseEnter() {
            leave.pause();
            leave.time(0);
            hover.play();
        }

        function mouseLeave() {
            hover.pause();
            hover.time(0);
            leave.play();
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
            className='flex justify-center items-center bg-transparent border-none text-7xl'
            onClick={onClick}
            ref={ref}
        >
            <RxCross1 />
        </button>
    );
}

export default CrossBtn;
