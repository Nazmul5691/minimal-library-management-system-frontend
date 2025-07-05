/* eslint-disable @typescript-eslint/no-explicit-any */

import { BookText, Hash, Barcode } from 'lucide-react';

export default function BorrowBookCard({ borrow }: any) {
    console.log(borrow);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-xl p-6 border border-gray-100 dark:border-gray-700
                         flex flex-col justify-between h-full
                         hover:shadow-xl dark:hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 ease-in-out cursor-pointer">

            <div className="flex items-start mb-4">
                <BookText className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1 mr-2" />
                <h3 className="text-xl md:text-lg font-bold pt-1 text-black dark:text-gray-100 leading-tight">
                    {borrow?.book?.title}
                </h3>
            </div>

            <div className="space-y-3">
                {/* Quantity */}
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Hash className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                    <span>Total Quantity: <span className="font-semibold text-black dark:text-gray-100">{borrow?.totalQuantity}</span></span>
                </div>

                {/* ISBN */}
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Barcode className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>ISBN: <span className="font-semibold text-black dark:text-gray-100">{borrow?.book?.isbn}</span></span>
                </div>
            </div>
        </div>
    );
}