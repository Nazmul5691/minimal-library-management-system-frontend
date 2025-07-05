/* eslint-disable @typescript-eslint/no-unused-vars */

import { Link, useNavigate, useParams } from "react-router-dom";
import { useDeleteBookMutation, useGetSingleBookQuery } from "@/redux/api/baseApi";
import Swal from "sweetalert2";

export default function BookDetails() {

    const { id } = useParams<{ id: string }>();

    const { data, isLoading } = useGetSingleBookQuery(id);
    const [deleteBook] = useDeleteBookMutation();

    const book = data?.data;
    const navigate = useNavigate();

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
                <p>Loading...</p>
            </div>
        );
    }


    const handleDelete = async () => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this book!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        });

        if (confirm.isConfirmed) {
            try {
                await deleteBook(book._id).unwrap();

                Swal.fire({
                    title: "Deleted!",
                    text: "Your book has been deleted.",
                    icon: "success",
                });

                navigate("/books");
            } catch (error) {
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong while deleting the book.",
                    icon: "error",
                });
            }
        }
    };


    if (!book) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
                <p>Book not found.</p>
            </div>
        );
    }



    return (
        <div className="max-w-3xl mx-auto mt-40 mb-20 p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl dark:shadow-lg border border-gray-100 dark:border-gray-700">
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 mb-4"> <span className="text-xl font-normal ">Details of:</span> {book.title}</h1>
            <p className="text-lg font-bold italic text-gray-600 dark:text-gray-300 mb-6"><span className="font-normal">by</span> {book.author}</p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 mb-6">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-1 font-medium">
                    Genre: <span className="text-gray-800 dark:text-gray-100">{book.genre}</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-1 font-medium">
                    ISBN: <span className="text-gray-800 dark:text-gray-100">{book.isbn}</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-1 font-medium">
                    Copies: <span className="text-gray-800 dark:text-gray-100">{book.copies}</span>
                </div>
                <div
                    className={`rounded-full px-4 py-1 font-semibold ${book.available ? "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100" : "bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100"
                        }`}
                >
                    {book.available ? "Available" : "Unavailable"}
                </div>
            </div>

            <p className="text-gray-800 dark:text-gray-100 leading-relaxed mb-8">{book.description}</p>

            <div className="flex flex-wrap gap-4">
                <Link
                    to="/books"
                    className="inline-block px-6 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition
                               dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
                >
                    ← Back to Books
                </Link>
                <Link
                    to={`/edit-book/${book._id}`}
                    className="inline-block px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                    Edit Book
                </Link>
                <Link
                    to={`/borrow/${book._id}`}
                    className="inline-block px-6 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                >
                    Borrow Book
                </Link>
                <button
                    onClick={handleDelete}
                    className="inline-block cursor-pointer px-6 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
                    type="button"
                >
                    Delete Book
                </button>
            </div>
        </div>
    );
}

