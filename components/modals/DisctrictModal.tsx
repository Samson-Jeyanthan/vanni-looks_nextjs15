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
import {
  createDistrictAction,
  editDistrictAction,
} from "@/lib/actions/location.action";
import { MdEdit } from "react-icons/md";

interface Props {
  type: "edit" | "create";
  districtDetails?: string;
}

const DisctrictModal = ({ type, districtDetails }: Props) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const parsedData = districtDetails && JSON.parse(districtDetails);

  const form = useForm<z.infer<typeof DistrictsSchema>>({
    resolver: zodResolver(DistrictsSchema),
    defaultValues: {
      district: parsedData?.name || "",
    },
  });

  async function onSubmit(values: z.infer<typeof DistrictsSchema>) {
    console.log(values);
    let res = {
      status: "",
      message: "",
    };

    try {
      if (type === "edit") {
        res = await editDistrictAction({
          _id: parsedData?._id,
          name: values.district.toLowerCase(),
          path: pathname,
        });
      }
      res = await createDistrictAction({
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
      {type === "edit" ? (
        <DialogTrigger>
          <MdEdit className="text-lg" />
        </DialogTrigger>
      ) : (
        <DialogTrigger className="flex gap-2 items-center px-4 py-2.5 text-sm bg-primary-500 text-light-900 font-medium rounded-lg">
          <FaPlus />
          Add District
        </DialogTrigger>
      )}

      <DialogContent aria-describedby={undefined} className="bg-light-900">
        <DialogHeader>
          <DialogTitle>
            {type === "edit" ? "Edit" : "Create"} District
          </DialogTitle>
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

export default DisctrictModal;
