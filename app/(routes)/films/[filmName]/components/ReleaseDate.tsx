import React from 'react';

function ReleaseDate({ filmUrl }: { filmUrl: string }) {
    function getReleaseDate(filmUrl: string) {
        if (filmUrl === 'corpse-bride') return 'September 23, 2005';
        if (filmUrl === 'nightmare-before-christmas') return 'October 29, 1993';
        if (filmUrl === 'miss-peregrine') return 'October 5, 2016';
        if (filmUrl === 'alice-in-wonderland') return 'March 24, 2010';

        return 'Not Found';
    }

    const releaseDate = getReleaseDate(filmUrl);

    return (
        <div className='mb-36 mt-4 md:text-[calc(1rem+0.1vw)]'>
            <p className='font-Poppins font-bold'>{releaseDate}</p>
            <p className='font-Bon-Voyage italic'>Release Date</p>
        </div>
    );
}

export default ReleaseDate;
