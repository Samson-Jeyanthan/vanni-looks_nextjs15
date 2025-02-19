"use client";

import { BusinessSchema } from "@/lib/validations/admin.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormMessage } from "../ui/form";
import {
  DateInput,
  Dropdown,
  FormInput,
  ArrayInput,
  TextArea,
  MediaInput,
  CoverPhotoInput,
} from "../inputs";
import { Button } from "../ui/button";
import LogoInput from "../inputs/LogoInput";
import { getSubCategoriesByMainCategoryId } from "@/lib/actions/categories.action";
import { getCitiesByDistrictIdAction } from "@/lib/actions/location.action";
import { useState } from "react";
import { createBusinessAction } from "@/lib/actions/business.action";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { PHONE_OPTIONS, SOCIAL_MEDIA_OPTIONS } from "@/constants";
import { IMediaProps } from "@/types/utils.types";

type Props = {
  mainCategories: string;
  districts: string;
  businessDetails?: string;
};

const BusinessForm = ({
  mainCategories,
  districts,
  businessDetails,
}: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const parsedBusinessDetails =
    businessDetails && JSON.parse(businessDetails || "");

  const [subCategoryOptions, setSubCategoryOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [previousMedia, setPreviousMedia] = useState<IMediaProps[]>(
    parsedBusinessDetails?.media || []
  );

  const MAIN_CATEGORY_OPTIONS = JSON.parse(mainCategories)?.map(
    (category: any) => ({
      _id: category._id,
      name: category.title,
    })
  );

  const DISTRICTS_OPTIONS = JSON.parse(districts)?.map((district: any) => ({
    _id: district._id,
    name: district.name,
  }));

  const form = useForm<z.infer<typeof BusinessSchema>>({
    resolver: zodResolver(BusinessSchema),
    defaultValues: {
      businessName: "",
      businessLogo: [],
      coverPhoto: [],
      description: "",
      establishedDate: "",
      address: "",
      district: "",
      city: "",
      mainCategory: "",
      subCategory: "",
      email: "",
      website: "",
      registrationNumber: "",
      mediaFiles: [],
      phone: [],
      socialLinks: [],
    },
  });

  async function fetchSubCategories(id: string) {
    const res: any = await getSubCategoriesByMainCategoryId(id, true);
    if (res.status === "200") {
      const SUB_CATEGORY_OPTIONS = JSON.parse(res?.data)?.map(
        (category: any) => ({
          _id: category._id,
          name: category.title,
        })
      );
      setSubCategoryOptions(SUB_CATEGORY_OPTIONS);
    }
  }

  async function fetchCities(id: string) {
    const res: any = await getCitiesByDistrictIdAction({
      districtId: id,
      isClient: true,
    });
    if (res.status === "200") {
      const CITIES_OPTIONS = JSON.parse(res?.data)?.map((category: any) => ({
        _id: category._id,
        name: category.cityName,
      }));
      setCityOptions(CITIES_OPTIONS);
    }
  }

  async function onSubmit(values: z.infer<typeof BusinessSchema>) {
    console.log(values);
    const res = await createBusinessAction({
      name: values.businessName,
      description: values.description,
      businessLogo: "",
      registrationType: "business",
      registrationNumber: values.registrationNumber,
      establishedAt: values.establishedDate,
      address: values.address,
      districtId: values.district,
      cityId: values.city,
      mainCategoryId: values.mainCategory,
      subCategoryId: values.subCategory,
      email: values.email,
      website: values.website,
      phone: [],
      media: [],
      socialLinks: [],
      path: pathname,
    });

    if (res.status === "200") {
      toast.success(res.message, { duration: 5000 });
    } else {
      toast.error(res.message, { duration: 5000 });
    }
    router.push("/admin/businesses");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full max-w-5xl"
      >
        <h2 className="business-form-sub-heading mt-0">Basic Info</h2>

        <FormField
          control={form.control}
          name="businessLogo"
          render={({ field }) => (
            <CoverPhotoInput fieldChange={field.onChange} />
          )}
        />

        <div className="flex items-center gap-20">
          <FormField
            control={form.control}
            name="businessLogo"
            render={({ field }) => (
              <LogoInput
                fieldChange={field.onChange}
                defaultPic="/images/business-logo-d9d9d9.png"
              />
            )}
          />

          <FormInput
            form={form}
            inputName="businessName"
            formLabel="Business Name"
            formDescription="The name of your business"
          />
        </div>

        <TextArea
          form={form}
          formLabel="About Business"
          inputName="description"
          maxLength={500}
        />

        <div className="w-1/2 pr-5">
          <FormInput
            form={form}
            inputName="registrationNumber"
            formLabel="Registration Number"
          />
        </div>

        <FormField
          control={form.control}
          name="establishedDate"
          render={({ field }) => (
            <>
              <DateInput
                formLabel="Established Data"
                fieldChange={field.onChange}
                isoDate={form.getValues("establishedDate")}
              />
              <FormMessage className="text-xs text-red-500 -mt-2" />
            </>
          )}
        />

        <div className="flex gap-8">
          <Dropdown
            form={form}
            inputName="mainCategory"
            formLabel="Choose Main Category"
            options={MAIN_CATEGORY_OPTIONS}
            onValueChange={(id: string) => fetchSubCategories(id)}
          />

          <Dropdown
            form={form}
            inputName="subCategory"
            formLabel="Choose Sub Category"
            options={subCategoryOptions}
            dependentFieldPlaceholder="Please select main category"
            dependentFieldValue={form.getValues("mainCategory") !== ""}
          />
        </div>

        <h2 className="business-form-sub-heading">Location Info</h2>

        <FormInput
          form={form}
          inputName="address"
          formLabel="Address"
          formDescription=""
        />

        <div className="flex gap-8">
          <Dropdown
            form={form}
            inputName="district"
            formLabel="Choose District"
            options={DISTRICTS_OPTIONS}
            onValueChange={(id: string) => fetchCities(id)}
          />

          <Dropdown
            form={form}
            inputName="city"
            formLabel="Choose City"
            options={cityOptions}
            dependentFieldPlaceholder="Please select district"
            dependentFieldValue={form.getValues("district") !== ""}
          />
        </div>

        <h2 className="business-form-sub-heading">
          Contact & Social Links Info
        </h2>

        <div className="flex gap-8">
          <FormInput
            form={form}
            inputName="email"
            formLabel="Email Address"
            formDescription="The name of your business"
          />
          <FormInput
            form={form}
            inputName="website"
            formLabel="Portfolio / Website"
            formDescription="The name of your business"
          />
        </div>

        <ArrayInput formLabel="Phone" options={PHONE_OPTIONS} />
        <ArrayInput formLabel="Social Links" options={SOCIAL_MEDIA_OPTIONS} />

        <h2 className="business-form-sub-heading">
          Media Files
          <span className="text-sm text-light-500 ml-2">(Videos & Images)</span>
        </h2>

        <FormField
          control={form.control}
          name="mediaFiles"
          render={({ field }) => (
            <MediaInput
              fieldChange={field.onChange}
              previousMedia={previousMedia}
              setPreviousMedia={setPreviousMedia}
            />
          )}
        />

        <Button className="bg-primary-500 text-light-900 w-full">
          Add Business
        </Button>
      </form>
    </Form>
  );
};

export default BusinessForm;
