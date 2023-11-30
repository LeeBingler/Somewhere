import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import LogoLink from './component/LogoLink';

export const metadata: Metadata = {
    title: 'Somewhere - About',
    description: ''
};

export default function About() {
    return (
        <main className='relative h-screen w-screen bg-WillyWonka bg-cover'>
            <aside className='text-white w-fit mx-10 pt-10 mb-24 relative z-30'>
              <LogoLink />
            </aside>
            <section className='w-full flex justify-end'>
              <div className='w-[70%] h-[80vh] mr-6 overflow-y-scroll text-white'>
                bcp de text
              </div>
            </section>
        </main>
    );
}
