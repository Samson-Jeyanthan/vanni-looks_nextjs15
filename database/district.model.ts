import { Schema, models, model, Document } from "mongoose";

export interface IDistrict extends Document {
  name: string;
  createdAt: Date;
}

const DistrictSchema = new Schema({
  name: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const District = models.District || model("District", DistrictSchema);

export default District;
