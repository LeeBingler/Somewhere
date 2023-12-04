'use client';
import { useFilmName } from '@/app/context/FilmNameProvider';
import SectionFilms from './components/SectionFilms';

function Films() {
    const filmsArr = useFilmName();

    return (
        <main className='flex flex-col select-none mt-[12vh] md:mt-0'>
            {filmsArr?.map((objFilm, index) => {
                return <SectionFilms key={objFilm.name} film={objFilm.name} index={index + 1} />;
            })}
        </main>
    );
}

export default Films;
