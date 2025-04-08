import { TConvertedSvgJsxProps } from "@/types/utils.types";
import { IconType } from "react-icons/lib";

interface CategoriesProps {
  title: string;
  icon: string;
}

const sampleArray = [0, 1.6, 2.5];

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
    route: "/admin/main-categories",
  },
  {
    // icon: HomeIcon,
    name: "Sub Categories",
    route: "/admin/sub-categories",
  },
  {
    // icon: HomeIcon,
    name: "Districts",
    route: "/admin/districts",
  },
  {
    // icon: HomeIcon,
    name: "Cities",
    route: "/admin/cities",
  },
  {
    // icon: HomeIcon,
    name: "Businesses",
    route: "/admin/businesses",
  },
];

export const PHONE_OPTIONS = [
  { value: "landline", name: "Landline" },
  { value: "mobile", name: "Mobile" },
  { value: "whatsapp", name: "WhatsApp" },
  { value: "fax", name: "Fax" },
];

export const SOCIAL_MEDIA_OPTIONS = [
  { value: "facebook", name: "Facebook" },
  { value: "twitter", name: "Twitter" },
  { value: "instagram", name: "Instagram" },
  { value: "linkedin", name: "LinkedIn" },
  { value: "github", name: "GitHub" },
  { value: "youtube", name: "YouTube" },
  { value: "other", name: "Other" },
];

export const NAV_LINKS = [
  {
    name: "About",
    route: "/#aboutus",
    scroll: true,
  },
  {
    name: "Categories",
    route: "/#categories",
    scroll: true,
  },
  {
    name: "Services",
    route: "/#services",
    scroll: true,
  },
  {
    name: "Directory",
    route: "/business-directory/all",
    scroll: false,
  },
];
