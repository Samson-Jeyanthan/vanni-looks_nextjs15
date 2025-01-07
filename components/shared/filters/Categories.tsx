"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { formUrlQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  data: string;
};

const Categories = ({ data }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const paramFilter = searchParams.get("filter");

  const parsedData = data && JSON.parse(JSON.parse(data));

  const handleUpdateParams = (value: string) => {
    const newURL = formUrlQuery({
      params: searchParams.toString(),
      key: "filter",
      value,
    });

    router.push(newURL, { scroll: false });
  };

  return (
    <div>
      {parsedData?.map((category, index) => (
        <div key={index}>
          {category.title}
          <Checkbox
            value={category.title}
            checked={paramFilter === category.title}
            onChange={() => handleUpdateParams(category.title)}
          />
        </div>
      ))}
    </div>
  );
};

export default Categories;
