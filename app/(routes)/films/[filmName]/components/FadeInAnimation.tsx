'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function FadeInAnimation({
    children,
    duration = 2
}: {
    children: React.ReactElement;
    duration?: number;
}) {
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        gsap.set(ref.current, { opacity: 0, duration: 0 });
        gsap.to(ref.current, { opacity: 1, duration: duration });
    }, []);

    return React.cloneElement(children as React.ReactElement, { ref });
}

export default FadeInAnimation;
