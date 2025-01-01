"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";
import { TMainCategoryParams, TSubCategoryParams } from "./shared.types";
import MainCategory, { IMainCategory } from "@/database/mainCategory.model";
import SubCategory, { ISubCategory } from "@/database/SubCategory.model";

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

    const mainCategories = await MainCategory.find().sort({
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

// Sub category actions ---------------------------------------------------

export async function CreateSubCategoryAction(params: TSubCategoryParams) {
  try {
    connectToDatabase();

    const { title, mainCategoryId, path } = params;

    await SubCategory.create({ title, mainCategoryId });

    revalidatePath(path);

    return {
      status: "200",
      message: "Sub Category created successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error creating sub category",
    };
  }
}

export async function GetAllSubCategoriesAction() {
  try {
    connectToDatabase();

    const subCategories = await SubCategory.find()
      .populate({
        path: "mainCategoryId",
        model: MainCategory,
      })
      .sort({
        createdAt: -1,
      });

    return {
      status: "200",
      data: subCategories,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error fetching sub categories",
    };
  }
}
