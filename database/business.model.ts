import { Schema, models, model, Document } from "mongoose";

export interface IBusiness extends Document {
  name: string;
  description: string;
  businessLogo: string;
  address: string;
  registrationNumber: string;
  registrationType: "business" | "company" | "individual";
  email: string;
  phone: [
    {
      number: string;
      type: "LANDLINE" | "MOBILE" | "FAX" | "WHATSAPP";
    },
  ];
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
  cityId: { type: Schema.Types.ObjectId; ref: "City" };
  districtId: { type: Schema.Types.ObjectId; ref: "District" };
  mainCategoryId: { type: Schema.Types.ObjectId; ref: "MainCategory" };
  subCategoryId: { type: Schema.Types.ObjectId; ref: "SubCategory" };
  establishedAt: Date;
  createdAt: Date;
}

const BusinessSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  businessLogo: { type: String },
  address: { type: String, default: "" },
  registrationType: {
    type: String,
    enum: ["business", "company", "individual"],
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
  cityId: { type: Schema.Types.ObjectId, ref: "City" },
  districtId: { type: Schema.Types.ObjectId, ref: "District" },
  mainCategoryId: { type: Schema.Types.ObjectId, ref: "MainCategory" },
  subCategoryId: { type: Schema.Types.ObjectId, ref: "SubCategory" },
  establishedAt: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

const Business = models.Business || model("Business", BusinessSchema);

export default Business;
