
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";

export default function BookDetails() {

    const { id } = useParams<{ id: string }>();

    const books = useAppSelector((state) => state.books.book);

    const book = books.find((b) => b._id === id);

    if (!book) {
        return <div className="text-red-600">Book not found</div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-3xl shadow-2xl mt-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{book.title}</h1>
            <p className="text-lg italic text-gray-600 mb-6">by {book.author}</p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                <div className="bg-gray-100 rounded-full px-4 py-1 font-medium">
                    Genre: {book.genre}
                </div>
                <div className="bg-gray-100 rounded-full px-4 py-1 font-medium">
                    ISBN: {book.isbn}
                </div>
                <div className="bg-gray-100 rounded-full px-4 py-1 font-medium">
                    Copies: {book.copies}
                </div>
                <div
                    className={`rounded-full px-4 py-1 font-semibold ${book.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                >
                    {book.available ? "Available" : "Unavailable"}
                </div>
            </div>

            <p className="text-gray-800 leading-relaxed mb-8">{book.description}</p>

            <div className="flex gap-4">
                <Link
                    to="/books"
                    className="inline-block px-6 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition"
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
            </div>
        </div>
    );
}

