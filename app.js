import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import compression from "compression";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import connectDB from "./config/db.js";
import menuRoutes from "./routes/menuRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
connectDB();

const app = express();

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 500,
});
app.use(limiter);

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json({ limit: "10kb" }));

app.use(compression());


app.use("/api/menu", menuRoutes);

app.use(errorHandler);

export default app;
