// src/pages/BorrowSummary.tsx or similar

import BorrowBookCard from "@/components/module/borrowBooks/BorrowBookCard";
import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";
import type { IBorrow } from "@/types";

export default function BorrowSummary() {
    const { data, isLoading, error } = useGetBorrowSummaryQuery(undefined, {
        pollingInterval: 30000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
    });

    // console.log(data);

    const borrows = data?.data ?? [];

    if (isLoading) {
        return <p className="text-center text-gray-500 mt-10">Loading borrow summary...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500 mt-10">Failed to load borrow summary.</p>;
    }

    return (
        <section className="max-w-3xl mx-auto px-4 pt-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">📚 Borrow Summary</h1>
            <div className="grid grid-cols-2 gap-4">
                {borrows.length > 0 ? (
                    borrows.map((borrow: IBorrow) => (
                        <BorrowBookCard borrow={borrow} key={borrow._id} />
                    ))
                ) : (
                    <div className="text-center text-gray-500 mt-10">No borrowed books found.</div>
                )}
            </div>
        </section>
    );
}
