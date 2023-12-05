import strToCamelCase from '@/app/lib/strToCamelCase';
import React from 'react';

function BgHero({ filmName }: { filmName: string }) {
    const nameCamelCase = strToCamelCase(filmName.replaceAll('-', ' '));
    const video = '/Videos/Films/' + nameCamelCase + '.mp4';
    const img = '/Pictures/Home/' + nameCamelCase + '.png'

    return (
        <div className='w-[120%] absolute top-0 left-0'>
            <video
                src={video}
                className='hidden md:block h-[100vh] w-[100vw] object-cover object-[50%30%]'
                autoPlay
                muted
                loop
            />
            <img
                className='md:hidden object-cover h-[100vh] -translate-x-[76px]'
                src={img}
                alt={`image of ${filmName}`}
            />
        </div>
    );
}

export default BgHero;
