export interface IBooks {
    title: string;
    description: string;
    author: string;
    genre: string;
    isbn: string;
    copies: number;
    available? : boolean
}