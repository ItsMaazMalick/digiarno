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
import {
  companyAddress,
  companyMail,
  companyNumber,
} from "@/constants/company";
import { MailSend } from "@/mailAction";
import { useState } from "react";
import { TitleText } from "../title/TitleText";
import { Textarea } from "../ui/textarea";
import { FormError } from "./FormError";
import FormSubmitButton from "./FormSubmitButton";
import { FormSuccess } from "./FormSuccess";
import { MailPlus, MapPinned, PhoneCall } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  message: z.string().min(10, "Message must be atleast 10 characters"),
});

export function ContactUs() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError("");
    setSuccess("");
    const response = await MailSend(values.name, values.email, values.message);
    if (response?.success) {
      setSuccess(response.success);
    } else {
      setError(response?.error);
    }
    form.reset();
  }

  return (
    <div className="px-2 lg:px-32">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-4 space-y-8 px-2"
        >
          <div className="flex flex-col md:flex-row justify-center items-start gap-4">
            <div className="space-y-6 ring-1 p-2 rounded-md shadow-md shadow-primary">
              <div className="space-y-2">
                <h3 className="font-semibold text-xl text-primary flex items-center gap-2">
                  <PhoneCall size={20} />
                  Phone
                </h3>
                <p>{companyNumber}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-xl text-primary flex items-center gap-2">
                  <MailPlus size={20} />
                  Email
                </h3>
                <p>{companyMail}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-xl text-primary flex items-center gap-2">
                  <MapPinned size={20} />
                  Address
                </h3>
                <p>{companyAddress}</p>
              </div>
            </div>
            <div className="w-full flex-1 space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
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
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {error && <FormError message={error} />}
              {success && <FormSuccess message={success} />}
              <div className="w-fit mx-auto">
                <FormSubmitButton
                  title="Submit"
                  loading={form.formState.isSubmitting}
                />
              </div>
            </div>
          </div>
        </form>
      </Form>
      <TitleText title="Find us on Map" />
      <div className="mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.8505594447943!2d73.17485007446787!3d33.73868023422443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc1a6b250e96b%3A0xb3f775c51296d257!2sDigiarno%20(SMC%20PVT)%20LTD!5e0!3m2!1sen!2s!4v1715660368917!5m2!1sen!2s"
          width="1000"
          height="1000"
          className="w-full h-[500px]"
        ></iframe>
      </div>
    </div>
  );
}
