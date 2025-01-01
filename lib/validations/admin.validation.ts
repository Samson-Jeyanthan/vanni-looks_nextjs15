import { z } from "zod";

export const MainCategoriesSchema = z.object({
  iconFile: z.custom<File[]>(),
  title: z.string().min(3).max(130),
});

export const SubCategoriesSchema = z.object({
  title: z.string().min(3).max(130),
  mainCategoryId: z.string().min(1),
});
