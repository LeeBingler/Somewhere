'use client';

import React, { ForwardedRef, forwardRef, useRef } from 'react';
import FilmName from './FilmName';
import VideoFilm from './VideoFilm';
import ImgFilm from './ImgFilm';
import Link from 'next/link';
import useGetWindowSize from '@/app/hooks/useGetSizeWindow';
import gsap from 'gsap';

function CardFilm({
    film,
    index,
    idSection,
    sectionRef
}: {
    film: string;
    index: number;
    idSection: string;
    sectionRef: React.RefObject<HTMLDivElement>;
}) {
    const videoRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const cardRef = useRef<HTMLAnchorElement>(null);
    const { width } = useGetWindowSize();

    function onClick() {
        const tl = gsap.timeline();

        tl.to(document.documentElement, { overflowY: 'hidden', duration: 0 });
        if (width > 768) {
            tl.to(videoRef.current, {
                width: '100vw',
                height: '100vh',
                bottom: 0,
                duration: 1
            });
            tl.to(cardRef.current, { opacity: 0, duration: 0.5 }, '<');
            tl.to(sectionRef.current, { height: '100vh', duration: 1 }, '<');
        } else {
            tl.set(imgRef.current, {
                objectFit: 'cover',
                position: 'fixed',
                top: '50%',
                yPercent: 100,
                zIndex: 9999,
                duration: 0
            });
            tl.to(imgRef.current, {
                width: 'auto',
                height: '100vh',
                yPercent: 0,
                top: 0,
                duration: 1
            });
        }
    }

    return (
        <>
            <Link
                ref={cardRef}
                href={'/films#' + idSection}
                onClick={onClick}
                className={`w-11/12 block md:w-auto md:absolute md:z-[1] cursor-pointer pointer-events-auto ${
                    index % 2 ? 'left-[21%]' : 'left-[50%]'
                }`}
            >
                <div className='mx-16 md:mx-0'>
                    <FilmName film={film} />
                    <div className='md:text-[2.5vh] mt-2 flex items-center gap-x-7 font-Arapey italic'>
                        <p>{index > 10 ? index : '0' + index}</p>
                        <span className='bg-black w-12 md:w-24 h-[2px] transition-all delay-300 duration-500 group-hover/cardFilm:w-28 md:group-hover/cardFilm:w-64' />
                        <p>more</p>
                    </div>
                </div>
                <ImgFilm ref={imgRef} name={film} index={index} />
            </Link>
            <VideoFilm ref={videoRef} name={film} />
        </>
    );
}

export default CardFilm;
