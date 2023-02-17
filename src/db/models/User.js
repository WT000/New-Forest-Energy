import mongoose from "mongoose";

// This should now be done automatically by next-auth, kept here for archival purposes
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
        bcrypt: true // No min or max length validaiton done here, this should be done in the route / form instead (e.g. you must have 5 characters of mixed numbers and letters)
    },
    name: {
        type: String,
        required: true,
        minlength: [2, "Name must be at least 2 characters in length."], 
        maxlength: [80, "Name must not exceed 80 characters, this should be a friendly name (e.g. John Doe)."],
    },
    isAgency: {
        type: Boolean,
        required: true,
        default: false,
    },
}, {timestamps: true});

userSchema.plugin(require("mongoose-bcrypt"));
export default mongoose.models.User || mongoose.model("User", userSchema);