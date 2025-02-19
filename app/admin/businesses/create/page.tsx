import { BusinessForm } from "@/components/forms";
import {
  getAllMainCategoriesAction,
  getAllSubCategoriesAction,
} from "@/lib/actions/categories.action";
import {
  getAllCitiesAction,
  getAllDistrictsAction,
} from "@/lib/actions/location.action";
import React from "react";

const CreateBusiness = async () => {
  const mainCategories = await getAllMainCategoriesAction();
  const districts = await getAllDistrictsAction();

  return (
    <section className="flex flex-col items-center gap-4 w-full">
      <h1 className="text-3xl font-bold text-left w-full max-w-5xl mb-10">
        Add Business Information
      </h1>
      <BusinessForm
        mainCategories={JSON.stringify(mainCategories?.data)}
        districts={JSON.stringify(districts?.data)}
      />
    </section>
  );
};

export default CreateBusiness;
