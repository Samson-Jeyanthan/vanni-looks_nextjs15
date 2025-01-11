import { Schema, models, model, Document } from "mongoose";

export interface IBusiness extends Document {
  name: string;
  description: string;
  businessLogo: string;
  website: string;
  socialLinks?: {
    name:
      | "FACEBOOK"
      | "TWITTER"
      | "INSTAGRAM"
      | "LINKEDIN"
      | "GITHUB"
      | "YOUTUBE"
      | "PORTFOLIO"
      | "OTHER";
    url: string;
  }[];
  media: [
    {
      mediaType: { type: String; default: "" };
      mediaURL: { type: String; default: "" };
      thumbnailURL: { type: String; default: "" };
    },
  ];
  email: string;
  phone: [
    {
      number: string;
      type: "LANDLINE" | "MOBILE" | "FAX";
    },
  ];
  address: string;
  cityId: { type: Schema.Types.ObjectId; ref: "City" };
  districtId: { type: Schema.Types.ObjectId; ref: "District" };
  mainCategoryId: { type: Schema.Types.ObjectId; ref: "MainCategory" };
  subCategoryId: { type: Schema.Types.ObjectId; ref: "SubCategory" };
  registrationNumber: string;
  establishedAt: Date;
  createdAt: Date;
}

const BusinessSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  businessLogo: { type: String },
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
          "PORTFOLIO",
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
  email: { type: String, default: "" },
  phone: { type: String, default: "" },
  address: { type: String, default: "" },
  cityId: { type: Schema.Types.ObjectId, ref: "City" },
  districtId: { type: Schema.Types.ObjectId, ref: "District" },
  mainCategoryId: { type: Schema.Types.ObjectId, ref: "MainCategory" },
  subCategoryId: { type: Schema.Types.ObjectId, ref: "SubCategory" },
  registrationNumber: { type: String, default: "" },
  establishedAt: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

const Business = models.Business || model("Business", BusinessSchema);

export default Business;
