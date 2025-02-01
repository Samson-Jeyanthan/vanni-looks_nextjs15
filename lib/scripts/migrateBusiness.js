import mongoose from "mongoose";
import { connectToDatabase, disconnectFromDatabase } from "./mongoose.js";

const { model, models, Schema } = mongoose;

// ------------------------ business model ------------------------------

const BusinessSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  businessLogo: { type: String },
  coverPhoto: { type: String },
  address: { type: String, default: "" },
  registrationType: {
    type: String,
    enum: ["business", "company", "individual", "other"],
    default: "business",
  },
  registrationNumber: { type: String, default: "" },
  email: { type: String, default: "" },
  phone: [
    {
      type: String,
      enum: ["LANDLINE", "MOBILE", "FAX", "WHATSAPP"],
      default: "MOBILE",
    },
  ],
  website: { type: String },
  socialLinks: [
    {
      name: {
        type: String,
        enum: [
          "FACEBOOK",
          "TWITTER",
          "INSTAGRAM",
          "LINKEDIN",
          "GITHUB",
          "YOUTUBE",
          "OTHER",
        ],
      },
      url: { type: String },
    },
  ],
  media: [
    {
      mediaType: { type: String, default: "" },
      mediaURL: { type: String, default: "" },
      thumbnailURL: { type: String, default: "" },
    },
  ],
  cityId: { type: Schema.Types.ObjectId, ref: "City" },
  districtId: { type: Schema.Types.ObjectId, ref: "District" },
  mainCategoryId: { type: Schema.Types.ObjectId, ref: "MainCategory" },
  subCategoryId: { type: Schema.Types.ObjectId, ref: "SubCategory" },
  establishedAt: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

const Business = models.Business || model("Business", BusinessSchema);

export default Business;

// ---------------------- migration function -----------------------

const migrateBusiness = async () => {
  try {
    connectToDatabase();

    const businesses = await Business.find({});

    for (const business of businesses) {
      business.coverPhoto = "";

      await business.save();
    }
    console.log("Migration completed!");
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    disconnectFromDatabase();
  }
};

migrateBusiness();
