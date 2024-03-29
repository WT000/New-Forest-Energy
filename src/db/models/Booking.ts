import mongoose, { Model, Schema, models, model } from "mongoose";
import { dateDiffInDays } from "../../lib/utils/dates";
import User from "./User";

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
	calculateCost?: (cb: any) => {
		totalCost: number;
		totalCostMinusBuffer: number;
		totalUsage: number;
		readings: any;
		totalDays: any;
		totalBuffer: number;
		cb;
	};
}

export interface BookingMethods {
	calculateCost(cb: any): {
		totalCost: number;
		totalCostMinusBuffer: number;
		totalUsage: number;
		readings: any;
		totalDays: any;
		totalBuffer: number;
		cb;
	};
}

type BookingModel = Model<BookingInterface, {}, BookingMethods>;

const bookingSchema = new Schema<
	BookingInterface,
	BookingModel,
	BookingMethods
>(
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
			unique: true,
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
				message:
					"The start date & time of a booking must be now or in the future.",
			},
		},
		endDateTime: {
			type: Date,
			required: true,
			validate: {
				validator: function (value) {
					return new Date(value) > new Date(this.startDateTime);
				},
				message:
					"The end date & time of a booking must be ahead of the start date & time.",
			},
		},
		isDeleted: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{ timestamps: true }
);

/**
 * https://mongoosejs.com/docs/typescript/statics-and-methods.html
 */
bookingSchema.method("calculateCost", async function calculateCost(cb) {
	const rBefore = await this.model("Reading")
		.find(
			{
				home: this.home._id,
				createdAt: { $lt: this.startDateTime },
				deleted: { $ne: true },
			},
			cb
		)
		.populate("user", "name", User)
		.sort("-createdAt")
		.limit(1);

	//@ts-ignore
	const rAfter = await this.model("Reading")
		.find(
			{
				home: this.home._id,
				createdAt: { $gte: this.endDateTime },
				deleted: { $ne: true },
			},
			cb
		)
		.populate("user", "name", User)
		.sort("createdAt")
		.limit(1);

	//@ts-ignore
	const rRange = await this.model("Reading")
		.find({
			home: this.home._id,
			createdAt: { $gte: this.startDateTime, $lt: this.endDateTime },
			cb,
			deleted: { $ne: true },
		})
		.populate("user", "name", User)
		.sort("createdAt");

	await this.populate("home");

	const readings = [...rBefore, ...rRange, ...rAfter];
	let totalUsage: number = 0;
	let totalCost: number = 0;
	let totalCostMinusBuffer: number = 0;
	const totalDays = dateDiffInDays(this.startDateTime, this.endDateTime) || 1;
	const totalBuffer = parseFloat(
		(totalDays * this.home.energyBuffer).toFixed(2)
	);
	if (readings.length > 1) {
		totalUsage = readings[readings.length - 1].value - readings[0].value;
		//@ts-ignore
		totalCost = parseFloat(
			(totalUsage * this.home.energyTariff).toFixed(2)
		);
		//@ts-ignore
		if (totalCost > totalBuffer) {
			//@ts-ignore
			totalCostMinusBuffer = parseFloat(
				(totalCost - totalBuffer).toFixed(2)
			);
		}
	}

	return {
		totalCost,
		totalCostMinusBuffer,
		totalUsage,
		readings,
		totalDays,
		totalBuffer,
		cb,
	};
});

export default (models.Booking as Model<BookingInterface>) ||
	model<BookingInterface, BookingModel>("Booking", bookingSchema);
