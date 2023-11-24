'use client';

import { gsap } from 'gsap';
import { RxHamburgerMenu } from 'react-icons/rx';
import CrossBtn from './CrossBtn';
import Cursor from './Cursor';
import { useRef } from 'react';
import MagneticBtn from './MagneticBtn';

function Navbar() {
    const refHamburger = useRef<HTMLDivElement | null>(null);

    function setStateNav(state: string) {
        let percent = state === 'close' ? 100 : -100;
        gsap.to('.NavSection', { yPercent: percent, duration: 1.4, ease: 'power1.out' });
    }

    return (
        <>
            <header className='w-full flex justify-end relative'>
                <MagneticBtn>
                    <button
                        className='bg-transparent border-none text-4xl m-4 relative'
                        onClick={() => setStateNav('close')}
                    >
                        <RxHamburgerMenu />
                        <div
                            ref={refHamburger}
                            className='w-full h-full absolute left-0 top-0 hover:scale-[5]'
                        />
                    </button>
                </MagneticBtn>
            </header>
            <Cursor stickyElement={refHamburger} />
            <section className='NavSection fixed left-0 top-0 -translate-y-full h-[100vh] w-[100vw] bg-emerald-500'>
                <CrossBtn onClick={() => setStateNav('open')} />
            </section>
        </>
    );
}

export default Navbar;
