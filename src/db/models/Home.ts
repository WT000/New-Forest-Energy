import mongoose, { Model, Schema, models, model } from "mongoose";

export interface HomeInterface {
  _id?: string;
  owner: mongoose.Schema.Types.ObjectId;
  delegates: [mongoose.Schema.Types.ObjectId];
  name: string;
  description: string;
  image: string;
  numBeds: Number;
  energyInstructions: string;
  energyTariff: Number;
  energyBuffer: Number;
  createdAt: Date;
  updatedAt: Date;
}

const homeSchema = new Schema<HomeInterface, Model<HomeInterface>>(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    delegates: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    name: {
      type: String,
      required: true,
      minlength: [5, "Home name must be at least 5 characters in length."],
      maxlength: [100, "Home name must not exceed 100 characters."],
    },
    description: {
      type: String,
      maxlength: [300, "Home description must not exceed 300 characters."],
    },
    image: {
      type: String,
    },
    numBeds: {
      type: Number,
      required: true,
      min: [1, "Homes must have at least 1 bed."],
      max: [30, "Homes do not typically go above 30 beds, please contact an admin to do this for you."],
    },
    energyInstructions: {
      type: String,
      required: true,
      maxlength: [
        400,
        "Energy instructions should not exceed 400 characters, this should be kept as simple as possible for visitors and delegates.",
      ],
    },
    energyTariff: {
      type: Number,
      required: true,
      min: [0.01, "Energy tariff must be at least £0.01/kWh."],
      max: [Number.MAX_SAFE_INTEGER, "Energy tariff reached an unsafe number."],
    },
    energyBuffer: {
      type: Number,
      required: true,
      min: [0, "Energy buffer must be at least £0."],
      max: [Number.MAX_SAFE_INTEGER, "Energy buffer reached an unsafe number."],
    },
  },
  { timestamps: true }
);

export default (models.Home as Model<HomeInterface>) || model<HomeInterface>("Home", homeSchema);
