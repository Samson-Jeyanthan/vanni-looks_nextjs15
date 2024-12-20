"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TCategoryProps } from "@/types/utils.types";

const CategoryCard = (category: TCategoryProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex-center w-full cursor-pointer flex-col gap-2 rounded-xl bg-light-700 py-4 text-light-150"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`${hovered ? "bg-primary-500" : "bg-light-150"} flex-center size-14 rounded-full transition-all duration-150`}
      >
        <Image
          src={category.icon}
          width={128}
          height={128}
          alt="category-icon"
          className="size-8 object-cover"
        />
      </div>
      <p className="text-base font-medium text-light-100">{category.title}</p>
    </div>
  );
};

export default CategoryCard;
