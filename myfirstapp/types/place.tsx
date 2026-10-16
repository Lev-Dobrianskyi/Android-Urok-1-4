export type PlaceCatalog = 'Nature' | 'Entertainment' | 'History';

export type Place = {
    id : string,
    name : string,
    description: string,
    category: string,
    rating: number,
    image: string;
}