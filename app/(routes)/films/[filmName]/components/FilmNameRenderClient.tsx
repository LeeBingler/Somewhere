'use client';
import React from 'react';
import FilmName from '../../components/FilmName';
import withFilmNameFromUrl from './withFilmNameFromUrl';

function FilmNameRenderClient({ filmNameUrl }: { filmNameUrl: string }) {
    const FilmNameWithFilmName = withFilmNameFromUrl(FilmName);

    return (
        <FilmNameWithFilmName
            className={'text-5xl md:text-[calc(2vw+3rem)]'}
            urlFilm={filmNameUrl}
        />
    );
}

export default FilmNameRenderClient;
