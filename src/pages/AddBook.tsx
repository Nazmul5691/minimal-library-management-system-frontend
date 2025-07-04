import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBookMutation } from "@/redux/api/baseApi";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddBook() {
  const [open, setOpen] = useState(false);
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

  // const dispatch = useAppDispatch();
  const [createBook, {data}] = useCreateBookMutation();

  console.log('create book data', data);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {

    console.log("form data", data);

    const res = await createBook(data)

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
  };

  return (
    <div className="max-w-lg mx-auto my-20 p-6 bg-white rounded-lg shadow-2xl">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Add New Book</h2>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="mb-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium">
            Add Book
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogDescription className="sr-only">
              Fill out this form to add a new book
            </DialogDescription>
            <DialogTitle className="text-xl font-semibold text-gray-900">Add Book Details</DialogTitle>
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
                      <Input {...field} placeholder="Enter book title" value={field.value ?? ""} />
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
                      <Input {...field} placeholder="Enter author name" value={field.value ?? ""} />
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
                      <Input {...field} placeholder="Enter genre" value={field.value ?? ""} />
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
                      <Input {...field} placeholder="Enter ISBN number" value={field.value ?? ""} />
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
                        min={1}
                        placeholder="Number of copies"
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
                      <Textarea {...field} placeholder="Brief description" value={field.value ?? ""} />
                    </FormControl>
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
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        value={String(field.value ?? true)}
                        onChange={(e) => field.onChange(e.target.value === "true")}
                      >
                        <option value="true">Available</option>
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">
                  Save Book
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}



