import React from 'react';
import CrossBtn from './CrossBtn';
import gsap from 'gsap';
import LinkNavSection from './LinkNavSection';

function NavSection() {
    function closeNavSection() {
        gsap.to('.NavSection', {
            yPercent: -100,
            duration: 1.7,
            ease: 'power1',
            '--opacityNavSectionAfter': 0
        });
    }

    return (
        <section
            className='NavSection fixed left-0 top-0 -translate-y-full h-[100vh] w-[100vw] bg-emerald-500 flex flex-col justify-around items-center
                after:absolute after:w-full after:h-[200%] after:bottom-0 after:left-0 after:translate-y-full after:bg-black after:opacity-[var(--opacityNavSectionAfter)] after:pointer-events-none'
        >
            <CrossBtn onClick={closeNavSection} />
            <div className='h-[80vh] flex flex-col justify-around items-center gap-x-48 md:flex-row'>
                <LinkNavSection closeNavSection={closeNavSection} index={1}>
                    about
                </LinkNavSection>
                <LinkNavSection closeNavSection={closeNavSection} index={2}>
                    films
                </LinkNavSection>
            </div>
        </section>
    );
}

export default NavSection;
