import React, { ForwardedRef, forwardRef } from 'react';
import strToCamelCase from '@/app/lib/strToCamelCase';

function VideoFilm({ name }: { name: string }, ref: ForwardedRef<HTMLDivElement>) {
    const dirVideo = '/Videos/Films/';
    const nameCamelCase = strToCamelCase(name.toLocaleLowerCase());
    const fileExtension = '.mp4';

    return (
        <div
            ref={ref}
            className='hidden md:block absolute bottom-1/2 h-[0%]
        group-hover/cardFilm:bottom-[0%] group-hover/cardFilm:h-full
        w-full transition-all duration-500
        after:z-50 after:w-full after:h-full after:absolute after:top-0 after:backdrop-invert
        '
        >
            <video
                className='h-full w-full object-cover invert object-[50%30%]'
                src={dirVideo + nameCamelCase + fileExtension}
                autoPlay
                muted
                loop
            ></video>
        </div>
    );
}

export default forwardRef(VideoFilm);
