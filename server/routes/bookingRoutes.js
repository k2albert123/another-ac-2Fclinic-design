import express from "express";
import asyncHandler from "../middlewares/asyncHandler.js";
import Booking from "../models/Booking.js";

const router = express.Router();

router.post("/bookings", asyncHandler(async (req, res) => {
    const bookingPayload = req.body ?? {};
    const created = await Booking.create(bookingPayload);
    res.status(201).json({ message: "Booking received", booking: created });
}));

export default router; 