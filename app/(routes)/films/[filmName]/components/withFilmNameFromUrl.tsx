'use client';
import { useGetOneFilmFromUrl } from '@/app/context/FilmNameProvider';
import React from 'react';

const withFilmNameFromUrl = (Component: any) => {
    const WithFilmComp = ({urlFilm, className}: {urlFilm: string; className ?: string}) => {
        const nameFilm = useGetOneFilmFromUrl(urlFilm);

        return <Component className={className} film={nameFilm} />;
    };

    return WithFilmComp;
};

export default withFilmNameFromUrl;
