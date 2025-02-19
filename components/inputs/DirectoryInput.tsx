"use client";

import { CiSearch } from "react-icons/ci";
import { Input } from "../ui/input";

const DirectoryInput = () => {
  return (
    <div className="w-full flex-center">
      <div className="flex items-center w-[60%] pl-2 pr-1 bg-light-800 rounded-lg">
        <CiSearch className="text-3xl text-light-400" />
        <Input
          value=""
          onChange={() => {}}
          placeholder="Search here for local businesses in Sri Lanka"
          className="directory-input"
        />
      </div>
    </div>
  );
};

export default DirectoryInput;
