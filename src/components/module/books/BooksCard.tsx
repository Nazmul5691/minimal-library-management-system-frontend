
import type { IBook } from "@/types";
import { Link } from "react-router-dom";

interface IProps {
    book: IBook;
}

export default function BooksCard({ book }: IProps) {
    const isAvailable = book.available ?? true;

    return (
        <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col gap-2 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
            <p className="text-sm text-gray-500 italic">by {book.author}</p>
            <p className="text-sm text-gray-600">Genre: {book.genre}</p>
            <p className="text-sm text-gray-600">ISBN: {book.isbn}</p>
            <p className="text-sm text-gray-600">Copies: {book.copies}</p>
            <p
                className={`text-sm font-medium ${isAvailable ? "text-green-600" : "text-red-500"
                    }`}
            >
                {isAvailable ? "Available" : "Unavailable"}
            </p>

            <div className="flex gap-2 pt-2">
                <Link to={`/books/${book._id}`}>
                    <div className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100">
                        View
                    </div>
                </Link>
                <Link to={`/edit-book/${book._id}`}>
                    <div className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100">
                        Edit
                    </div>
                </Link>
                <Link to={`/borrow/${book.isbn}`}>
                    <div className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700">
                        Borrow
                    </div>
                </Link>
            </div>
        </div>
    );
}
