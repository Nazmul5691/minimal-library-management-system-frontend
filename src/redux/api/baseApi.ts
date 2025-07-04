import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://minimal-library-management-system-b.vercel.app/" }),
    tagTypes: ["books", "borrow"],
    endpoints: (builder) => ({

        getBooks: builder.query({
            query: () => "/books",
            providesTags: ["books"]
        }),

        createBook: builder.mutation({
            query: (booksData) => ({
                url: "/books",
                method: 'POST',
                body: booksData
            }),
            invalidatesTags: ["books"]
        }),

        getSingleBook: builder.query({
            query: (bookId) => `/books/${bookId}`,
            providesTags: ["books"]
        }),

        updateBook: builder.mutation({
            query: ({ bookId, updatedData }) => ({
                url: `/books/${bookId}`,
                method: 'PUT',
                body: updatedData
            }),
            invalidatesTags: ["books"]
        }),

        deleteBook: builder.mutation({
            query: (bookId) => ({
                url: `/books/${bookId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["books"]
        }),


        borrowBook: builder.mutation({
            query: ( booksData ) => ({
                url: `/borrow`,
                method: 'POST',
                body: booksData,
            }),
            invalidatesTags: ["borrow"],
        }),


        getBorrowSummary: builder.query({
            query: () => "/borrow",
            providesTags: ["borrow"]
        }),

    })
})


export const { useGetBooksQuery, useCreateBookMutation, useGetSingleBookQuery, useUpdateBookMutation, useDeleteBookMutation, useBorrowBookMutation, useGetBorrowSummaryQuery } = baseApi;