import React from 'react';

function CardFilms({ film, index }: { film: string; index: number }) {
    return (
        <div className=''>
            <h1>{film}</h1>
            <div className='flex items-center'>
                <p>{index > 10 ? index : '0' + index}</p>
                <span className='bg-black w-12 h-[2px]'/>
                <p>more</p>
            </div>
        </div>
    );
}

export default CardFilms;
