'use client';

import gsap from 'gsap';
import { MutableRefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';
import transformFramerMotion from '../../lib/transformFramerMotion';
import useGetWindowSize from '@/app/lib/useGetSizeWindow';

function Cursor({ stickyElement }: { stickyElement: MutableRefObject<HTMLDivElement | null> }) {
    const refCursor = useRef<HTMLDivElement | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const { width } = typeof window === 'undefined' ? { width: 1000 } : useGetWindowSize();
    const isShowed = width > 768;

    function handleMouseMove(e: MouseEvent) {
        if (!(refCursor && refCursor.current)) return;

        const { clientX, clientY } = e;

        const widthCursor = isHovered ? 55 : 20;
        const heightCursor = isHovered ? 55 : 20;

        const mouseX = clientX - widthCursor / 2;
        const mouseY = clientY - heightCursor / 2;

        if (isHovered && stickyElement && stickyElement.current) {
            const { width, height, left, top } = stickyElement.current?.getBoundingClientRect();
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

    function handleMouseOver() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    useLayoutEffect(() => {
        if (!isShowed) return;
        gsap.set(refCursor.current, {
            x: window.innerWidth / 2 - 40,
            y: window.innerHeight / 2 - 40
        });

        document.addEventListener('mousemove', handleMouseMove);

        const HTMLstickyElement = stickyElement.current;
        HTMLstickyElement?.addEventListener('mouseover', handleMouseOver);
        HTMLstickyElement?.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            HTMLstickyElement?.removeEventListener('mouseover', handleMouseOver);
            HTMLstickyElement?.removeEventListener('mouseleave', handleMouseLeave);
        };
    });

    return (
        isShowed && (
            <div
                ref={refCursor}
                className='cursor absolute z-10 top-0 left-0 w-5 h-5 bg-transparent rounded-full backdrop-invert pointer-events-none'
            />
        )
    );
}

export default Cursor;
