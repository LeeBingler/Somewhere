'use client';

import { gsap } from 'gsap';
import { RxHamburgerMenu } from 'react-icons/rx';
import Cursor from './Cursor';
import { useRef } from 'react';
import MagneticBtn from './MagneticBtn';
import NavSection from './NavSection';

function Navbar() {
    const refHamburger = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <header className='w-full flex justify-end fixed'>
                <MagneticBtn>
                    <button
                        className='bg-transparent border-none text-4xl m-4 relative'
                        onClick={() => {
                            gsap.to('.NavSection', {
                                yPercent: 0,
                                duration: 1.4,
                                '--opacityNavSectionAfter': 0.7,
                                ease: 'power1'
                            });
                        }}
                    >
                        <RxHamburgerMenu />
                        <div
                            ref={refHamburger}
                            className='w-full h-full absolute left-0 top-0 hover:scale-[5]'
                        />
                    </button>
                </MagneticBtn>
            </header>
            <NavSection />
            <Cursor stickyElement={refHamburger} />
        </>
    );
}

export default Navbar;
