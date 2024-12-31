"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";
import { TMainCategoryParams } from "./shared.types";
import MainCategory, { IMainCategory } from "@/database/mainCategory.model";

export async function CreateMainCategoryAction(params: TMainCategoryParams) {
  try {
    connectToDatabase();

    const { title, icon, path } = params;

    await MainCategory.create({ title, icon });

    revalidatePath(path);

    return {
      status: "200",
      message: "Category created successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error creating category",
    };
  }
}

export async function GetAllMainCategoriesAction() {
  try {
    connectToDatabase();

    const mainCategories: IMainCategory[] = await MainCategory.find().sort({
      createdAt: -1,
    });

    return {
      status: "200",
      data: mainCategories,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error fetching categories",
    };
  }
}
