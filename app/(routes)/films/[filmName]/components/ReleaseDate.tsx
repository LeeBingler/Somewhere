import React from 'react';

function ReleaseDate({ releaseDate }: { releaseDate: string }) {
    return (
        <div className='mb-36 mt-4 md:text-[calc(1rem+0.1vw)]'>
            <p className='font-Poppins font-bold'>{releaseDate}</p>
            <p className='font-Bon-Voyage italic'>Release Date</p>
        </div>
    );
}

export default ReleaseDate;
