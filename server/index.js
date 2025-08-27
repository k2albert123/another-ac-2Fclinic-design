import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js"
import connectDB from "./db/db.js";
import healthRoutes from "./routes/healthRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config()

export const createServer = () => {

  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }))

  connectDB()

  // Health check and basic root
  app.get('/', (_req, res) => {
    res.json({ status: 'ok' })
  })
  app.use('/api', healthRoutes);

  // Feature routes
  app.use('/api', userRoutes);
  app.use('/api', bookingRoutes);
  app.use('/api', authRoutes);

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server has been started successfully on: ${PORT}`);
  })

  return app;
}

createServer();
