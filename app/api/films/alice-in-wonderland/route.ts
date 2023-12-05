import { NextResponse } from 'next/server';
import { InterfaceDataMyAPI } from '@/app/types';

export async function GET() {
    const data: InterfaceDataMyAPI = {
        name: 'Alice in Wonderland',
        displayedName: 'Alice in WONDERLAND',
        releaseDate: 'March 24, 2010',
        distributor: '',
        worldPremiere: '',
        descriptionText: ['', ''],
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
