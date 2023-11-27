import React from 'react';

function CardFilms({ film, index }: { film: string; index: number }) {
    return (
        <section className='h-[50vh] relative flex justify-center items-center text-[rgb(37,37,37)] pointer-events-none'>
            <div className={`md:absolute cursor-pointer pointer-events-auto ${index % 2 ? 'left-[21%]' : 'left-[50%]'}`}>
                <h1 className='text-4xl md:text-[min(5vw,100px)] inline-table font-Bon-Voyage'>
                    {film}
                </h1>
                <div className='md:text-[2.5vh] mt-2 flex items-center gap-x-7 font-Bon-Voyage italic font-bold'>
                    <p>{index > 10 ? index : '0' + index}</p>
                    <span className='bg-black w-12 h-[2px]' />
                    <p>more</p>
                </div>
            </div>
        </section>
    );
}

export default CardFilms;
