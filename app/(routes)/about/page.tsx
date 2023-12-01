import React from 'react';
import { Metadata } from 'next';
import LogoLink from './component/LogoLink';
import ArticleAbout from './component/ArticleAbout';

export const metadata: Metadata = {
    title: 'Somewhere - About',
    description:
        "Somewhere is an webapp that showcase Tim Burton's movies, made by Lee Bingler which focuses on making creative and user friendly experience"
};

export default function About() {
    return (
        <main className='relative h-[120vh] w-screen bg-WillyWonka bg-fill bg-center'>
            <aside className='text-white w-fit mx-10 pt-10 mb-24 relative z-30'>
                <LogoLink />
            </aside>
            <section className='w-full flex justify-center md:justify-end'>
                <ArticleAbout />
            </section>
        </main>
    );
}
