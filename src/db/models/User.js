import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        minlength: [2, "Username must be at least 2 characters in length."], 
        maxlength: [30, "Username must not exceed 30 characters, these should be short and memorable."],
    },
    password: {
        type: String,
        required: true,
        minlength: [5, "Password must be at least 5 characters in length."],
    },
    name: {
        type: String,
        required: true,
        minlength: [2, "Name must be at least 2 characters in length."], 
        maxlength: [80, "Name must not exceed 80 characters, this should be a friendly name (e.g. John Doe)."],
    },
    role: {
        type: String,
        required: true,
        enum: ["Agency", "Homeowner", "Delegate"], // Note that visitors do not have accounts, they are authenticated with their booking ID
    },
}, {timestamps: true});

export default mongoose.models.User || mongoose.model("User", userSchema);