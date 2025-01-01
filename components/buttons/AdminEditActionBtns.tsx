"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { DisctrictModal } from "../modals";

type Props = {
  type: "District" | "City" | "MainCategory" | "SubCategory";
  stringifiedData: any;
};

const AdminEditActionBtns = ({ type, stringifiedData }: Props) => {
  return (
    <div className="flex w-auto px-1 gap-2 text-lg">
      <div className="text-xl cursor-pointer hover:text-light-100 text-light-300">
        {type === "District" && (
          <DisctrictModal type="edit" districtDetails={stringifiedData} />
        )}
      </div>

      <div className="text-xl cursor-pointer px-2 hover:text-light-100 text-red-600">
        <MdDelete />
      </div>
    </div>
  );
};

export default AdminEditActionBtns;
