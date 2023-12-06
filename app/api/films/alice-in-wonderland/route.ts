import { NextResponse } from 'next/server';
import { InterfaceDataMyAPI } from '@/app/types';

export async function GET() {
    const data: InterfaceDataMyAPI = {
        name: 'Alice in Wonderland',
        displayedName: 'Alice in WONDERLAND',
        releaseDate: 'March 24, 2010',
        distributor: 'Walt Disney Studios Motion Pictures',
        worldPremiere: "London's Leicester Square",
        descriptionText: [
            'The film follows Alice Kingsleigh, a nineteen-year-old who accidentally falls down a rabbit hole, returns to Wonderland,',
            ' and alongside the Mad Hatter helps restore the White Queen to her throne by fighting against the Red Queen and her Jabberwocky'
        ],
        quotes: [
            { quote: 'The most eccentric tea party', author: 'Variety' },
            { quote: 'Enchanting and mordant', author: 'Roger Ebert' }
        ],
        awards: ['Annie Award', 'BAFTA Award', 'Rembrandt Awards'],
        press: [
            {
                name: 'The Hollywood Reporter',
                quote: 'A fantastical romp that proves every bit as transporting as that movie about the blue people of Pandora',
                webpage:
                    'https://www.hollywoodreporter.com/movies/movie-reviews/alice-wonderland-film-review-29356/'
            },
            {
                name: 'Rotten Tomatoes',
                quote: "it's an undeniable visual treat",
                webpage: 'https://www.rottentomatoes.com/m/1221547-alice_in_wonderland'
            },
            {
                name: 'The Guardian',
                quote: 'The visual design is highly distinctive',
                webpage: 'https://www.theguardian.com/film/2010/mar/04/alice-in-wonderland-review'
            },
        ]
    };

    return NextResponse.json(data);
}
