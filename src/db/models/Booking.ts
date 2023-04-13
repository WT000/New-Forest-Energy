import mongoose, { Model, Schema, models, model } from "mongoose";

export interface BookingInterface {
  _id?: string;
  surname: string;
  friendlyId: string;
  home: mongoose.Schema.Types.ObjectId;
  startDateTime: Date;
  endDateTime: Date;
  isDeleted: Boolean;
  createdAt: Date;
  updatedAt: Date;
}

const bookingSchema = new Schema<BookingInterface, Model<BookingInterface>>(
  {
    surname: {
      type: String,
      required: true,
    },
    friendlyId: {
      type: String,
      required: true,
      minlength: [7, "Friendly booking id must be 7 characters."],
      maxlength: [7, "Friendly booking id must be 7 characters."],
      unique: true
    },
    home: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Home",
      required: true,
    },
    startDateTime: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return new Date(value) >= new Date();
        },
        message: "The start date & time of a booking must be now or in the future.",
      },
    },
    endDateTime: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return new Date(value) > new Date(this.startDateTime);
        },
        message: "The end date & time of a booking must be ahead of the start date & time.",
      },
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  { timestamps: true }
);

export default (models.Booking as Model<BookingInterface>) || model<BookingInterface>("Booking", bookingSchema);
