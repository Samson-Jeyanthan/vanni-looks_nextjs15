import { z } from "zod";

export const MainCategoriesSchema = z.object({
  iconFile: z.custom<File[]>(),
  title: z.string().min(5).max(130),
});
