import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        phone: { type: String, required: true, trim: true },
        address: { type: String, trim: true },
        type: { type: String, enum: ["residential", "business"], default: "residential" },
        passwordHash: { type: String },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User; 