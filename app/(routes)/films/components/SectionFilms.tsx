'use client';
import React, { useRef } from 'react';
import CardFilm from './CardFilm';

function SectionFilms({ film, index }: { film: string; index: number }) {
    const idSection = film.toLowerCase().replaceAll(' ', '-');
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section
            id={idSection}
            ref={sectionRef}
            className={`${
                index % 2 ? 'justify-end' : 'justify-start'
            } h-[50vh] relative flex items-center md:justify-center text-[rgb(37,37,37)] pointer-events-none group/cardFilm`}
        >
            <CardFilm sectionRef={sectionRef} film={film} index={index} idSection={idSection} />
        </section>
    );
}

export default SectionFilms;
