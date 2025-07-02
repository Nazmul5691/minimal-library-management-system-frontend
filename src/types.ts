export interface IBook {
    _id: string;
    title: string;
    description: string;
    author: string;
    genre: string;
    isbn: string;
    copies: number;
    available? : boolean
}