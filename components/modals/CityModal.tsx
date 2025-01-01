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
import { CitiesSchema } from "@/lib/validations/admin.validation";
import { Form } from "../ui/form";
import { Dropdown, FormInput } from "../inputs";
import { Button } from "../ui/button";
import { createSubCategoryAction } from "@/lib/actions/categories.action";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { FaPlus } from "react-icons/fa6";
import { createCityAction } from "@/lib/actions/location.action";
import { MdEdit } from "react-icons/md";

interface Props {
  type: "edit" | "create";
  cityDetails?: string;
  districtData: any;
}

const CitiesModal = ({ type, districtData, cityDetails }: Props) => {
  const DISTRICT_OPTIONS = JSON.parse(districtData)?.map((category: any) => ({
    _id: category._id,
    name: category.name,
  }));
  const parsedData = cityDetails && JSON.parse(cityDetails);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof CitiesSchema>>({
    resolver: zodResolver(CitiesSchema),
    defaultValues: {
      cityName: parsedData?.cityName || "",
      districtId: parsedData?.districtId || "",
    },
  });

  async function onSubmit(values: z.infer<typeof CitiesSchema>) {
    console.log(values);
    try {
      const res = await createCityAction({
        cityName: values.cityName.toLowerCase(),
        districtId: values.districtId,
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
      {type === "edit" ? (
        <DialogTrigger>
          <MdEdit className="text-lg" />
        </DialogTrigger>
      ) : (
        <DialogTrigger className="flex gap-2 items-center p-3 bg-primary-500 text-light-900 font-medium rounded-lg">
          <FaPlus />
          Add City
        </DialogTrigger>
      )}

      <DialogContent aria-describedby={undefined} className="bg-light-900">
        <DialogHeader>
          <DialogTitle>{type === "edit" ? "Edit" : "Create"} City</DialogTitle>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 pt-4"
            >
              <Dropdown
                form={form}
                inputName="districtId"
                formLabel="Choose District"
                options={DISTRICT_OPTIONS}
                prevValue={parsedData?.districtId.name}
              />
              <FormInput
                form={form}
                inputName="cityName"
                formLabel="City Name"
              />
              <Button
                className="bg-primary-500 text-light-900 w-full"
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting
                  ? type === "edit"
                    ? "Editing..."
                    : "Creating..."
                  : type === "edit"
                    ? "Edit"
                    : "Create"}
              </Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CitiesModal;
