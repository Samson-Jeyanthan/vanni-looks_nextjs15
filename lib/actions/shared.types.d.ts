import {
  IMediaProps,
  TPhoneProps,
  TSocialLinksProps,
} from "@/types/utils.types";

export type TMainCategoryParams = {
  title: string;
  icon?: IMediaProps;
  path: string;
};

export type TSubCategoryParams = {
  title: string;
  mainCategoryId: string;
  path: string;
};

export type TDistrictParams = {
  _id?: string;
  name: string;
  path: string;
};

// creating city
export type TCityParams = {
  _id?: string;
  districtId: string;
  cityName: string;
  path: string;
};

export type TDeleteParams = {
  _id: string;
  path: string;
};

// get citys by district id
export type TCitysByDistrictIdParams = {
  districtId: string;
  isClient: boolean;
};

export type TLoginParams = {
  email: string;
  password: string;
};

export type TBusinessParams = {
  name: string;
  description: string;
  businessLogo?: string;
  address: string;
  registrationType?: "business" | "company" | "individual";
  registrationNumber?: string;
  email?: string;
  phone?: TPhoneProps[];
  website?: string;
  socialLinks?: TSocialLinksProps[];
  media?: IMediaProps[];
  cityId: string;
  districtId: string;
  mainCategoryId: string;
  subCategoryId: string;
  establishedAt: string;
  path: string;
};
