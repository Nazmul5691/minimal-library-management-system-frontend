/* eslint-disable no-empty-pattern */
import type { IBook } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
    book: IBook[];
}


const initialState: InitialState = {
    book: [
        {
            title: "The Silent Patient",
            description: "A psychological thriller about a woman who stops speaking after committing a shocking act of violence.",
            author: "Alex Michaelides",
            genre: "Thriller",
            isbn: "9781250301697",
            copies: 10,
            available: true
        },
        {
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


const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {

    }
})


export const { } = bookSlice.actions;

export default bookSlice.reducer;