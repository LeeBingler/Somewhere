import strToCamelCase from '@/app/lib/strToCamelCase';
import React from 'react';

function ImgDescription({
    filmName,
    number,
    className
}: {
    filmName: string;
    number: number;
    className?: string;
}) {
    const filmNameCamelCase = strToCamelCase(filmName.toLowerCase());

    return (
        <div className={className}>
            <img
                className='w-full h-full object-cover'
                src={'/Pictures/description/' + filmNameCamelCase + number + '.jpg'}
                alt=''
            />
        </div>
    );
}

export default ImgDescription;
