import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import menuRoutes from "./routes/menuRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

// Load environment variables
dotenv.config();

// Initialize app
const app = express();
connectDB();

// Middleware
app.use(cors({ origin: process.env.ALLOWED_ORIGINS.split(","), credentials: true }));
app.use(bodyParser.json());

// Routes
app.use("/api/menu", menuRoutes);

// Error Handling Middleware
app.use(errorHandler);

export default app;
