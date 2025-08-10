import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import compression from "compression"; // Step 4
import connectDB from "./config/db.js";
import menuRoutes from "./routes/menuRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
connectDB();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(compression());

app.use("/api/menu", express.json(), menuRoutes);

app.use(errorHandler);

export default app;
