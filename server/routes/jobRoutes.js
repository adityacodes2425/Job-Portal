import express from "express";
import { getJobById, getJobs } from "../controllers/jobController.js";

const router = express.Router();

// Route to get all jobs

router.get("/", getJobs);

// Route to get jobs by id

router.get("/:id", getJobById);

export default router;