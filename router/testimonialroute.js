import express from "express";
import { createTestimonial } from "../controller/testimonialController.js";

const router = express.Router()

router.post("/create-testimonial", createTestimonial)

export default router