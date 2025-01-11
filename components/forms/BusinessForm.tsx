"use client";

import { BusinessSchema } from "@/lib/validations/admin.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormMessage } from "../ui/form";
import { DateInput, Dropdown, FormInput, TextArea } from "../inputs";
import { Button } from "../ui/button";
import LogoInput from "../inputs/LogoInput";
import { getSubCategoriesByMainCategoryId } from "@/lib/actions/categories.action";
import { getCitiesByDistrictIdAction } from "@/lib/actions/location.action";
import { useState } from "react";

type Props = {
  mainCategories: string;
  districts: string;
};

const BusinessForm = ({ mainCategories, districts }: Props) => {
  const [subCategoryOptions, setSubCategoryOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

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
      description: "",
      establishedData: "",
      address: "",
      district: "",
      city: "",
      mainCategory: "",
      subCategory: "",
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

  function onSubmit(values: z.infer<typeof BusinessSchema>) {
    console.log(values, subCategoryOptions);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full max-w-5xl"
      >
        <h2 className="business-form-sub-heading mt-0">Basic Info</h2>

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

        <div className="w-1/2">
          <FormInput
            form={form}
            inputName="businessName"
            formLabel="Registration Number"
          />
        </div>

        <FormField
          control={form.control}
          name="establishedData"
          render={({ field }) => (
            <>
              <DateInput
                formLabel="Established Data"
                fieldChange={field.onChange}
                isoDate={form.getValues("establishedData")}
              />
              <FormMessage className="shad-auth_form_message -mt-4" />
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
            onValueChange={(id: string) => fetchSubCategories(id)}
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
            onValueChange={(id: string) => fetchCities(id)}
            dependentFieldPlaceholder="Please select district"
            dependentFieldValue={form.getValues("city") !== ""}
          />
        </div>

        <h2 className="business-form-sub-heading">
          Contact & Social Links Info
        </h2>

        <div className="flex gap-8">
          <FormInput
            form={form}
            inputName="businessName"
            formLabel="Email Address"
            formDescription="The name of your business"
          />
          <FormInput
            form={form}
            inputName="businessName"
            formLabel="Portfolio / Website"
            formDescription="The name of your business"
          />
        </div>

        <Button className="bg-primary-500 text-light-900 w-full">
          Add Business
        </Button>
      </form>
    </Form>
  );
};

export default BusinessForm;
