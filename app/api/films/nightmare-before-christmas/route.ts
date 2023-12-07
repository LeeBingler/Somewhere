import { InterfaceDataMyAPI } from '@/app/types';
import { NextResponse } from 'next/server';

export async function GET() {
    const data: InterfaceDataMyAPI = {
        name: 'Nightmare before christmas',
        displayedName: 'Nightmare Before CHRISTMAS',
        releaseDate: 'October 29, 1993',
        distributor: 'Buena Vista Picture Distribution',
        worldPremiere: 'The New York Film Festival',
        descriptionText: [
            'It tells the story of Jack Skellington, the King of "Halloween Town", ',
            'who stumbles upon "Christmas Town" and schemes to take over the holiday.'
        ],
        quotes: [
            { quote: 'The Nightmare Before Christmas is a visual splendor.', author: 'Reel Views' },
            { quote: 'Energy and art abound everywhere', author: 'Empire Online' }
        ],
        awards: ['Annie Awards', 'Golden Globes', '20/20 Awards'],
        press: [
            {
                name: 'Roger Elbert',
                quote: 'Everything looks strange and haunting. Even Santa Claus would be difficult to recognize without his red-and-white uniform.',
                webpage:
                    'https://www.rogerebert.com/reviews/tim-burtons-the-nightmare-before-christmas-1993'
            },
            {
                name: 'Rolling Stone',
                quote: 'This dazzling mix of fun and fright also explodes the notion that animation is kid stuff.',
                webpage:
                    'https://www.rollingstone.com/tv-movies/tv-movie-reviews/tim-burtons-the-nightmare-before-christmas-118171/'
            },
            {
                name: 'Rotten Tomatoes',
                quote: 'The Nightmare Before Christmas is a stunningly original and visually delightful work of stop-motion animation.',
                webpage: 'https://www.rottentomatoes.com/m/nightmare_before_christmas'
            }
        ]
    };

    return NextResponse.json(data);
}
