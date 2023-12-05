import React from 'react';
import FilmDescription from './FilmDescription';
import { redirect } from 'next/navigation';

async function page({ params }: { params: { filmName: string } }) {
    function checkGoodLink(filmName: string) {
        if (
            filmName != 'corpse-bride' &&
            filmName != 'nightmare-before-christmas' &&
            filmName != 'miss-peregrine' &&
            filmName != 'alice-in-wonderland'
        ) {
            redirect('/films');
        }
    }

    checkGoodLink(params.filmName);

    const baseURL = process.env.STATUS === 'dev' ? 'http://localhost:3000' : process.env.URL;
    const data = await fetch(baseURL + '/api/films/' + params.filmName, {
        method: 'GET'
    }).then((res) => res.json());

    return <FilmDescription data={data} />;
}

export default page;
