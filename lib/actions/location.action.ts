"use server";

import District from "@/database/district.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";
import { TCityParams, TDistrictParams } from "./shared.types";
import City from "@/database/city.model";

export async function createDistrictAction(params: TDistrictParams) {
  try {
    connectToDatabase();

    const { name, path } = params;

    await District.create({ name });

    revalidatePath(path);

    return {
      status: "200",
      message: "District created successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error creating district",
    };
  }
}

export async function getAllDistrictsAction() {
  try {
    connectToDatabase();

    const districts = await District.find().sort({ createdAt: -1 });

    return {
      status: "200",
      data: districts,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error fetching districts",
    };
  }
}

// Sub category actions ---------------------------------------------------

export async function createCityAction(params: TCityParams) {
  try {
    connectToDatabase();

    const { cityName, districtId, path } = params;

    await City.create({ cityName, districtId });

    revalidatePath(path);

    return {
      status: "200",
      message: "City created successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error creating city",
    };
  }
}

export async function getAllCitiesAction() {
  try {
    connectToDatabase();

    const cities = await City.find()
      .populate({
        path: "districtId",
        model: District,
      })
      .sort({
        createdAt: -1,
      });

    return {
      status: "200",
      data: cities,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error fetching cities",
    };
  }
}
// export async function createDistrictAction() {
//   try {
//     connectToDatabase();
//     return {
//       status: "200",
//       data: data,
//     };
//   } catch (error) {
//     return {
//       status: "500",
//       message: "Error fetching",
//     };
//   }
// }
