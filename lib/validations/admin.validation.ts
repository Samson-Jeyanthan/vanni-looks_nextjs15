import { z } from "zod";

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
