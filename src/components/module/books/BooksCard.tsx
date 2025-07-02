
import { deleteBook } from "@/redux/features/books/allBookSlice";
import { useAppDispatch } from "@/redux/hook";
import type { IBook } from "@/types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

interface IProps {
    book: IBook;
}

export default function BooksCard({ book }: IProps) {


    const isAvailable = book.available ?? true;

    const dispatch = useAppDispatch();

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this book!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteBook(book._id))
                Swal.fire({
                    title: "Deleted!",
                    text: "Your book has been deleted.",
                    icon: "success"
                });
            }
        });
    }


    return (
        // <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col gap-2 border border-gray-200">
        //     <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
        //     <p className="text-sm text-gray-500 italic">by {book.author}</p>
        //     <p className="text-sm text-gray-600">Genre: {book.genre}</p>
        //     <p className="text-sm text-gray-600">ISBN: {book.isbn}</p>
        //     <p className="text-sm text-gray-600">Copies: {book.copies}</p>
        //     <p
        //         className={`text-sm font-medium ${isAvailable ? "text-green-600" : "text-red-500"
        //             }`}
        //     >
        //         {isAvailable ? "Available" : "Unavailable"}
        //     </p>

        //     <div className="flex gap-2 pt-2">
        //         <Link to={`/books/${book._id}`}>
        //             <div className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100">
        //                 View
        //             </div>
        //         </Link>
        //         <Link to={`/edit-book/${book._id}`}>
        //             <div className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100">
        //                 Edit
        //             </div>
        //         </Link>
        //         <Link to={`/borrow/${book.isbn}`}>
        //             <div className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700">
        //                 Borrow
        //             </div>
        //         </Link>
        //         <button
        //             onClick={handleDelete}
        //             className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
        //             type="button"
        //         >
        //             Delete
        //         </button>
        //     </div>
        // </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col gap-2 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{book.title}</h2>
            <p className="text-sm text-gray-500 italic dark:text-gray-400">by {book.author}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Genre: {book.genre}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">ISBN: {book.isbn}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Copies: {book.copies}</p>
            <p
                className={`text-sm font-medium ${isAvailable
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-500 dark:text-red-400"
                    }`}
            >
                {isAvailable ? "Available" : "Unavailable"}
            </p>

            <div className="flex gap-2 pt-2">
                <Link to={`/books/${book._id}`}>
                    <div className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100">
                        View
                    </div>
                </Link>
                <Link to={`/edit-book/${book._id}`}>
                    <div className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100">
                        Edit
                    </div>
                </Link>
                <Link to={`/borrow/${book.isbn}`}>
                    <div className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700">
                        Borrow
                    </div>
                </Link>
                <button
                    onClick={handleDelete}
                    className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                    type="button"
                >
                    Delete
                </button>
            </div>
        </div>

    );
}
