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
import { MainCategoriesSchema } from "@/lib/validations/admin.validation";
import { Form, FormField } from "../ui/form";
import { FormInput, IconInput } from "../inputs";
import { IMediaProps } from "@/types/utils.types";
import { Button } from "../ui/button";
import { CreateMainCategoryAction } from "@/lib/actions/categories.action";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { FaPlus } from "react-icons/fa6";

interface Props {
  type: "edit" | "create";
}

const CreateCategory = ({ type }: Props) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof MainCategoriesSchema>>({
    resolver: zodResolver(MainCategoriesSchema),
    defaultValues: {
      iconFile: [],
      title: "",
    },
  });
  const [error, setError] = useState("");

  const [previousMedia, setPreviousMedia] = useState<IMediaProps>({
    mediaType: "svg",
    mediaURL: "",
    thumbnailURL: "",
  });

  async function onSubmit(values: z.infer<typeof MainCategoriesSchema>) {
    console.log(values);
    try {
      const res = await CreateMainCategoryAction({
        title: values.title.toLowerCase(),
        icon: previousMedia,
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
        Add Main Category
      </DialogTrigger>
      <DialogContent aria-describedby={undefined} className="bg-light-900">
        <DialogHeader>
          <DialogTitle>Create Main Category</DialogTitle>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 pt-4"
            >
              <FormField
                control={form.control}
                name="iconFile"
                render={({ field }) => (
                  <IconInput
                    fieldChange={field.onChange}
                    previousMedia={previousMedia}
                    setPreviousMedia={setPreviousMedia}
                  />
                )}
              />
              <FormInput
                form={form}
                inputName="title"
                formLabel="Category Name"
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

export default CreateCategory;
