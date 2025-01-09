"use client";

import { BusinessSchema } from "@/lib/validations/admin.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { FormInput, TextArea } from "../inputs";
import { Button } from "../ui/button";

const BusinessForm = () => {
  const form = useForm<z.infer<typeof BusinessSchema>>({
    resolver: zodResolver(BusinessSchema),
    defaultValues: {
      businessName: "",
    },
  });

  function onSubmit(values: z.infer<typeof BusinessSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full max-w-5xl"
      >
        <FormInput
          form={form}
          inputName="businessName"
          formLabel="Business Name"
          formDescription="The name of your business"
        />
        <FormInput
          form={form}
          inputName="businessName"
          formLabel="Business Name"
          formDescription="The name of your business"
        />
        <FormInput
          form={form}
          inputName="businessName"
          formLabel="Business Name"
          formDescription="The name of your business"
        />

        <TextArea
          form={form}
          formDescription="The name of your business"
          formLabel="Business Name"
          inputName="businessName"
          maxLength={100}
        />

        <Button className="bg-primary-500 text-light-900 w-full">
          Add Business
        </Button>
      </form>
    </Form>
  );
};

export default BusinessForm;
