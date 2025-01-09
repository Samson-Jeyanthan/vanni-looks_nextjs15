import { BusinessForm } from "@/components/forms";
import React from "react";

const CreateBusiness = () => {
  return (
    <section className="flex flex-col items-center gap-4 w-full">
      <h1 className="text-3xl font-bold text-left w-full max-w-5xl mb-10">
        Add Business Information
      </h1>
      <BusinessForm />
    </section>
  );
};

export default CreateBusiness;
