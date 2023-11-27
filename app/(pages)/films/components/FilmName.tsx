import React from 'react';

function FilmName({ film }: { film: string }) {
    const filmSplit = film.split(' ');

    return (
        <h1 className='text-4xl md:text-[min(5vw,100px)] inline-table font-Bon-Voyage'>
            {filmSplit.map((str, index) => {
                return (
                    <span
                        key={str}
                        className={index % 2 ? 'font-Poppins font-bold md:mx-4 mx-2' : ''}
                    >
                        {str}
                    </span>
                );
            })}
        </h1>
    );
}

export default FilmName;
