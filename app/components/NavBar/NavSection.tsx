import React from 'react';
import CrossBtn from './CrossBtn';
import gsap from 'gsap';
import LinkNavSection from './LinkNavSection';
import NavMenu from './NavMenu';

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
            className='NavSection fixed z-50 right-0 top-0 h-[100vh] w-[100vw] bg-[var(--bg-c)] flex flex-col justify-around items-center
                after:absolute after:w-full after:h-[200%] after:bottom-0 after:left-0 after:translate-y-full after:bg-black after:opacity-[var(--opacityNavSectionAfter)] after:pointer-events-none'
        >
            <CrossBtn onClick={closeNavSection} />
            <NavMenu>
                <LinkNavSection
                    source={'/SpiritedAwayNav.mp4'}
                    closeNavSection={closeNavSection}
                    index={1}
                >
                    About
                </LinkNavSection>
                <LinkNavSection
                    source={'/MissPeregrineNav.mp4'}
                    closeNavSection={closeNavSection}
                    index={2}
                >
                    FILMS
                </LinkNavSection>
            </NavMenu>
        </section>
    );
}

export default NavSection;
