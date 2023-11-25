import React from 'react';
import CrossBtn from './CrossBtn';
import gsap from 'gsap';
import Link from 'next/link';

function NavSection() {
    return (
        <section className='NavSection fixed left-0 top-0 -translate-y-full h-[100vh] w-[100vw] bg-emerald-500'>
            <CrossBtn
                onClick={() =>
                    gsap.to('.NavSection', { yPercent: -100, duration: 1.4, ease: 'power1' })
                }
            />
            <div>
                <Link href={'/home'}> FILM </Link>
                <Link href={'/about'}> ABOUT </Link>
            </div>
        </section>
    );
}

export default NavSection;
