import express from "express";
import {
  changeJobApplicationStatus,
  changeVisibility,
  getCompanyData,
  getCompanyJobApplicants,
  getCompanyPostedJobs,
  loginCompany,
  postJob,
  registerCompany,
} from "../controllers/companyController.js";
import upload from "../config/multer.js";
import { protectComapny } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register",upload.single('image'), registerCompany);
router.post("/login", loginCompany);
router.get("/company", protectComapny,getCompanyData);
router.post("/post-job",protectComapny, postJob);
router.get("/applicants",protectComapny, getCompanyJobApplicants);
router.get("/list-jobs",protectComapny, getCompanyPostedJobs);
router.post("/change-status",protectComapny, changeJobApplicationStatus);
router.post("/change-visibility",protectComapny, changeVisibility);

export default router;
