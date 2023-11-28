import React from 'react';

function VideoFilm({source}: {source: string}) {
    return (
        <div className='absolute -z-[1] bottom-1/2 h-[0%] group-hover/cardFilm:bottom-[0%] group-hover/cardFilm:h-full w-full transition-all duration-500'>
            <video className='h-full w-full object-cover' src={source} autoPlay muted loop></video>
        </div>
    );
}

export default VideoFilm;
