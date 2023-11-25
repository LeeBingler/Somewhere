import React from 'react';
import CrossBtn from './CrossBtn';
import gsap from 'gsap';
import LinkNavSection from './LinkNavSection';

function NavSection() {
    function closeNavSection() {
        gsap.to('.NavSection', { yPercent: -100, duration: 1.7, ease: 'power1' });
    }

    return (
        <section className='NavSection fixed left-0 top-0 -translate-y-full h-[100vh] w-[100vw] bg-emerald-500 flex flex-col justify-around items-center'>
            <CrossBtn onClick={closeNavSection} />
            <div className='h-[80vh] flex flex-col justify-around items-center'>
                <LinkNavSection closeNavSection={closeNavSection} index={1}>about</LinkNavSection>
                <LinkNavSection closeNavSection={closeNavSection} index={2}>films</LinkNavSection>
            </div>
        </section>
    );
}

export default NavSection;
