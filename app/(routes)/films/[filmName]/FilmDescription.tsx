import React from 'react';
import LogoLink from '../../about/component/LogoLink';
import BgHero from './components/BgHero';
import ResetOverFlow from './components/ResetOverFlow';
import FadeInAnimation from './components/FadeInAnimation';
import { InterfaceDataMyAPI } from '@/app/types';
import MetaDataFilm from './components/MetaDataFilm';
import FilmName from '../components/FilmName';
import AboutText from '@/app/components/AboutText';
import QuoteContainer from './components/QuoteContainer';

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
                    <article className='relative opacity-0 w-[100vw] h-[100vh]'>
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
                <article>
                    <div className='flex flex-col-reverse md:flex-col'>
                        <AboutText className='text-[25vw] mt-[7vh] ml-[8%]' />
                        <div className='flex flex-col items-center gap-y-[5vh] w-full mt-[10vh]'>
                            <MetaDataFilm
                                className='child:text-[4.5vw] child:text-[rgb(37,37,37)]'
                                info={data.distributor}
                                title='Distributor'
                            />
                            <MetaDataFilm
                                className='child:text-[4.5vw]'
                                info={data.worldPremiere}
                                title='World Premiere'
                            />
                        </div>
                    </div>
                    <div className='mt-[4vh] mb-[8vh] ml-[21.56%] mr-2'>
                        <p className='font-Poppins text-[5.6vw] leading-[8.27vw] font-extrabold whitespace-pre-line'>
                            {data.descriptionText[0]}
                        </p>
                        <p className='font-Arapey text-[5.6vw] leading-[8.27vw] whitespace-pre-line'>
                            {data.descriptionText[1]}
                        </p>
                    </div>
                </article>
                <article>
                    <div className='my-[8vh] ml-[21.56%]'>
                        {data.quotes.map((quote) => {
                            return <QuoteContainer key={quote.quote} quote={quote} />;
                        })}
                    </div>
                </article>
            </section>
        </main>
    );
}

export default FilmDescription;
