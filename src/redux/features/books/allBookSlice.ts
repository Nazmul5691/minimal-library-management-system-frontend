
import type { IBook } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import {nanoid, type PayloadAction } from "@reduxjs/toolkit";


interface InitialState {
    book: IBook[];
}


const initialState: InitialState = {
    book: [
        {
            _id: "98435723849if8097987",
            title: "The Silent Patient",
            description: "A psychological thriller about a woman who stops speaking after committing a shocking act of violence.",
            author: "Alex Michaelides",
            genre: "Thriller",
            isbn: "9781250301697",
            copies: 10,
            available: true
        },
        {
            _id: "98435723849idff97987",
            title: "The Silent Patient 2",
            description: "A psychological thriller about a woman who stops speaking after committing a shocking act of violence.",
            author: "Alex Michaelides",
            genre: "Thriller",
            isbn: "9781250301697",
            copies: 10,
            available: true
        }
    ]
}


type DraftBook = Pick<IBook, "title" | "description" | "author" | "genre" | "isbn" | "copies" | "available">

const createBook = (bookData: DraftBook): IBook => {
    return {
        ...bookData,
        _id: nanoid(),
    }
}

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<DraftBook>) => {
            const bookData = createBook(action.payload)
            state.book.push(bookData)
        }
    }
})


export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;