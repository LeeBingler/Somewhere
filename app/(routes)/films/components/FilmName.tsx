import React from 'react';

function FilmName({ film }: { film: string }) {
    const filmSplit = film.split(' ');

    if (filmSplit.length > 2) {
        filmSplit[0] = filmSplit[0] + ' ' + filmSplit[1];
        filmSplit[1] = filmSplit[2];
        filmSplit.pop();
    }

    return (
        <h1
            className='text-4xl md:text-[min(5vw,100px)] md:h-[10vw] flex flex-col justify-around font-Bon-Voyage'
        >
            {filmSplit.map((str, index) => {
                return (
                    <span key={str} className={index % 2 ? 'font-Poppins font-bold' : undefined}>
                        {str}
                    </span>
                );
            })}
        </h1>
    );
}

export default FilmName;
