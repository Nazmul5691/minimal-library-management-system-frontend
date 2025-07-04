

import BorrowBookCard from "@/components/module/borrowBooks/BorrowBookCard";
import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";
import type { IBorrow } from "@/types";
import { BookOpenCheck } from 'lucide-react'; 

export default function BorrowSummary() {
    const { data, isLoading, error } = useGetBorrowSummaryQuery(undefined, {
        pollingInterval: 30000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
    });

    const borrows = data?.data ?? [];

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 font-inter text-gray-800 pb-16 flex items-center justify-center">
                <p className="text-center text-gray-500 text-lg">Loading borrow summary...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 font-inter text-gray-800 pb-16 flex items-center justify-center">
                <p className="text-center text-red-500 text-lg">Failed to load borrow summary.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-inter text-gray-800 pb-16">
           
            <section className="bg-gradient-to-br from-purple-600 to-indigo-700 py-16 md:py-16 text-white shadow-md rounded-b-3xl mb-10">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex items-center justify-center my-4">
                        <BookOpenCheck className="w-12 h-12 md:w-16 md:h-16 text-purple-100 mr-4 animate-fade-in-down" />
                        <h1 className="text-2xl md:text-4xl font-extrabold leading-tight animate-fade-in-down">
                            Borrowing History
                        </h1>
                    </div>
                    <p className="text-md md:text-lg max-w-3xl mx-auto opacity-90 animate-fade-in-up">
                        A quick overview of all the books you've borrowed from our library.
                    </p>
                </div>
            </section>

            
            <section className="max-w-3xl mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">📚 Borrow Summary</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
                    {borrows.length > 0 ? (
                        borrows.map((borrow: IBorrow) => (
                            <BorrowBookCard borrow={borrow} key={borrow._id} />
                        ))
                    ) : (
                        <div className="text-center text-gray-500 col-span-full py-10 rounded-lg bg-white shadow-md border border-gray-100">
                            <p className="text-lg">No borrowed books found.</p>
                            <p className="text-sm mt-2">Time to explore our collection!</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
