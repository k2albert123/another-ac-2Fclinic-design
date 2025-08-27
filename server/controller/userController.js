import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/User.js";

const createUser = asyncHandler(async (req, res) => {
    const { name, email, phone, address, type } = req.body || {};
    if (!name || !email || !phone) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    const exists = await User.findOne({ email });
    if (exists) {
        return res.status(409).json({ message: "Email already exists" });
    }
    const user = await User.create({ name, email, phone, address, type });
    res.status(201).json({ message: "User created", user });
})

export { createUser };