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
        <div className='md:mb-24'>
            <Link
                href={`/${children.toLowerCase()}`}
                onClick={closeNavSection}
                className={`text-7xl flex flex-col items-center md:text-[calc(72px+3vw)] ${
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
            <video src={source} autoPlay loop muted></video>
        </div>
    );
}
