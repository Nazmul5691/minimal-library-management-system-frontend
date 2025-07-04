

import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useParams } from "react-router-dom";
import {
    useForm,
    type FieldValues,
    type SubmitHandler,
} from "react-hook-form";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useGetSingleBookQuery, useUpdateBookMutation } from "@/redux/api/baseApi";

export default function UpdateBook() {
    const { id } = useParams<{ id: string }>();
    const { data } = useGetSingleBookQuery(id);
    const book = data?.data;

    const [updatedBook] = useUpdateBookMutation();

    const navigate = useNavigate();

    const form = useForm({
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

    const { reset, watch, setValue } = form;

    useEffect(() => {
        if (book) {
            reset(book);
        }
    }, [book, reset]);

    
    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "available" && value.available === false) {
                setValue("copies", 0);
            }
        });
        return () => subscription.unsubscribe();
    }, [watch, setValue]);

    const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
        if (!id) return;

        try {
            await updatedBook({ bookId: id, updatedData: formData }).unwrap();

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Book Updated Successfully",
                showConfirmButton: false,
                timer: 1500,
            });

            navigate("/books");
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Update failed",
                text: "Something went wrong while updating the book.",
            });
            console.log(error);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-8 bg-white rounded-3xl shadow-xl mt-24 mb-10">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">
                Update Book: {book?.title}
            </h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Enter book title" />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Author</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Enter author name" />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="genre"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Genre</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Enter genre" />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="isbn"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ISBN</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Enter ISBN" />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="copies"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Copies</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        {...field}
                                        onChange={(e) => field.onChange(Math.max(0, Number(e.target.value)))}
                                        placeholder="Available copies"
                                        min={0}
                                        disabled={watch("available") === false} // disable if unavailable
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea {...field} placeholder="Book description" />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="available"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Availability</FormLabel>
                                <FormControl>
                                    <select
                                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                                        value={String(field.value ?? true)}
                                        onChange={(e) => field.onChange(e.target.value === "true")}
                                    >
                                        <option value="true">Available</option>
                                        <option value="false">Unavailable</option>
                                    </select>
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <DialogFooter>
                        <Button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
                        >
                            Update Book
                        </Button>
                    </DialogFooter>
                </form>
            </Form>
        </div>
    );
}

