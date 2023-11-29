import strToCamelCase from '@/app/lib/strToCamelCase';
import React from 'react';

function ImgFilm({ name }: { name: string }) {
    const dirPict = '/Pictures/Home/';
    const nameCamelCase = strToCamelCase(name.toLocaleLowerCase());
    const extPict = '.png';

    return (
        <div className='md:hidden'>
            <img src={dirPict + nameCamelCase + extPict} alt={`Image of a ${name}`} />
        </div>
    );
}

export default ImgFilm;
