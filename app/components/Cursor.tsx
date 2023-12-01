'use client';

import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import transformFramerMotion from '../lib/transformFramerMotion';
import useGetWindowSize from '@/app/hooks/useGetSizeWindow';

function Cursor() {
    const refCursor = useRef<HTMLDivElement | null>(null);
    let { width } = useGetWindowSize();
    const isShowed = width > 768;

    function handleMouseMove(e: MouseEvent) {
        if (!(refCursor && refCursor.current)) return;
        const btn = e.target as HTMLDivElement;

        const { clientX, clientY } = e;

        let widthCursor = 20;
        let heightCursor = 20;

        const mouseX = clientX - widthCursor / 2;
        const mouseY = clientY - heightCursor / 2;

        if (btn.classList.contains('magnetic')) {
            widthCursor = 55;
            heightCursor = 55;
            const { width, height, left, top } = btn.getBoundingClientRect();
            const center = {
                x: left + width / 2,
                y: top + height / 2
            };
            const distance = { x: clientX - center.x, y: clientY - center.y };

            // stretch cursor
            const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
            const scaleX = transformFramerMotion(absDistance, [1, 90], [1, 1.3]);
            const scaleY = transformFramerMotion(absDistance, [1, 90], [1, 0.8]);

            // calculate the rotation with the atan2 formula
            // because atan2 return in rad i need to do some magic to converte it in deg
            // https://stackoverflow.com/questions/1311049/how-to-map-atan2-to-degrees-0-360
            const angle = (Math.atan2(distance.y, distance.x) * (180 / Math.PI) + 360) % 360;

            gsap.to(refCursor.current, {
                rotate: angle
            });
            gsap.to(refCursor.current, {
                x: center.x - widthCursor / 2 + distance.x * 0.1,
                y: center.y - heightCursor / 2 + distance.y * 0.1,
                duration: 0.2,
                ease: 'none',
                width: widthCursor,
                height: heightCursor,
                scaleX,
                scaleY
            });
            return;
        }

        gsap.to(refCursor.current, {
            x: mouseX,
            y: mouseY,
            duration: 0.2,
            ease: 'none',
            width: widthCursor,
            height: heightCursor,
            scale: 1
        });
    }

    useLayoutEffect(() => {
        if (!isShowed) return;
        gsap.set(refCursor.current, {
            x: window.innerWidth / 2 - 40,
            y: window.innerHeight / 2 - 40
        });

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    });

    return (
        <div
            ref={refCursor}
            className='hidden md:block cursor fixed z-[51] top-0 left-0 w-5 h-5 bg-transparent rounded-full backdrop-invert pointer-events-none'
        />
    );
}

export default Cursor;
