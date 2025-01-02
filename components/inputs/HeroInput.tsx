"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";

const HeroInput = () => {
  return (
    <div className="w-[532px] flex-center mt-8 rounded-full pl-2 pr-1 bg-light-700">
      <div className="flex items-center w-[60%] my-1">
        <CiSearch className="text-3xl text-light-400" />
        <Input
          value=""
          onChange={() => {}}
          placeholder="What are you looking for?"
          className="hero-input"
        />
      </div>
      <span className="bg-light-400 h-full w-[3px]" />
      <div className="w-[50%] flex items-center my-1 pl-4">
        <SlLocationPin className="text-2xl text-light-400" />
        <Input
          value=""
          onChange={() => {}}
          placeholder="Enter location"
          className="hero-input"
        />
      </div>
      <Button className="rounded-full px-8 bg-primary-500 text-sm text-light-900">
        Find
      </Button>
    </div>
  );
};

export default HeroInput;
