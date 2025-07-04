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
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800 ">

      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-16 md:py-16 text-white shadow-md rounded-b-3xl mb-10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center my-4">
            <Library className="w-12 h-12 md:w-16 md:h-16 text-indigo-100 mr-4 animate-fade-in-down" />
            <h1 className="text-2xl md:text-4xl font-extrabold leading-tight animate-fade-in-down">
              Expand Our Collection
            </h1>
          </div>
          <p className="text-md md:text-lg max-w-3xl mx-auto opacity-90 animate-fade-in-up">
            Share your favorite literary gems with the Bookly community! Easily add new books to our growing library.
          </p>
        </div>
      </section>


      <section className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-2xl border border-gray-100">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Add New Book</h2>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="mb-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center justify-center transition-transform transform hover:scale-105">
              <PlusCircle className="w-5 h-5 mr-2" /> Add Book
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-gray-900">Add Book Details</DialogTitle>
              <DialogDescription className="text-gray-600">
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
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Enter book title" value={field.value ?? ""} />
                        </FormControl>
                        {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
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
                        <FormLabel>Author</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Enter author name" value={field.value ?? ""} />
                        </FormControl>
                        {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
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
                        <FormLabel>Genre</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Enter genre" value={field.value ?? ""} />
                        </FormControl>
                        {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
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
                        <FormLabel>ISBN</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Enter ISBN number" value={field.value ?? ""} />
                        </FormControl>
                        {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
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
                        <FormLabel>Copies</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                            value={field.value ?? ""}
                            min={1}
                            placeholder="Number of copies"
                          />
                        </FormControl>
                        {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
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
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea {...field} placeholder="Brief description of the book" value={field.value ?? ""} />
                        </FormControl>
                        {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                      </FormItem>
                    )}
                  />

                  {/* Available */}
                  <FormField
                    control={form.control}
                    name="available"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Availability</FormLabel>
                        <FormControl>
                          <select
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                            value={String(field.value ?? true)}
                            onChange={(e) => field.onChange(e.target.value === "true")}
                          >
                            <option value="true">Available</option>
                            {/* <option value="false">Not Available</option> */}
                          </select>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <DialogFooter className="mt-6">
                    <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md transition-transform transform hover:scale-[1.01]">
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
