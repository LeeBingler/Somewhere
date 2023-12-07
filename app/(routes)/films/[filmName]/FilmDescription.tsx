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
import ImgDescription from './components/ImgDescription';
import AwardContainer from './components/AwardContainer';
import PressContainer from './components/PressContainer';

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
                <article className='lg:flex lg:ml-[5vw] lg:mt-[20vh] lg:items-center mb-[20vh]'>
                    <div className='flex flex-col-reverse lg:flex-col'>
                        <AboutText className='text-[25vw] mt-[7vh] ml-[8%] md:text-[max(9.8vw,150px)] md:leading-[9.6vw,150px]' />
                        <div className='flex flex-col items-center gap-y-[5vh] w-full mt-[10vh] lg:items-start lg:ml-[40%]'>
                            <MetaDataFilm
                                className='child:text-[4.5vw] child:leading-[4.2vw] child:text-[rgb(37,37,37)] lg:child:text-[max(1vw,18px)]'
                                info={data.distributor}
                                title='Distributor'
                            />
                            <MetaDataFilm
                                className='child:text-[4.5vw] child:leading-[4.2vw] child:text-[rgb(37,37,37)] lg:child:text-[max(1vw,18px)]'
                                info={data.worldPremiere}
                                title='World Premiere'
                            />
                        </div>
                    </div>
                    <div className='mt-[4vh] mb-[8vh] ml-[21.56%] mr-2 max-w-lg md:mt-[10vh]'>
                        <p className='font-Poppins text-[5vw] leading-[8.27vw] font-extrabold whitespace-pre-line md:text-[max(2vw,30px)] md:leading-[max(3vw,44.35px)]'>
                            {data.descriptionText[0]}
                        </p>
                        <p className='font-Arapey text-[5vw] leading-[8.27vw] whitespace-pre-line md:text-[max(2vw,30px)] md:leading-[max(3vw,44.35px)]'>
                            {data.descriptionText[1]}
                        </p>
                    </div>
                </article>
                <article>
                    <div className='relative lg:h-[180vh]'>
                        <div className='flex justify-center items-center lg:absolute top-[15%] left-[17%] z-10'>
                            <ImgDescription
                                className='w-4/5 ml-7 max-w-md lg:max-w-2xl'
                                filmName={data.displayedName}
                                number={1}
                            />
                        </div>
                        <div className='my-[8vh] ml-[15%] lg:absolute bottom-0 right-[15%]'>
                            {data.quotes.map((quote) => {
                                return <QuoteContainer key={quote.quote} quote={quote} />;
                            })}
                        </div>
                        <ImgDescription
                            className='mb-[10vh] lg:max-w-[50vw] lg:absolute right-[10%] top-0'
                            filmName={data.displayedName}
                            number={2}
                        />
                    </div>
                    <ImgDescription className='h-[60vh]' filmName={data.displayedName} number={3} />
                </article>
                <article className='mx-10'>
                    <div>
                        <h1 className='titleSectionDescription'>AWARDS</h1>
                        <div className='md:flex justify-center gap-x-[10vw]'>
                            {data.awards.map((award) => {
                                return <AwardContainer key={award} award={award} />;
                            })}
                        </div>
                    </div>
                    <div className='mt-[15vh]'>
                        <h1 className='titleSectionDescription'>PRESS</h1>
                        <div className='text-[calc(24px+0.4vw)] mx-5 w-full md:flex md:leading-[calc(24px+0.6vw)]'>
                            {data.press.map((press) => {
                                return <PressContainer press={press} key={press.webpage} />;
                            })}
                        </div>
                    </div>
                </article>
                <article className='mt-[20vh]'>
                    <div className='w-full flex flex-col justify-center items-center h-[100vh]'>
                        <h1 className='font-Poppins font-extrabold text-[15vw] md:text-[calc(32px+3vw)] text-[rgb(37,37,37)]'>TRAILER</h1>
                        <iframe
                            src={data.trailer}
                            className='w-4/5 h-full'
                            frameBorder={'0'}
                            allow='autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        ></iframe>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default FilmDescription;
