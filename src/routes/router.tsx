import App from "@/App";
import BookDetails from "@/components/module/books/BookDetails";
import UpdateBook from "@/components/module/books/UpdateBook";
import AboutUs from "@/pages/AboutUs";
import AddBook from "@/pages/AddBook";
import Authors from "@/pages/Authors";
import Books from "@/pages/Books";
import BorrowBook from "@/pages/BorrowBook";
import BorrowSummary from "@/pages/BorrowSummary";
import ContactUs from "@/pages/ContactUs";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/books",
                element: <Books />
            },
            {
                path: "/books/:id",
                element: <BookDetails />,
            },
            {
                path: "/edit-book/:id",
                element: <UpdateBook />,
            },
            {
                path: "/create-book",
                element: <AddBook />
            },
            {
                path: "/borrow/:bookId",
                element: <BorrowBook />
            },
            {
                path: "/borrow-summary",
                element: <BorrowSummary />
            },
            {
                path: "/aboutUs",
                element: <AboutUs />
            },
            {
                path: "/authors",
                element: <Authors />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
        ]
    }
])