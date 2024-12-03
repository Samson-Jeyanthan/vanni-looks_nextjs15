import React from "react";
import { IconType } from "react-icons";
import { TConvertedSvgJsxProps } from "@/types/utils.types";
import { IoMdMoon } from "react-icons/io";
import { TbSunHigh } from "react-icons/tb";

interface CategoriesProps {
  title: string;
  icon: IconType | React.ComponentType<TConvertedSvgJsxProps>;
}

export const CategoriesData: CategoriesProps[] = [
  {
    title: "Category 1",
    icon: IoMdMoon,
  },
  {
    title: "Category 1",
    icon: TbSunHigh,
  },
  {
    title: "Category 1",
    icon: TbSunHigh,
  },
  {
    title: "Category 1",
    icon: IoMdMoon,
  },
  {
    title: "Category 1",
    icon: TbSunHigh,
  },
  {
    title: "Category 1",
    icon: TbSunHigh,
  },
  {
    title: "Category 1",
    icon: IoMdMoon,
  },
];
