import "./config/instrument.js";
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from "./controllers/webhooks.js";
import companyRoutes from "./routes/companyRoutes.js"
import connectCloudinary from "./config/cloudinary.js";
import jobRoutes from "./routes/jobRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import {clerkMiddleware} from "@clerk/express"

// Initialize the app
const app = express();

// Connecting to DB
await connectDB();

// connect to clodinary

 await connectCloudinary();
 
// Middlewares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Routes
app.get("/", (req, res) => {
  res.send("API is working");
});

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My First Sentry Error");
});

app.post("/webhooks", clerkWebhooks);
app.use('/api/company', companyRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);

// Port Set up
const PORT = process.env.PORT || 3000;
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle unhandled promise rejections and exceptions
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});
