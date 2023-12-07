import { InterfaceDataMyAPI } from '@/app/types';
import { NextResponse } from 'next/server';

export async function GET() {
    const data: InterfaceDataMyAPI = {
        name: "Miss Peregrine's Home for Peculiar Children",
        displayedName: 'MISS PEREGRINE',
        releaseDate: 'October 5, 2016',
        distributor: '20th Century Studios',
        worldPremiere: 'Fantastic Fest',
        descriptionText: [
            `Abe Portman has told stories to his grandson Jake about battling monsters and spending his childhood at "Miss Peregrine's Home for Peculiar Children" at Cairnholm,`,
            ` an island off the coast of Wales. The home's children and headmistress, Miss Peregrine, possess paranormal abilities and are known as "Peculiars".`
        ],
        quotes: [
            {
                quote: "It may be senseless, but it's sumptuous: the picture looks like it cost about a billion bucks",
                author: 'New York Post'
            },
            {
                quote: "The title may read “Miss Peregrine's Home for Peculiar Children,” but there can be no doubt for anyone buying a ticket",
                author: 'Variety'
            }
        ],
        awards: ['Globes de Cristal Awards', 'Saturn Awards', "People's Choice Awards"],
        press: [
            {
                name: 'IGN',
                quote: " Miss Peregrine's technical aspects manage to intrigue you enough to make it worthwhile.",
                webpage:
                    'https://www.ign.com/articles/2016/09/27/miss-peregrines-home-for-peculiar-children-review'
            },
            {
                name: 'The Washington Post',
                quote: 'An engagingly oddball fantasia from Tim Burton',
                webpage:
                    'https://www.washingtonpost.com/goingoutguide/movies/miss-peregrine-movie-review-an-engagingly-oddball-fantasia-from-tim-burton/2016/09/29/b9501daa-80e8-11e6-b002-307601806392_story.html'
            },
            {
                name: 'New York Post',
                quote: "“Miss Peregrine's Home for Peculiar Children” certainly brings back that youthful feeling.",
                webpage:
                    'https://nypost.com/2016/09/29/dont-visit-miss-peregrines-home-for-peculiar-children/'
            }
        ]
    };

    return NextResponse.json(data);
}
