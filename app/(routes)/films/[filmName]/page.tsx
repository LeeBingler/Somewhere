import { redirect } from 'next/navigation';
import React from 'react';
import LogoLink from '../../about/component/LogoLink';
import BgHero from './components/BgHero';
import ReleaseDate from './components/ReleaseDate';
import ResetOverFlow from './components/ResetOverFlow';
import FilmNameRenderClient from './components/FilmNameRenderClient';
import FadeInAnimation from './components/FadeInAnimation';

function FilmDescription({ params }: { params: { filmName: string } }) {
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

    checkGoodLink(params.filmName);

    return (
        <main>
            <ResetOverFlow />
            <FadeInAnimation>
                <aside className='fixed opacity-0 w-fit mx-10 mt-10 pb-10 z-30'>
                    <LogoLink />
                </aside>
            </FadeInAnimation>
            <section className='relative'>
                <BgHero filmName={params.filmName} />
                <FadeInAnimation>
                    <article className='relative w-[100vw] h-[100vh]'>
                        <div className='h-full flex flex-col justify-end text-white ml-8 md:ml-32'>
                            <FilmNameRenderClient filmNameUrl={params.filmName} />
                            <ReleaseDate filmUrl={params.filmName} />
                        </div>
                    </article>
                </FadeInAnimation>
            </section>
        </main>
    );
}

export default FilmDescription;
