"use client";

import { Form } from "../ui/form";
import { LoginSchema } from "@/lib/validations/admin.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormInput } from "../inputs";
import { Button } from "../ui/button";

const AdminLoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 rounded-2xl bg-white p-8 items-center w-96"
      >
        <FormInput form={form} inputName="email" formLabel="Email" />
        <FormInput form={form} inputName="password" formLabel="Password" />
        <Button className="bg-primary-500 text-light-900 w-full">Login</Button>
      </form>
    </Form>
  );
};

export default AdminLoginForm;
