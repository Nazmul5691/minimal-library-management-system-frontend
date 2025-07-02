// import { useAppSelector } from "@/redux/hook";
// import { useParams } from "react-router-dom";

// export default function UpdateBook() {

//     const { id } = useParams<{ id: string }>();

//     const books = useAppSelector((state) => state.books.book);

//     const book = books.find((b) => b._id === id);

//     if (!book) {
//         return <div className="text-red-600">Book not found</div>;
//     }


//     return (
//         <div>
//             <h1>This is UpdateBook component{book.title}</h1>
//         </div>
//     );
// }



import { useAppSelector } from "@/redux/hook";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

export default function UpdateBook() {
    const { id } = useParams<{ id: string }>();
    const books = useAppSelector((state) => state.books.book);
    const book = books.find((b) => b._id === id);

    const [formData, setFormData] = useState({
        title: book?.title || "",
        author: book?.author || "",
        genre: book?.genre || "",
        isbn: book?.isbn || "",
        description: book?.description || "",
        copies: book?.copies || 0,
        available: book?.available ?? true,
    });

    if (!book) {
        return (
            <div className="text-center mt-20 text-red-600 text-lg font-semibold">
                Book not found
            </div>
        );
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;

        let newValue: string | number | boolean = value;

        if (type === "checkbox") {
            // Narrow e.target to HTMLInputElement because only input has checked
            newValue = (e.target as HTMLInputElement).checked;
        } else if (type === "number") {
            newValue = Number(value);
        }

        setFormData(prev => ({
            ...prev,
            [name]: newValue,
        }));
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: dispatch update action or call API
        alert("Update feature not implemented yet!");
    };

    return (
        <div className="max-w-xl mx-auto p-8 bg-white rounded-3xl shadow-lg mt-12">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">Update Book: {book.title}</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Title */}
                <label className="flex flex-col">
                    <span className="mb-1 font-semibold text-gray-700">Title</span>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>

                {/* Author */}
                <label className="flex flex-col">
                    <span className="mb-1 font-semibold text-gray-700">Author</span>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                        className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>

                {/* Genre */}
                <label className="flex flex-col">
                    <span className="mb-1 font-semibold text-gray-700">Genre</span>
                    <input
                        type="text"
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        required
                        className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>

                {/* ISBN */}
                <label className="flex flex-col">
                    <span className="mb-1 font-semibold text-gray-700">ISBN</span>
                    <input
                        type="text"
                        name="isbn"
                        value={formData.isbn}
                        onChange={handleChange}
                        required
                        className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>

                {/* Description */}
                <label className="flex flex-col">
                    <span className="mb-1 font-semibold text-gray-700">Description</span>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                </label>

                {/* Copies */}
                <label className="flex flex-col">
                    <span className="mb-1 font-semibold text-gray-700">Copies</span>
                    <input
                        type="number"
                        name="copies"
                        value={formData.copies}
                        onChange={handleChange}
                        min={0}
                        required
                        className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>

                {/* Available */}
                <label className="inline-flex items-center gap-2 text-gray-700 font-semibold">
                    <input
                        type="checkbox"
                        name="available"
                        checked={formData.available}
                        onChange={handleChange}
                        className="w-5 h-5 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                    Available
                </label>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2 font-semibold transition"
                    >
                        Update Book
                    </button>
                    <Link
                        to="/books"
                        className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    );
}
