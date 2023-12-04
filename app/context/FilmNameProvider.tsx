'use client';
import React, { useContext, useState } from 'react';

export const NameFilmContext = React.createContext<{ name: string }[] | null>(null);
export const GetOneFilmFromUrl = React.createContext<null | ((filmLink: string) => string)>(null);

function FilmNameProvider({ children }: { children: React.ReactNode }) {
    const [filmName, setFilmName] = useState([
        { name: 'Nightmare Before CHRISTMAS' },
        { name: 'CORPSE BRIDE' },
        { name: 'MISS PEREGRINE' },
        { name: 'Alice in WONDERLAND' }
    ]);

    function getOneFilmFromURL(filmLink: string) {
        for (let i = 0; i < filmName.length; i++) {
            if (filmName[i].name.toLowerCase().replaceAll(' ', '-') == filmLink) return filmName[i].name;
        }

        return filmName[0].name;
    }

    return (
        <NameFilmContext.Provider value={filmName}>
            <GetOneFilmFromUrl.Provider value={(filmLink: string) => getOneFilmFromURL(filmLink)}>
                {children}
            </GetOneFilmFromUrl.Provider>
        </NameFilmContext.Provider>
    );
}

export function useFilmName() {
    return useContext(NameFilmContext);
}

export function useGetOneFilmFromUrl(filmLink: string) {
    const getOneFilmFromURL = useContext(GetOneFilmFromUrl);

    if (getOneFilmFromURL) return getOneFilmFromURL(filmLink);
}

export default FilmNameProvider;
