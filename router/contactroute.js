import { createContact } from "../controller/contactcontroller.js"
import express from "express";

const router = express.Router()

router.post("/create-contact", createContact)

export default router