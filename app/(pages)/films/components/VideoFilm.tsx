import React from 'react';

function VideoFilm({source}: {source: string}) {
    return (
        <div className='absolute bottom-1/2 h-[0%]
        group-hover/cardFilm:bottom-[0%] group-hover/cardFilm:h-full
        w-full transition-all duration-500
        after:z-50 after:w-full after:h-full after:absolute after:top-0 after:backdrop-invert
        '>
            <video className='h-full w-full object-cover invert' src={source} autoPlay muted loop></video>
        </div>
    );
}

export default VideoFilm;
