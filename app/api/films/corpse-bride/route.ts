import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const data = {
        name: 'Corpse Bride',
        displayedName: 'CORPSE BRIDE',
        releaseDate: 'September 23, 2005',
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
