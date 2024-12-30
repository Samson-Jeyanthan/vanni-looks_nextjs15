import { connectToDatabase } from "../mongoose";

export async function CreateCategoryAction(params: any) {
  try {
    connectToDatabase();
  } catch (error) {}
}
