import strToCamelCase from '@/app/lib/strToCamelCase';
import React from 'react';

function ImgFilm({ name, index }: { name: string; index: number }) {
    const dirPict = '/Pictures/Home/';
    const nameCamelCase = strToCamelCase(name.toLocaleLowerCase());
    const extPict = '.png';

    return (
        <div className={`md:hidden my-7 w-full flex ${index % 2 ? 'justify-end': 'justify-start'}`}>
            <img className='w-11/12 max-w-lg' src={dirPict + nameCamelCase + extPict} alt={`Image of a ${name}`} />
        </div>
    );
}

export default ImgFilm;
