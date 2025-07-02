
import BooksCard from "@/components/module/books/booksCard";
import { useAppSelector } from "@/redux/hook";

export default function Books() {

    const books = useAppSelector((state) => state.books.book);

    return (
        <div className="min-h-screen px-4 py-8 bg-gray-50">
            <div className="max-w-7xl mx-auto mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">📚 All Books</h1>
                <p className="text-gray-500 text-sm">
                    Explore our collection of books. You can view, edit, or borrow any book from the list.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {books.length > 0 ? (
                    books.map((book) => <BooksCard book={book} key={book._id} />)
                ) : (
                    <div className="col-span-full text-center text-gray-500">No books available</div>
                )}
            </div>
        </div>
    );
}
