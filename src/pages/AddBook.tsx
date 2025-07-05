
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Library, PlusCircle } from 'lucide-react';

import { useCreateBookMutation } from "@/redux/api/baseApi";

interface BookFormInputs {
    title: string;
    author: string;
    genre: string;
    isbn: string;
    copies: number;
    description: string;
    available: boolean;
}

export default function AddBook() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const form = useForm<BookFormInputs>({
        defaultValues: {
            title: "",
            author: "",
            genre: "",
            isbn: "",
            copies: 1,
            description: "",
            available: true,
        },
    });

    const [createBook, { data }] = useCreateBookMutation();

    console.log('create book data', data);

    const onSubmit: SubmitHandler<BookFormInputs> = async (formData) => {
        console.log("form data", formData);

        try {
            const res = await createBook(formData).unwrap();

            console.log(res);

            setOpen(false);
            form.reset();

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Book Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });

            navigate("/books");

        } catch (error) {
            console.error("Failed to add book:", error);
            let errorMessage = "Failed to add the book. Please try again.";

           
            if ((error as any)?.data?.message) {
                errorMessage = (error as any).data.message;
            }
            if (errorMessage.toLowerCase().includes("isbn")) {
                setOpen(false)
                errorMessage = "A book with this ISBN already exists!";
            }
            else if (error instanceof Error) {
                errorMessage = error.message;
            }

            Swal.fire({
                icon: "error",
                title: "Error",
                text: errorMessage,
                showCloseButton: true
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-inter pb-10 text-gray-800 dark:text-gray-100">

            {/* Banner Section */}
            <section className="bg-gradient-to-br from-indigo-600 to-purple-700 pb-12 pt-20 text-white shadow-md rounded-b-3xl  md:mb-14 lg:mb-12">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <div className="flex items-center justify-center my-4">
                        <Library className="w-10 h-10 md:w-16 md:h-16 text-indigo-100 mr-3 md:mr-4 animate-fade-in-down" />
                        <h1 className="text-xl md:text-4xl font-extrabold leading-tight animate-fade-in-down">
                            Expand Our Collection
                        </h1>
                    </div>
                    <p className="text-sm md:text-lg max-w-3xl mx-auto opacity-90 animate-fade-in-up px-2">
                        Share your favorite literary gems with the Bookly community! Easily add new books to our growing library.
                    </p>
                </div>
            </section>

            {/* Add New Book Form Section */}
            <section className="max-w-[300px] md:max-w-lg mx-auto mt-4 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-100 dark:border-gray-700 ">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-100">Add New Book</h2>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button className="mb-6 cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center justify-center transition-transform transform hover:scale-105">
                            <PlusCircle className="w-5 h-5 mr-2" /> Add Book
                        </Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700">
                        <DialogHeader>
                            <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">Add Book Details</DialogTitle>
                            <DialogDescription className="text-gray-600 dark:text-gray-400">
                                Fill out the form below to add a new book to the library.
                            </DialogDescription>
                        </DialogHeader>

                        <div className="overflow-y-auto max-h-[70vh] px-2 pb-4">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                                    {/* Title */}
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        rules={{ required: "Title is required" }}
                                        render={({ field, fieldState }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-700 dark:text-gray-300">Title</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400"
                                                        {...field}
                                                        placeholder="Enter book title"
                                                        value={field.value ?? ""}
                                                    />
                                                </FormControl>
                                                {fieldState.error && <FormMessage className="text-red-500 dark:text-red-400">{fieldState.error.message}</FormMessage>}
                                            </FormItem>
                                        )}
                                    />

                                    {/* Author */}
                                    <FormField
                                        control={form.control}
                                        name="author"
                                        rules={{ required: "Author is required" }}
                                        render={({ field, fieldState }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-700 dark:text-gray-300">Author</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400"
                                                        {...field}
                                                        placeholder="Enter author name"
                                                        value={field.value ?? ""}
                                                    />
                                                </FormControl>
                                                {fieldState.error && <FormMessage className="text-red-500 dark:text-red-400">{fieldState.error.message}</FormMessage>}
                                            </FormItem>
                                        )}
                                    />

                                    {/* Genre */}
                                    <FormField
                                        control={form.control}
                                        name="genre"
                                        rules={{ required: "Genre is required" }}
                                        render={({ field, fieldState }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-700 dark:text-gray-300">Genre</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400"
                                                        {...field}
                                                        placeholder="Enter genre"
                                                        value={field.value ?? ""}
                                                    />
                                                </FormControl>
                                                {fieldState.error && <FormMessage className="text-red-500 dark:text-red-400">{fieldState.error.message}</FormMessage>}
                                            </FormItem>
                                        )}
                                    />

                                    {/* ISBN */}
                                    <FormField
                                        control={form.control}
                                        name="isbn"
                                        rules={{ required: "ISBN is required" }}
                                        render={({ field, fieldState }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-700 dark:text-gray-300">ISBN</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400"
                                                        {...field}
                                                        placeholder="Enter ISBN number"
                                                        value={field.value ?? ""}
                                                    />
                                                </FormControl>
                                                {fieldState.error && <FormMessage className="text-red-500 dark:text-red-400">{fieldState.error.message}</FormMessage>}
                                            </FormItem>
                                        )}
                                    />

                                    {/* Copies */}
                                    <FormField
                                        control={form.control}
                                        name="copies"
                                        rules={{
                                            required: "Copies is required",
                                            min: { value: 1, message: "Must have at least 1 copy" },
                                        }}
                                        render={({ field, fieldState }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-700 dark:text-gray-300">Copies</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400"
                                                        {...field}
                                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                                        value={field.value ?? ""}
                                                        min={1}
                                                        placeholder="Number of copies"
                                                    />
                                                </FormControl>
                                                {fieldState.error && <FormMessage className="text-red-500 dark:text-red-400">{fieldState.error.message}</FormMessage>}
                                            </FormItem>
                                        )}
                                    />

                                    {/* Description */}
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        rules={{ required: "Description is required" }}
                                        render={({ field, fieldState }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-700 dark:text-gray-300">Description</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400"
                                                        {...field}
                                                        placeholder="Brief description of the book"
                                                        value={field.value ?? ""}
                                                    />
                                                </FormControl>
                                                {fieldState.error && <FormMessage className="text-red-500 dark:text-red-400">{fieldState.error.message}</FormMessage>}
                                            </FormItem>
                                        )}
                                    />

                                    {/* Available (Select field) */}
                                    <FormField
                                        control={form.control}
                                        name="available"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-700 dark:text-gray-300">Availability</FormLabel>
                                                <FormControl>
                                                    <select
                                                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors
                                                                   bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 dark:border-gray-600"
                                                        value={String(field.value ?? true)}
                                                        onChange={(e) => field.onChange(e.target.value === "true")}
                                                    >
                                                        <option value="true">Available</option>
                                                    </select>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />

                                    <DialogFooter className="mt-6">
                                        <Button
                                            type="submit"
                                            className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md transition-transform transform hover:scale-[1.01]"
                                        >
                                            Save Book
                                        </Button>
                                    </DialogFooter>
                                </form>
                            </Form>
                        </div>
                    </DialogContent>
                </Dialog>
            </section>
        </div>
    );
}

