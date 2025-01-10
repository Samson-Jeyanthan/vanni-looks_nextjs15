import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const MainCategoriesSchema = z.object({
  iconFile: z.custom<File[]>(),
  title: z.string().min(3).max(130),
});

export const SubCategoriesSchema = z.object({
  title: z.string().min(3).max(130),
  mainCategoryId: z.string().min(1),
});

export const DistrictsSchema = z.object({
  district: z.string().min(3).max(130),
});

export const CitiesSchema = z.object({
  cityName: z.string().min(3).max(130),
  districtId: z.string().min(1),
});

export const BusinessSchema = z.object({
  businessName: z.string().min(3).max(130),
  businessLogo: z.custom<File[]>().optional(),
  description: z.string().min(3).max(130),
  address: z.string().min(3).max(130),
  district: z.string().min(3),
  city: z.string().min(1),
  mainCategory: z.string().min(1),
  subCategory: z.string().min(1),
  establishedData: z.string().min(1),
});
