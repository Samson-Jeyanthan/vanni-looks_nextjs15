import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Password is required" }),
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

export const MediaFileSchema = z.object({
  data: z.custom<File[]>(),
  preview: z.string().url(),
  fileType: z.string(),
  fileName: z.string(),
  mediaType: z.string(),
});

export const BusinessSchema = z.object({
  businessName: z
    .string()
    .min(3, { message: "Business name is required" })
    .max(130),
  businessLogo: z.custom<File[]>().optional(),
  coverPhoto: z.custom<File[]>().optional(),
  description: z
    .string()
    .min(3, { message: "Description is required" })
    .max(1000),
  address: z.string().min(3, { message: "Address is required" }).max(130),
  district: z.string().min(3, { message: "District is required" }),
  city: z.string().min(1, { message: "City is required" }),
  mainCategory: z.string().min(1, { message: "Main category is required" }),
  subCategory: z.string().min(1, { message: "Sub category is required" }),
  establishedDate: z.string().min(1, { message: "Date is required" }),
  website: z.string().optional(),
  email: z.string().email().optional(),
  registrationNumber: z.string().optional(),
  mediaFiles: z.array(MediaFileSchema).optional(),
  phone: z.array(z.object({ number: z.string(), type: z.string() })).optional(),
  socialLinks: z
    .array(z.object({ name: z.string(), url: z.string() }))
    .optional(),
});

export const ContactSchema = z.object({
  name: z.string().min(3).max(130),
  email: z.string().email(),
  description: z.string().min(10).max(1500),
});
