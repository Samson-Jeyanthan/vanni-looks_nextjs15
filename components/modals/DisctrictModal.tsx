"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { DistrictsSchema } from "@/lib/validations/admin.validation";
import { Form } from "../ui/form";
import { FormInput } from "../inputs";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { FaPlus } from "react-icons/fa6";
import { createDistrictAction } from "@/lib/actions/location.action";

interface Props {
  type: "edit" | "create";
}

const DisctrictModal = ({ type }: Props) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof DistrictsSchema>>({
    resolver: zodResolver(DistrictsSchema),
    defaultValues: {
      district: "",
    },
  });

  async function onSubmit(values: z.infer<typeof DistrictsSchema>) {
    console.log(values);
    try {
      const res = await createDistrictAction({
        name: values.district.toLowerCase(),
        path: pathname,
      });

      if (res.status === "200") {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsOpen(false);
      form.reset();
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="flex gap-2 items-center p-3 bg-primary-500 text-light-900 font-medium rounded-lg">
        <FaPlus />
        Add District
      </DialogTrigger>
      <DialogContent aria-describedby={undefined} className="bg-light-900">
        <DialogHeader>
          <DialogTitle>Create District</DialogTitle>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 pt-4"
            >
              <FormInput
                form={form}
                inputName="district"
                formLabel="District Name"
              />
              <Button
                className="bg-primary-500 text-light-900 w-full"
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Creating..." : "Create"}
              </Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DisctrictModal;
