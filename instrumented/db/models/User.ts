import mongoose, { Model, Schema, models, model } from "mongoose";

export interface UserInterface {
  _id?: string;
  name: string;
  email: string;
  image: string;
  isAgency: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<UserInterface, Model<UserInterface>>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    image: { type: String },
    isAgency: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default (models.User as Model<UserInterface>) || model<UserInterface>("User", userSchema);
