import { createfeedback } from "../controller/feedbackcontroller.js"
import express from "express";

const router = express.Router()

router.post("/create-feedback", createfeedback)

export default router