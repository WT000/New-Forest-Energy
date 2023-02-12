import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    friendlyId: {
        type: String,
        required: true,
        minlength: [5, "Friendly booking id must be 5 characters."],
        maxlength: [5, "Friendly booking id must be 5 characters."],
    },
    home: {
        type: mongoose.Schema.Types.ObjectId, ref: "Home",
        required: true,
    },
    startDateTime: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return typeof new Date(value) == "date" && new Date(value) >= new Date();
            },
            message: "The start date & time of a booking must be in the future.",
        }
    },
    endDateTime: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return typeof new Date(value) == "date" && new Date(value) > new Date(this.startDateTime);
            },
            message: "The end date & time of a booking must be ahead of the start date & time.",
        }
    }
}, {timestamps: true});

export default mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
