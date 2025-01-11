import { Schema, models, model, Document } from "mongoose";

export interface ISubCategory extends Document {
  title: string;
  mainCategoryId: string;
  createdAt: Date;
}

const SubCategorySchema = new Schema({
  title: { type: String, unique: true },
  mainCategoryId: { type: Schema.Types.ObjectId, ref: "MainCategory" },
  createdAt: { type: Date, default: Date.now },
});

const SubCategory =
  models.SubCategory || model("SubCategory", SubCategorySchema);

export default SubCategory;
