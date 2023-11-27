'use client';

import gsap from 'gsap';
import React, { useLayoutEffect } from 'react';

function NavMenu({ children }: { children: React.ReactNode }) {
    useLayoutEffect(() => {
        gsap.set('.NavSection', {yPercent: -100});
    }, []);
    return (
        <nav className='h-[80vh] flex flex-col justify-around items-center gap-x-[10vw] md:flex-row'>
            {children}
        </nav>
    );
}

export default NavMenu;
