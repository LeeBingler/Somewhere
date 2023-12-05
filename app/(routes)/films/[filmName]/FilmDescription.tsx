import React from 'react';
import LogoLink from '../../about/component/LogoLink';
import BgHero from './components/BgHero';
import ResetOverFlow from './components/ResetOverFlow';
import FadeInAnimation from './components/FadeInAnimation';
import { InterfaceDataMyAPI } from '@/app/types';
import MetaDataFilm from './components/MetaDataFilm';
import FilmName from '../components/FilmName';

function FilmDescription({ data }: { data: InterfaceDataMyAPI }) {
    return (
        <main>
            <ResetOverFlow />
            <FadeInAnimation>
                <aside className='fixed opacity-0 w-fit mx-10 mt-10 pb-10 z-30'>
                    <LogoLink />
                </aside>
            </FadeInAnimation>
            <section className='relative'>
                <BgHero filmName={data.displayedName} />
                <FadeInAnimation>
                    <article className='relative w-[100vw] h-[100vh]'>
                        <div className='h-full flex flex-col justify-end text-white ml-8 md:ml-32'>
                            <FilmName film={data.displayedName} />
                            <MetaDataFilm
                                className='mb-36'
                                info={data.releaseDate}
                                title='Release Date'
                            />
                        </div>
                    </article>
                </FadeInAnimation>
            </section>
            <section>
                <MetaDataFilm info={data.distributor} title='Distributor' />
                <MetaDataFilm info={data.worldPremiere} title='World Premiere' />
            </section>
        </main>
    );
}

export default FilmDescription;
