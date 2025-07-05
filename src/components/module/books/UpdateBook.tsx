
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
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 font-inter text-gray-800 dark:text-gray-100"> 
            <div className="lg:max-w-xl md:max-w-xl max-w-[350px] mx-auto p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl dark:shadow-2xl mt-24 mb-10 border border-gray-100 dark:border-gray-700">
                <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100"> 
                    Update Book: {book?.title}
                </h1>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 dark:text-gray-300">Title</FormLabel> 
                                    <FormControl>
                                        <Input
                                            className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400" 
                                            {...field}
                                            placeholder="Enter book title"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="author"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 dark:text-gray-300">Author</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400"
                                            {...field}
                                            placeholder="Enter author name"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="genre"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 dark:text-gray-300">Genre</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400"
                                            {...field}
                                            placeholder="Enter genre"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="isbn"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 dark:text-gray-300">ISBN</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400"
                                            {...field}
                                            placeholder="Enter ISBN"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="copies"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 dark:text-gray-300">Copies</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400"
                                            {...field}
                                            onChange={(e) => field.onChange(Math.max(0, Number(e.target.value)))}
                                            placeholder="Available copies"
                                            min={0}
                                            disabled={watch("available") === false} 
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
                                    <FormLabel className="text-gray-700 dark:text-gray-300">Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            className="bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-400"
                                            {...field}
                                            placeholder="Book description"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="available"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700 dark:text-gray-300">Availability</FormLabel>
                                    <FormControl>
                                        <select
                                            className="w-full border border-gray-300 rounded-md px-3 py-2
                                                       bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 dark:border-gray-600" 
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
                                className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
                            >
                                Update Book
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </div>
        </div>
    );
}
