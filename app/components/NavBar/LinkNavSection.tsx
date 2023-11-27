'use client';

import Link from 'next/link';
import React from 'react';

export default function LinkNavSection({
    closeNavSection,
    children,
    index,
    source
}: {
    children: string;
    closeNavSection: () => void;
    index: number;
    source: string;
}) {
    return (
        <div className='md:mb-24 group relative flex justify-center items-center'>
            <Link
                href={`/${children.toLowerCase()}`}
                onClick={closeNavSection}
                className={`relative z-10 text-7xl flex flex-col items-center md:text-[calc(72px+3vw)] ${
                    index % 2
                        ? 'font-Bon-Voyage capitalize font-medium'
                        : 'font-Poppins uppercase font-bold'
                }`}
            >
                {children}
                <span className='mt-2 text-[2.5vh] font-Arapey italic font-normal'>
                    {index < 10 ? '0' + index : index}
                </span>
            </Link>
            <div
                className='absolute -bottom-20 pointer-events-none h-[0%] w-[45vw] transition-all duration-500
            group-hover:md:block group-hover:md:h-[150%] group-hover:md:-bottom-5
            after:absolute after:bg-transparent after:w-full after:h-full after:top-0 after:left-0 after:z-20 after:backdrop-invert'
            >
                <video
                    className='h-full w-full object-cover invert'
                    src={source}
                    autoPlay
                    loop
                    muted
                ></video>
            </div>
        </div>
    );
}
