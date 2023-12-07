import React from 'react';

function PressContainer({ press }: { press: { name: string; quote: string; webpage: string } }) {
    return (
        <div className='flex flex-col justify-between py-7 pr-10 gap-y-10 w-full'>
            <h2 className='font-Poppins font-extrabold underline text-[1.2em]'>{press.name}</h2>
            <p className='font-Arapey whitespace-pre-line my-5'>"{press.quote}"</p>
            <a
                className='font-Poppins font-extrabold opacity-50 hover:opacity-100 w-fit'
                href={press.webpage}
            >
                READ MORE
            </a>
        </div>
    );
}

export default PressContainer;
