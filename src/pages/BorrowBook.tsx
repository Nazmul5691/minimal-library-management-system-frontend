/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */


import { useState, useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { BookPlus, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

import { useBorrowBookMutation, useGetSingleBookQuery } from "@/redux/api/baseApi";
import { useNavigate, useParams } from "react-router-dom";

interface FormValues {
  quantity: number;
  dueDate: Date | undefined;
}

export default function BorrowBook() {
  const { bookId } = useParams();
  const { data: book, isLoading, isError } = useGetSingleBookQuery(bookId ?? "");
  const [open, setOpen] = useState(false);
  const [borrowBook] = useBorrowBookMutation();
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    defaultValues: {
      quantity: 1,
      dueDate: undefined,
    },
  });

  const { reset } = form;

  useEffect(() => {
    if (book) {
      reset({
        quantity: 1,
        dueDate: undefined,
      });
    }
  }, [book, reset]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!book) return;

    const quantityNumber = Number(data.quantity);

    if (quantityNumber > book.copies) {
      Swal.fire(
        "Error",
        `You cannot borrow more than available copies. Available copies: ${book.copies}`,
        "error"
      );
      return;
    }

    try {
      await borrowBook({
        book: bookId,
        quantity: quantityNumber,
        dueDate: data.dueDate ? data.dueDate.toISOString() : undefined,
      }).unwrap();

      Swal.fire("Success", "Book borrowed successfully!", "success");
      setOpen(false);
      form.reset();
      
      navigate("/borrow-summary");

    } catch (error) {

      let errorMessage = "Failed to borrow the book. Please try again.";
      if ((error as any)?.data?.message) {
        errorMessage = (error as any).data.message;
      }
      else if (error instanceof Error) {
        errorMessage = error.message;
      }

      Swal.fire("Error", errorMessage, "error");
      setOpen(false);
    }
  };

  if (isLoading) return <p>Loading book data...</p>;
  if (isError || !book) return <p>Book not found or an error occurred.</p>;

  return (
    <div>
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-16 md:py-20 text-white shadow-md rounded-b-3xl mb-10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center my-4">
            <BookPlus className="w-12 h-12 md:w-16 md:h-16 text-indigo-100 mr-4 animate-fade-in-down" />
            <h1 className="text-2xl md:text-4xl font-extrabold leading-tight animate-fade-in-down">
              Borrowing: {book.title}
            </h1>
          </div>
          <p className="text-md md:text-lg max-w-3xl mx-auto opacity-90 animate-fade-in-up">
            Explore this captivating story by <span className="font-semibold">{book.author}</span>, a fantastic read in the <span className="font-semibold">{book.genre}</span> category.
          </p>

        </div>
      </section>

      <section className="">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="mb-10 block w-[200px] mx-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium">
              Borrow this Book
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-gray-900">
                Borrow Book
              </DialogTitle>
              <DialogDescription>
                Fill out the form below to borrow the selected book.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                {/* Quantity Input */}
                <FormField
                  control={form.control}
                  name="quantity"
                  rules={{
                    required: "Quantity is required",
                    min: { value: 1, message: "Must borrow at least 1" },
                    max: {
                      value: book.copies,
                      message: `Cannot borrow more than ${book.copies} copies`,
                    },
                  }}
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={1}
                          max={String(book.copies)} // <-- max as string to avoid warning
                          {...field}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                        />
                      </FormControl>
                      {fieldState.error && (
                        <p className="text-red-500 text-sm">{fieldState.error.message}</p>
                      )}
                    </FormItem>
                  )}
                />

                {/* Due Date Picker */}
                <FormField
                  control={form.control}
                  name="dueDate"
                  rules={{ required: "Due date is required" }}
                  render={({ field }) => {
                    const [popoverOpen, setPopoverOpen] = useState(false);
                    return (
                      <FormItem className="flex flex-col">
                        <FormLabel>Due Date</FormLabel>
                        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? format(field.value, "PPP") : "Pick a date"}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={(date) => {
                                field.onChange(date);
                                setPopoverOpen(false);
                              }}
                              captionLayout="dropdown"
                            />
                          </PopoverContent>
                        </Popover>
                      </FormItem>
                    );
                  }}
                />

                <DialogFooter>
                  <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
                  >
                    Confirm Borrow
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
}




