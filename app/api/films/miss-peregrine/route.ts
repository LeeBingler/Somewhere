import { InterfaceDataMyAPI } from '@/app/types';
import { NextResponse } from 'next/server';

export async function GET() {
    const data: InterfaceDataMyAPI = {
        name: "Miss Peregrine's Home for Peculiar Children",
        displayedName: 'MISS PEREGRINE',
        releaseDate: 'October 5, 2016',
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
