"use client";

import { Form } from "../ui/form";
import { LoginSchema } from "@/lib/validations/admin.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormInput } from "../inputs";
import { Button } from "../ui/button";
import { validateLoginAction } from "@/lib/actions/adminAuth.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const AdminLoginForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    console.log(values);
    const res = await validateLoginAction({
      email: values.email,
      password: values.password,
    });
    console.log(res);
    if (res?.status === "200") {
      toast.success(res.message, { duration: 5000 });
      router.push("/admin/businesses");
    } else if (res?.status === "400") {
      toast.error(res?.message, { duration: 5000 });
    } else {
      toast.error("Something went wrong", { duration: 5000 });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 rounded-2xl bg-white items-center w-full"
      >
        <FormInput form={form} inputName="email" formLabel="Email" />
        <FormInput form={form} inputName="password" formLabel="Password" />
        <Button className="bg-primary-500 text-light-900 w-full">Login</Button>
      </form>
    </Form>
  );
};

export default AdminLoginForm;
