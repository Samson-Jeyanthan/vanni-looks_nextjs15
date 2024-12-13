import { CategoriesData } from "@/constants";
import React from "react";

const Categories = () => {
  return (
    <div className="flex-center w-full max-w-7xl flex-col gap-8 py-16">
      <h1 className="text-4xl font-bold">
        Explore Local Businesses by Categories
      </h1>
      <div className="grid w-full grid-cols-6 gap-4">
        {CategoriesData.map((category, index) => (
          <div
            key={index}
            className="flex w-full flex-col gap-2 rounded-xl bg-light-700 py-4 text-light-150"
          >
            {category.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
