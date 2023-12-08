import React from 'react';
import Link from 'next/link';

function PressContainer({ press }: { press: { name: string; quote: string; webpage: string } }) {
    return (
        <div className='flex flex-col justify-between py-7 pr-10 gap-y-10 w-full'>
            <h2 className='font-Poppins font-extrabold underline text-[1.2em]'>{press.name}</h2>
            <p className='font-Arapey whitespace-pre-line my-5'>&apos;{press.quote}&apos;</p>
            <Link
                className='font-Poppins font-extrabold opacity-50 hover:opacity-100 w-fit'
                href={press.webpage}
                target='_blank'
            >
                READ MORE
            </Link>
        </div>
    );
}

export default PressContainer;
