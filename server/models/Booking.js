import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, lowercase: true, trim: true },
        phone: { type: String, required: true, trim: true },
        service: { type: String, required: true },
        date: { type: String, required: true },
        time: { type: String, required: true },
        message: { type: String },
        status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
    },
    { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking; 