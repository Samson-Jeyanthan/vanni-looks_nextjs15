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
import { SubCategoriesSchema } from "@/lib/validations/admin.validation";
import { Form } from "../ui/form";
import { Dropdown, FormInput } from "../inputs";
import { Button } from "../ui/button";
import { CreateSubCategoryAction } from "@/lib/actions/categories.action";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { FaPlus } from "react-icons/fa6";

interface Props {
  type: "edit" | "create";
  mainCategoryData: any;
}

const SubCategoryModal = ({ type, mainCategoryData }: Props) => {
  const MAIN_CATEGORY_OPTIONS = JSON.parse(mainCategoryData)?.map(
    (category: any) => ({
      _id: category._id,
      name: category.title,
    })
  );
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof SubCategoriesSchema>>({
    resolver: zodResolver(SubCategoriesSchema),
    defaultValues: {
      title: "",
      mainCategoryId: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SubCategoriesSchema>) {
    console.log(values);
    try {
      const res = await CreateSubCategoryAction({
        title: values.title.toLowerCase(),
        mainCategoryId: values.mainCategoryId,
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
        Add Sub Category
      </DialogTrigger>
      <DialogContent aria-describedby={undefined} className="bg-light-900">
        <DialogHeader>
          <DialogTitle>Create Sub Category</DialogTitle>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 pt-4"
            >
              <Dropdown
                form={form}
                inputName="mainCategoryId"
                formLabel="Choose Main Category"
                options={MAIN_CATEGORY_OPTIONS}
              />
              <FormInput
                form={form}
                inputName="title"
                formLabel="Sub Category Name"
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

export default SubCategoryModal;
