import express from "express";
import asyncHandler from "../middlewares/asyncHandler.js";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

router.post("/auth/register", asyncHandler(async (req, res) => {
    const { name, email, phone, password } = req.body || {};
    if (!name || !email || !phone || !password) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    const existing = await User.findOne({ email });
    if (existing) {
        return res.status(409).json({ message: "Email already in use" });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, phone, passwordHash });
    res.status(201).json({
        message: "Registered",
        user: { id: user._id, name: user.name, email: user.email, phone: user.phone },
    });
}));

router.post("/auth/login", asyncHandler(async (req, res) => {
    const { email, password } = req.body || {};
    if (!email || !password) {
        return res.status(400).json({ message: "Missing credentials" });
    }
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    const ok = await bcrypt.compare(password, user.passwordHash || "");
    if (!ok) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    // For now return a dummy token
    res.json({
        message: "Logged in",
        user: { id: user._id, name: user.name, email: user.email },
        token: "demo-token",
    });
}));

export default router; 