import { TConvertedSvgJsxProps } from "@/types/utils.types";
import { IconType } from "react-icons/lib";

interface CategoriesProps {
  title: string;
  icon: string;
}

export const CategoriesData: CategoriesProps[] = [
  {
    title: "Grocery Stores",
    icon: "/svgs/sample-category-icon.svg",
  },
  {
    title: "Beauty & Fashion",
    icon: "/svgs/sample-category-icon.svg",
  },
  {
    title: "Grocery Stores",
    icon: "/svgs/sample-category-icon.svg",
  },
  {
    title: "Beauty & Fashion",
    icon: "/svgs/sample-category-icon.svg",
  },
  {
    title: "Grocery Stores",
    icon: "/svgs/sample-category-icon.svg",
  },
  {
    title: "Beauty & Fashion",
    icon: "/svgs/sample-category-icon.svg",
  },
  {
    title: "Grocery Stores",
    icon: "/svgs/sample-category-icon.svg",
  },
  {
    title: "Grocery Stores",
    icon: "/svgs/sample-category-icon.svg",
  },
  {
    title: "Beauty & Fashion",
    icon: "/svgs/sample-category-icon.svg",
  },
  {
    title: "Grocery Stores",
    icon: "/svgs/sample-category-icon.svg",
  },
  {
    title: "Beauty & Fashion",
    icon: "/svgs/sample-category-icon.svg",
  },
  {
    title: "Grocery Stores",
    icon: "/svgs/sample-category-icon.svg",
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

interface ISidebarLinks {
  name: string;
  route: string;
  icon?: IconType | React.ComponentType<TConvertedSvgJsxProps>;
}

export const LEFT_SIDEBAR_LINKS = [
  {
    // icon: HomeIcon,
    name: "Main Categories",
    route: "main-categories",
  },
  {
    // icon: HomeIcon,
    name: "Sub Categories",
    route: "sub-categories",
  },
  {
    // icon: HomeIcon,
    name: "Districts",
    route: "districts",
  },
  {
    // icon: HomeIcon,
    name: "Cities",
    route: "cities",
  },
  {
    // icon: HomeIcon,
    name: "Businesses",
    route: "businesses",
  },
];
