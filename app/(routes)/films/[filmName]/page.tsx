'use client';
import { useGetOneFilmFromUrl } from '@/app/context/FilmNameProvider';
import strToCamelCase from '@/app/lib/strToCamelCase';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';
import LogoLink from '../../about/component/LogoLink';
import gsap from 'gsap';
import FilmName from '../components/FilmName';

function getReleaseDate(filmLink: string) {
    if (filmLink === 'corpse-bride') return 'September 23, 2005';
    if (filmLink === 'nightmare-before-christmas') return 'October 29, 1993';
    if (filmLink === 'miss-peregrine') return 'October 5, 2016';
    if (filmLink === 'alice-in-wonderland') return 'March 24, 2010';
}

function checkGoodLink(filmName: string) {
    if (
        filmName != 'corpse-bride' &&
        filmName != 'nightmare-before-christmas' &&
        filmName != 'miss-peregrine' &&
        filmName != 'alice-in-wonderland'
    ) {
        redirect('/films');
    }
}

function resetOverFlow() {
    useEffect(() => {
        gsap.to(document.documentElement, { overflowY: 'auto', duration: 0 });
    }, []);
}

function FilmDescription({ params }: { params: { filmName: string } }) {
    checkGoodLink(params.filmName);
    resetOverFlow();

    const nameCamelCase = strToCamelCase(params.filmName.replaceAll('-', ' '));
    const heroVisualData = [
        '/Pictures/Home/' + nameCamelCase + '.png',
        '/Videos/Films/' + nameCamelCase + '.mp4'
    ];
    const nameFilm = useGetOneFilmFromUrl(params.filmName);
    const releaseDate = getReleaseDate(params.filmName);

    return (
        <main>
            <aside className='fixed w-fit mx-10 mt-10 pb-10 z-30'>
                <LogoLink />
            </aside>
            <section className='relative'>
                <div className='w-[120%] absolute top-0 left-0'>
                    <video
                        src={heroVisualData[1]}
                        className='hidden md:block h-[100vh] w-[100vw] object-cover object-[50%30%]'
                        autoPlay
                        muted
                        loop
                    />
                    <img
                        className='md:hidden object-cover h-[100vh] -translate-x-[76px]'
                        src={heroVisualData[0]}
                        alt={`image of ${params.filmName}`}
                    />
                </div>
                <article className='relative w-[100vw] h-[100vh]'>
                    <div className='h-full flex flex-col justify-end text-white ml-8 md:ml-32'>
                        <FilmName className=' text-5xl md:text-[calc(2vw+3rem)]' film={nameFilm} />
                        <div className='mb-36 mt-4 md:text-[calc(1rem+0.1vw)]'>
                            <p className='font-Poppins font-bold'>{releaseDate}</p>
                            <p className='font-Bon-Voyage italic'>Release Date</p>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default FilmDescription;
