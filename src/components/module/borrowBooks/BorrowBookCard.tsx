
import type { IBorrow } from "@/types";

interface Props {
    borrow: IBorrow;
}

export default function BorrowBookCard({ borrow }: Props) {

    console.log(borrow);
    return (
        <div className="bg-white rounded-2xl shadow-md p-5 mb-4 border border-gray-200 hover:shadow-lg transition">
            <p className="text-lg text-gray-600 mb-1">
                Title: <span className="font-medium text-gray-800">{borrow?.book?.title}</span>
            </p>
            <p className="text-sm text-gray-600 mb-1">
                Quantity: <span className="font-medium text-gray-800">{borrow?.totalQuantity}</span>
            </p>
            <p className="text-sm text-gray-600 mb-1">
                ISBN: <span className="font-medium text-gray-800">{borrow?.book?.isbn}</span>
            </p>
            
        </div>
    );
}


