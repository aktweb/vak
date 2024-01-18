"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { XSquare } from "lucide-react";

import { useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Dispatch, SetStateAction } from "react";
import { QueryPost } from "./submit";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Enter Valid phone number",
  }),
  email: z.string().email()
  ,desc: z.string(),
});



export function QFormMain() {
 const { toast } = useToast();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log("onSub");
    QueryPost(values);
    toast({
      title: "Submitted Successfully",
      description: "We will get back to you shortly",
    });
    // ✅ This will be type-safe and validated.
    // console.log(values);
  
  }

  const ref = useRef<HTMLFormElement>(null);

  return (
    <div
      className="justify-center flex items-center mt-20 mb-10 "
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("lg:w-[800px]")}
        >
          <h1>Tell Us What You Are Looking For ?</h1>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
                    {...field}
                    className={cn("lg:w-1/2")}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    {...field}
                    className={cn("lg:w-1/2")}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  placeholder="Phone number"
                  {...field}
                  className={cn("lg:w-1/2")}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="desc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <Textarea
                  rows={6}
                  placeholder="Describe your requirement in detail"
                  {...field}
                  className={cn("lg:w-2/3 mb-2")}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-[#fe9030] mt-3 mb-3">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
