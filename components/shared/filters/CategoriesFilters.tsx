"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
  data?: string;
  subCategories?: string;
  selectedMainCategory?: string;
};

const CategoriesFilters = ({
  data,
  subCategories,
  selectedMainCategory,
}: Props) => {
  const pathname = usePathname();
  // const searchParams = useSearchParams();
  // const router = useRouter();
  // const paramFilter = searchParams.get("filter");

  const parsedData: any[] = data && JSON.parse(data || "");
  const parsedSubCategories: any[] =
    subCategories && JSON.parse(subCategories || "");
  const parsedMainCategory =
    selectedMainCategory && JSON.parse(selectedMainCategory || "");

  // const handleUpdateParams = (value: string) => {
  //   console.log(value, "value");
  //   const newURL = formUrlQuery({
  //     params: searchParams.toString(),
  //     key: "filter",
  //     value,
  //   });

  //   router.push(newURL, { scroll: false });
  // };

  return (
    <div className="w-56 flex flex-col gap-1">
      <p className="text-md font-semibold my-2">Categories</p>
      {parsedData?.map((category, index) => {
        const isActive =
          (decodeURIComponent(pathname).startsWith(
            "/business-directory/" + category.title
          ) &&
            category.title.length > 1) ||
          decodeURIComponent(pathname) === category.title;

        const encodedURL = encodeURIComponent(category.title);
        console.log(encodedURL);
        return (
          <React.Fragment key={index}>
            <Link
              href={encodedURL}
              key={index}
              className={`${isActive ? "bg-light-750" : ""} flex items-center gap-3 rounded-md hover:bg-light-750 p-2`}
            >
              <p className="capitalize text-sm justify-between w-full flex items-center">
                {category.title} {isActive && <IoIosArrowDown />}
              </p>
            </Link>
            <div className="flex flex-col gap-1 items-end">
              {parsedMainCategory === category.title &&
                parsedSubCategories.map((category, index) => (
                  <div
                    key={index}
                    className="w-[85%] flex items-center gap-3 rounded-md text-sm hover:bg-light-750 p-1.5"
                  >
                    {category.title}
                  </div>
                ))}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CategoriesFilters;
