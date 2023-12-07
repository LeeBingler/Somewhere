import { InterfaceDataMyAPI } from '@/app/types';
import { NextResponse } from 'next/server';

export async function GET() {
    const data: InterfaceDataMyAPI = {
        name: 'Corpse Bride',
        displayedName: 'CORPSE BRIDE',
        releaseDate: 'September 23, 2005',
        distributor: 'Warner Bros. Picture',
        worldPremiere: '62nd Venice International',
        descriptionText: [
            'When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman,',
            ' she rises from the grave assuming he has married her.'
        ],
        quotes: [
            {
                quote: 'the story wraps on a perfectly muted note that rings a melancholy echo of the ending of “Nightmare.”',
                author: 'Variety'
            },
            {
                quote: ' In many ways, "Corpse Bride" plays out like poetry',
                author: 'The Independent Critic'
            }
        ],
        awards: [
            'Future Film Festival Digital Award',
            'Academy of Science Fiction, Fantasy & Horror Films, USA',
            'Annie Awards'
        ],
        press: [
            {
                name: 'RogerEbert',
                quote: 'Here comes the corpse...',
                webpage: 'https://www.rogerebert.com/reviews/tim-burtons-corpse-bride-2005'
            },
            {
                name: 'The Guardian',
                quote: "He's done it with great panache",
                webpage: 'https://www.theguardian.com/culture/2005/oct/21/3'
            },
            {
                name: 'Empire',
                quote: 'Thankfully, it does get back to a properly Victorian finish at the altar, with melodramatic villainy, sacrifice and a happy resolution.',
                webpage: 'https://www.empireonline.com/movies/reviews/corpse-bride-review/'
            }
        ]
    };

    return NextResponse.json(data);
}
