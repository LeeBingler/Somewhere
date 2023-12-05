import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const data = {
        name: 'Nightmare before christmas',
        displayedName: 'Nightmare Before CHRISTMAS',
        releaseDate: 'October 29, 1993',
        distributor: '',
        worldPremiere: '',
        descriptionText: '',
        quotes: [
            { quote: '', author: '' },
            { quote: '', author: '' }
        ],
        awards: ['', '', ''],
        press: [
            { quote: '', webpage: '' },
            { quote: '', webpage: '' },
            { quote: '', webpage: '' },
            { quote: '', webpage: '' }
        ]
    };

    return NextResponse.json(data);
}
