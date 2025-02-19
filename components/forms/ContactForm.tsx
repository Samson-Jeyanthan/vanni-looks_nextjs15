"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormMessage } from "../ui/form";
import { ContactSchema } from "@/lib/validations/admin.validation";
import { FormInput, TextArea } from "../inputs";
import { Button } from "../ui/button";

const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ContactSchema>) {}
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-1/2"
      >
        <FormInput
          form={form}
          inputName="name"
          formLabel="Name"
          placeholder="John Doe"
          customClassName="rounded-full px-4"
        />
        <FormInput
          form={form}
          inputName="email"
          formLabel="Email"
          placeholder="example@example.com"
          customClassName="rounded-full px-4"
        />
        <TextArea
          form={form}
          inputName="description"
          formLabel="Description"
          maxLength={500}
          customClassName="h-72 rounded-2xl p-4"
          placeholder="Tell us what you need and how can we help to grow your business"
        />
        <footer className="flex justify-end">
          <Button className="bg-primary-500 text-light-900 w-max px-6 rounded-full">
            Submit
          </Button>
        </footer>
      </form>
    </Form>
  );
};

export default ContactForm;
