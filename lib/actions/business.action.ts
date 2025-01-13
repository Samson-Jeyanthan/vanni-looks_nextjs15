"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";
import { TBusinessParams } from "./shared.types";
import Business from "@/database/business.model";

export async function createBusinessAction(params: TBusinessParams) {
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
