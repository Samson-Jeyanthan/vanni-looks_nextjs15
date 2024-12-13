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

export const ServicesData = [
  {
    title: "Social Media Marketing",
    description:
      "Boost your online presence with tailored social media campaigns that engage your target audience. From creating eye-catching posts to running strategic ad campaigns, we’ll help you connect with customers on platforms they love. Boost your online presence with tailored social media campaigns that engage your target audience. From creating eye-catching posts to running strategic ad campaigns, we’ll help you connect with customers on platforms they love.",
    image: "/svgs/social-media-marketing.svg",
    isShort: false,
  },
  {
    title: "Advertising",
    description:
      "Boost your online presence with tailored social media campaigns that engage your target audience. From creating eye-catching posts to running strategic ad campaigns, we’ll help you connect with customers on platforms they love.",
    image: "/svgs/advertising.svg",
    isShort: true,
  },
  {
    title: "Local Business Listings",
    description:
      "Boost your online presence with tailored social media campaigns that engage your target audience. From creating eye-catching posts to running strategic ad campaigns, we’ll help you connect with customers on platforms they love.",
    image: "/svgs/business-listings.svg",
    isShort: true,
  },
  {
    title: "Photography Services",
    description:
      "Boost your online presence with tailored social media campaigns that engage your target audience. From creating eye-catching posts to running strategic ad campaigns, we’ll help you connect with customers on platforms they love. Boost your online presence with tailored social media campaigns that engage your target audience. From creating eye-catching posts to running strategic ad campaigns, we’ll help you connect with customers on platforms they love.",
    image: "/svgs/photography-service.svg",
    isShort: false,
  },
];
