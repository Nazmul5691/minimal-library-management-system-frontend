// /* eslint-disable @typescript-eslint/no-unused-vars */


// import { useDeleteBookMutation } from "@/redux/api/baseApi";
// import type { IBook } from "@/types";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// interface IProps {
//     book: IBook;
// }

// export default function BooksCard({ book }: IProps) {

//     const navigate = useNavigate();

//     const isAvailable = book.available ?? true;

//     const [deleteBook] = useDeleteBookMutation();

//     const handleDelete = async () => {
//         const confirm = await Swal.fire({
//             title: "Are you sure?",
//             text: "You want to delete this book!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!",
//         });

//         if (confirm.isConfirmed) {
//             try {
//                 await deleteBook(book._id).unwrap();

//                 Swal.fire({
//                     title: "Deleted!",
//                     text: "Your book has been deleted.",
//                     icon: "success",
//                 });

//                 navigate("/books")

//             } catch (error) {
//                 Swal.fire({
//                     title: "Error!",
//                     text: "Something went wrong while deleting the book.",
//                     icon: "error",
//                 });
//             }
//         }
//     };



//     return (
//         <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col gap-2 border border-gray-200 dark:border-gray-700">
//             <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{book.title}</h2>
//             <p className="text-sm text-gray-500 italic dark:text-gray-400">by {book.author}</p>
//             <p className="text-sm text-gray-600 dark:text-gray-300">Genre: {book.genre}</p>
//             <p className="text-sm text-gray-600 dark:text-gray-300">ISBN: {book.isbn}</p>
//             <p className="text-sm text-gray-600 dark:text-gray-300">Copies: {book.copies}</p>
//             <p
//                 className={`text-sm font-medium ${isAvailable
//                     ? "text-green-600 dark:text-green-400"
//                     : "text-red-500 dark:text-red-400"
//                     }`}
//             >
//                 {isAvailable ? "Available" : "Unavailable"}
//             </p>

//             <div className="flex gap-2 pt-2">
//                 <Link to={`/books/${book._id}`}>
//                     <div className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100">
//                         View
//                     </div>
//                 </Link>
//                 <Link to={`/edit-book/${book._id}`}>
//                     <div className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100">
//                         Edit
//                     </div>
//                 </Link>
//                 <Link to={`/borrow/${book._id}`}>
//                     <div className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700">
//                         Borrow
//                     </div>
//                 </Link>
//                 <button
//                     onClick={handleDelete}
//                     className="px-3 py-1 cursor-pointer text-sm text-white bg-red-600 rounded hover:bg-red-700"
//                     type="button"
//                 >
//                     Delete
//                 </button>
//             </div>
//         </div>

//     );
// }



/* eslint-disable @typescript-eslint/no-unused-vars */

import { useDeleteBookMutation } from "@/redux/api/baseApi";
import type { IBook } from "@/types";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface IProps {
    book: IBook;
}

export default function BooksCard({ book }: IProps) {
    const navigate = useNavigate();

    const isAvailable = book.available ?? true;

    const [deleteBook] = useDeleteBookMutation();

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

    return (
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

                {isAvailable ? (
                    <Link to={`/borrow/${book._id}`}>
                        <div className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 cursor-pointer">
                            Borrow
                        </div>
                    </Link>
                ) : (
                    <button
                        disabled
                        className="px-3 py-1 text-sm text-white bg-blue-300 rounded cursor-not-allowed"
                        title="Unavailable books cannot be borrowed"
                        type="button"
                    >
                        Borrow
                    </button>
                )}

                <button
                    onClick={handleDelete}
                    className="px-3 py-1 cursor-pointer text-sm text-white bg-red-600 rounded hover:bg-red-700"
                    type="button"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

