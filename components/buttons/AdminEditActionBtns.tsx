"use client";

import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const AdminEditActionBtns = () => {
  return (
    <div className="flex-center w-auto px-1 gap-4 text-lg">
      <p className="text-xl cursor-pointer hover:text-light-100 text-light-300">
        <MdEdit />
      </p>

      <div className="text-xl cursor-pointer px-2 hover:text-light-100 text-red-600">
        <MdDelete />
      </div>
    </div>
  );
};

export default AdminEditActionBtns;
