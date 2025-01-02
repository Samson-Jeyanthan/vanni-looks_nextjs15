import { Schema, models, model, Document } from "mongoose";

export interface ICity extends Document {
  cityName: string;
  districtId: string;
  createdAt: Date;
}

const CitySchema = new Schema({
  cityName: { type: String, unique: true },
  districtId: { type: Schema.Types.ObjectId, ref: "District" },
  createdAt: { type: Date, default: Date.now },
});

const City = models.City || model("City", CitySchema);

export default City;
