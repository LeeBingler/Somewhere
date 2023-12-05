'use client';
import gsap from 'gsap';
import React, { useEffect } from 'react';

function ResetOverFlow() {
    useEffect(() => {
        gsap.to(document.documentElement, { overflowY: 'auto', duration: 0 });
    }, []);

    return <></>;
};

export default ResetOverFlow;
