export interface InterfaceDataMyAPI {
    name: string;
    displayedName: string;
    releaseDate: string;
    distributor: string;
    worldPremiere: string;
    descriptionText: string;
    quotes: Array<{ quote: string; author: string }>;
    awards: Array<string>;
    press: Array<{ quote: string; webpage: string }>;
}
