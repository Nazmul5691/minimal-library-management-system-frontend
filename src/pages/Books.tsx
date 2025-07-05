
import BooksCard from "@/components/module/books/BooksCard";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/types";

export default function Books() {

    const { data, isLoading } = useGetBooksQuery(undefined, {
        pollingInterval: 30000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true
    })

    console.log(data);

    const books = data?.data ?? [];

    if (isLoading) {
        return (
            <div className="min-h-screen px-4 py-22 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <p className="text-gray-800 dark:text-gray-100">Loading.....</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen px-4 py-22 bg-gray-50 dark:bg-gray-900"> 
            <div className="max-w-7xl mx-auto mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">📚 All Books</h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Explore our collection of books. You can view, edit, or borrow any book from the list.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    books.length > 0 ? (
                        books.map((book: IBook) => <BooksCard book={book} key={book._id} />)
                    ) : (
                        <div className="col-span-full text-center text-gray-500 dark:text-gray-400 py-10 rounded-lg bg-white dark:bg-gray-800 shadow-md dark:shadow-lg border border-gray-100 dark:border-gray-700"> 
                            <p>No books available</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
