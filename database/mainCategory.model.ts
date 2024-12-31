import { Schema, models, model, Document } from "mongoose";

export interface IMainCategory extends Document {
  title: string;
  icon: {
    mediaType: string;
    mediaURL: string;
    thumbnailURL: string;
  };
  createdAt: Date;
}

const MainCategorySchema = new Schema({
  title: { type: String, unique: true },
  icon: {
    mediaType: { type: String, default: "" },
    mediaURL: { type: String, default: "" },
    thumbnailURL: { type: String, default: "" },
  },
  createdAt: { type: Date, default: Date.now },
});

const MainCategory =
  models.MainCategory || model("MainCategory", MainCategorySchema);

export default MainCategory;
