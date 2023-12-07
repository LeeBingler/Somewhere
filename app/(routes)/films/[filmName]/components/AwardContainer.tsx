import React from 'react';
import { FaAward } from 'react-icons/fa';

function AwardContainer({ award }: { award: string }) {
    return (
        <div className='mb-16 flex flex-col basis-full gap-y-5 items-center justify-center text-4xl md:text-[calc(16px+1vw)]'>
            <FaAward />
            <p className='font-Poppins font-extrabold text-center'>{award}</p>
        </div>
    );
}

export default AwardContainer;
