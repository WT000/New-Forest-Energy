import mongoose from "mongoose";

const readingSchema = new mongoose.Schema({
    home: {
        type: mongoose.Schema.Types.ObjectId, ref: "Home",
        required: true,
    },
    booking: { // Blank if not made during a booking for that home
        type: mongoose.Schema.Types.ObjectId, ref: "Booking",
    },
    user: { // Blank if visitor reading
        type: mongoose.Schema.Types.ObjectId, ref: "User",
    },
    value: {
        type: Number,
        required: true,
        min: [0, "Energy value must be at least 0 kw/h."],
        max: [Number.MAX_SAFE_INTEGER, "Energy value reached an unsafe number."],
    },
    image: {
        type: String,
        required: true,
    }
}, {timestamps: true}); // Simply use the createdAt value to determine when the reading was made

export default mongoose.models.Reading || mongoose.model("Reading", readingSchema);