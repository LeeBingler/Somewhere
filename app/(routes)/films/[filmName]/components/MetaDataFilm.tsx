import React from 'react';

function MetaDataFilm({
    info,
    title,
    className = ''
}: {
    info: string;
    title: string;
    className?: string;
}) {

    let displayedInfo = new String(info);

    if (displayedInfo.length === 0 || typeof displayedInfo === 'undefined' || displayedInfo === null) {
        displayedInfo = 'Not Found';
    }

    return (
        <div className={'text-base md:text-[calc(1rem+0.1vw)] ' + className}>
            <p className='font-Poppins font-bold'>{displayedInfo}</p>
            <p className='font-Bon-Voyage italic'>{title}</p>
        </div>
    );
}

export default MetaDataFilm;
