import mongoose, { Model, Schema, models, model } from "mongoose";
import { dateDiffInDays } from "../../lib/utils/dates";

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
		totalCost;
		totalCostMinusBuffer;
		totalUsage;
		readings;
		totalDays;
		cb;
	};
}

export interface BookingMethods {
	calculateCost(cb: any): {
		totalCost;
		totalCostMinusBuffer;
		totalUsage;
		readings;
		totalDays;
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
			{ home: this.home._id, createdAt: { $lt: this.startDateTime }, deleted: {$ne: true} },
			cb
		)
		.sort("-createdAt")
		.limit(1);

	//@ts-ignore
	const rAfter = await this.model("Reading")
		.find(
			{ home: this.home._id, createdAt: { $gte: this.endDateTime }, deleted: {$ne: true} },
			cb
		)
		.sort("createdAt")
		.limit(1);

	//@ts-ignore
	const rRange = await this.model("Reading")
		.find({
			home: this.home._id,
			createdAt: { $gte: this.startDateTime, $lt: this.endDateTime },
			cb,
			deleted: {$ne: true}
		})
		.sort("createdAt");

	await this.populate("home");

	const readings = [...rBefore, ...rRange, ...rAfter];
	let totalUsage = 0;
	let totalCost = 0;
	let totalCostMinusBuffer = 0;
	let totalDays = 0;
	if (readings.length > 1) {
		totalUsage = readings[readings.length - 1].value - readings[0].value;
		totalDays =
			dateDiffInDays(
				readings[readings.length - 1].createdAt,
				readings[0].createdAt
			) || 1;
		//@ts-ignore
		totalCost = totalUsage * this.home.energyTariff;
		//@ts-ignore
		if (totalCost > Number(this.home.energyBuffer)) {
			//@ts-ignore
			totalCostMinusBuffer = totalCost - Number(this.home.energyBuffer);
		}
	}

	return {
		totalCost,
		totalCostMinusBuffer,
		totalUsage,
		readings,
		totalDays,
		cb,
	};
});

export default (models.Booking as Model<BookingInterface>) ||
	model<BookingInterface, BookingModel>("Booking", bookingSchema);
