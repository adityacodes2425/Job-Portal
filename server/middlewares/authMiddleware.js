import jwt from "jsonwebtoken";

import Company from "../models/Company.js";

export const protectComapny = async (req, res, next) => {
    const token = req.headers.token;

    if (!token) {
        res.json({
            success: false,
            message:"Not authorized Login again",
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.company = await Company.findById(decoded.id).select('-password')

        next();
    } catch (error) {
         res.json({
           success: false,
           message: error.message,
         });
    }
}