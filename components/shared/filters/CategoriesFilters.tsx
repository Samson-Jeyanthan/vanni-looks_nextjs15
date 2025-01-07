"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { formUrlQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  data?: any;
};

const Categories = ({ data }: Props) => {
  // const searchParams = useSearchParams();
  // const router = useRouter();
  // const paramFilter = searchParams.get("filter");

  const parsedData: any[] = data && JSON.parse(data || "");

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
    <div>
      {parsedData?.map((category, index) => (
        <div key={index}>
          <p>{category.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
