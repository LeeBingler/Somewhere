import React from 'react';
import FilmName from './FilmName';
import VideoFilm from './VideoFilm';

function CardFilms({ film, index }: { film: string; index: number }) {
    return (
        <section className='h-[50vh] relative flex justify-center items-center text-[rgb(37,37,37)] pointer-events-none group/cardFilm'>
            <div className={`md:absolute cursor-pointer pointer-events-auto ${index % 2 ? 'left-[21%]' : 'left-[50%]'}`}>
                <FilmName film={film} />
                <div className='absolute md:text-[2.5vh] mt-2 flex items-center gap-x-7 font-Arapey italic'>
                    <p>{index > 10 ? index : '0' + index}</p>
                    <span className='bg-black w-12 h-[2px] transition-all delay-300 duration-500 group-hover/cardFilm:w-28 md:group-hover/cardFilm:w-48' />
                    <p>more</p>
                </div>
            </div>
            <VideoFilm source={'/Navbar/MissPeregrineNav.mp4'} />
        </section>
    );
}

export default CardFilms;
