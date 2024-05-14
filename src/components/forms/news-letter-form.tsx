"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { sendNewsLetterMail } from "@/mailAction";
import FormSubmitButton from "./FormSubmitButton";

const formSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

export function NewsLetterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await sendNewsLetterMail(values.email);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex justify-start items-center gap-2 lg:pr-2"
      >
        <div className="w-[80%] lg:w-[70%]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Enter Your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormSubmitButton
            title="Join"
            loading={form.formState.isSubmitting}
          />
        </div>
      </form>
    </Form>
  );
}
