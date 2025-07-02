import { useAppSelector } from "@/redux/hook";

export default function Books() {

    const books = useAppSelector((state) => state.books.book);

    console.log('all books', books);
    return (
        <div>
            <h1>This is all Books component</h1>
        </div>
    );
}