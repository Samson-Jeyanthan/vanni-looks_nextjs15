"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";
import { TBusinessParams } from "./shared.types";
import Business from "@/database/business.model";
import MainCategory from "@/database/mainCategory.model";
import SubCategory from "@/database/subCategory.model";
import City from "@/database/city.model";
import District from "@/database/district.model";

export async function createBusinessAction(params: TBusinessParams) {
  console.log(params);
  try {
    connectToDatabase();

    const {
      name,
      description,
      businessLogo,
      address,
      registrationType,
      registrationNumber,
      email,
      phone,
      website,
      socialLinks,
      media,
      cityId,
      districtId,
      mainCategoryId,
      subCategoryId,
      establishedAt,
      path,
    } = params;

    await Business.create({
      name,
      description,
      businessLogo,
      address,
      registrationType,
      registrationNumber,
      email,
      phone,
      website,
      socialLinks,
      media,
      cityId,
      districtId,
      mainCategoryId,
      subCategoryId,
      establishedAt,
    });

    revalidatePath(path);

    return {
      status: "200",
      message: "Business created successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error creating business",
    };
  }
}

export async function getAllBusinessesAction() {
  try {
    connectToDatabase();

    const businesses = await Business.find()
      .sort({
        createdAt: -1,
      })
      .populate({
        path: "mainCategoryId",
        model: MainCategory,
        select: "_id title",
      })
      .populate({
        path: "subCategoryId",
        model: SubCategory,
        select: "_id title",
      });

    return {
      status: "200",
      message: "Businesses fetched successfully",
      data: businesses,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error fetching businesses",
    };
  }
}

export async function getBusinessByIdAction(params: { businessId: string }) {
  try {
    connectToDatabase();

    const { businessId } = params;

    const business = await Business.findById(businessId)
      .populate({
        path: "cityId",
        model: City,
      })
      .populate({
        path: "districtId",
        model: District,
      })
      .populate({
        path: "mainCategoryId",
        model: MainCategory,
        select: "_id title icon",
      })
      .populate({
        path: "subCategoryId",
        model: SubCategory,
        select: "_id title",
      });

    if (!business) {
      return {
        status: "404",
        message: "Business not found",
      };
    }

    return {
      status: "200",
      message: "Business fetched successfully",
      data: business,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error fetching business",
    };
  }
}
