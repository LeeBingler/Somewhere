import strToCamelCase from '@/app/lib/strToCamelCase';
import React, { ForwardedRef, forwardRef } from 'react';

const ImgFilm = forwardRef(
    ({ name, index }: { name: string; index: number }, ref: ForwardedRef<HTMLImageElement>) => {
        const dirPict = '/Pictures/Home/';
        const nameCamelCase = strToCamelCase(name.toLocaleLowerCase());
        const extPict = '.png';

        return (
            <div
                className={`md:hidden relative my-7 w-full flex ${
                    index % 2 ? 'justify-end' : 'justify-start'
                }`}
            >
                <img
                    ref={ref}
                    className='w-11/12 max-w-lg'
                    src={dirPict + nameCamelCase + extPict}
                    alt={`Image of a ${name}`}
                />
            </div>
        );
    }
);

export default ImgFilm;
