"use server";

import District from "@/database/district.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";
import {
  TCityParams,
  TCitysByDistrictIdParams,
  TDeleteParams,
  TDistrictParams,
} from "./shared.types";
import City, { ICity } from "@/database/city.model";

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

export async function getDistrictById(params: { districtId: string }) {
  try {
    connectToDatabase();

    const { districtId } = params;

    const district = await District.findById(districtId);

    return {
      status: "200",
      data: district,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "500",
      message: "Error fetching district detail",
    };
  }
}

export async function editDistrictAction(params: TDistrictParams) {
  const { _id, name, path } = params;

  await District.findByIdAndUpdate(_id, { name });

  revalidatePath(path);
  try {
    connectToDatabase();
    return {
      status: "200",
      message: "Detail updated successfully",
    };
  } catch (error) {
    return {
      status: "500",
      message: "Error fetching",
    };
  }
}

export async function deleteDistrictAction(params: TDeleteParams) {
  try {
    connectToDatabase();

    const { _id, path } = params;

    await District.deleteOne({ _id });
    await City.deleteMany({ districtId: _id });

    revalidatePath(path);

    return {
      status: "200",
      message: "District deleted successfully",
    };
  } catch (error) {
    return {
      status: "500",
      message: "Error deleting district",
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

export async function getCitiesByDistrictIdAction(
  params: TCitysByDistrictIdParams
) {
  try {
    connectToDatabase();
    const { districtId, isClient } = params;

    const cities = await City.find({ districtId }).sort({ createdAt: -1 });

    return {
      status: "200",
      data: isClient ? JSON.stringify(cities) : cities,
    };
  } catch (error) {
    return {
      status: "500",
      message: "Error fetching",
    };
  }
}

export async function deleteCityAction(params: TDeleteParams) {
  try {
    connectToDatabase();
    const { _id, path } = params;

    await City.deleteOne({ _id });

    revalidatePath(path);

    return {
      status: "200",
      message: "City deleted successfully",
    };
  } catch (error) {
    return {
      status: "500",
      message: "Error deleting city",
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
