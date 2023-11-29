import React from 'react';
import FilmName from './FilmName';
import VideoFilm from './VideoFilm';
import ImgFilm from './ImgFilm';

function CardFilms({ film, index }: { film: string; index: number }) {
    return (
        <section
            className={`${
                index % 2 ? 'justify-end' : 'justify-start'
            } h-[50vh] relative flex items-center md:justify-center text-[rgb(37,37,37)] pointer-events-none group/cardFilm`}
        >
            <div
                className={`w-11/12 md:w-auto md:absolute z-10 cursor-pointer pointer-events-auto ${
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
                <ImgFilm name={film} index={index} />
            </div>
            <VideoFilm name={film} />
        </section>
    );
}

export default CardFilms;
