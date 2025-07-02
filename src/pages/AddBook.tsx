import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addBook } from "@/redux/features/books/allBookSlice";
import { useAppDispatch } from "@/redux/hook";
import type { IBook, } from "@/types";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom";




export default function AddBook() {

    const [open, setOpen] = useState(false);
    
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

    const dispatch = useAppDispatch();

    const navigate = useNavigate();


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log('form data', data);
        dispatch(addBook(data as IBook));
        setOpen(false);
        form.reset();

        navigate('/books');
    }






    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button>Add Book</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogDescription className="sr-only">
                            Fill up this form to add a new book
                        </DialogDescription>
                        <DialogTitle>Add Book</DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">

                            {/* Title */}
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input {...field} value={field.value ?? ""} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Author */}
                            <FormField
                                control={form.control}
                                name="author"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Author</FormLabel>
                                        <FormControl>
                                            <Input {...field} value={field.value ?? ""} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Genre */}
                            <FormField
                                control={form.control}
                                name="genre"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Genre</FormLabel>
                                        <FormControl>
                                            <Input {...field} value={field.value ?? ""} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* ISBN */}
                            <FormField
                                control={form.control}
                                name="isbn"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>ISBN</FormLabel>
                                        <FormControl>
                                            <Input {...field} value={field.value ?? ""} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Copies */}
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
                                                onChange={(e) => field.onChange(Number(e.target.value))}
                                                value={field.value ?? ""}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Description */}
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea {...field} value={field.value ?? ""} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Available (Dropdown) */}
                            <FormField
                                control={form.control}
                                name="available"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Availability</FormLabel>
                                        <FormControl>
                                            <select
                                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                                                value={String(field.value ?? true)}  // convert boolean to string
                                                onChange={(e) => field.onChange(e.target.value === "true")} // convert string back to boolean
                                            >
                                                <option value="true">True</option>
                                                <option value="false">False</option>
                                            </select>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />


                            <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    );
}