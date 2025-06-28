import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    service_id: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    service_used: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
}, { timestamps: true })

export default mongoose.model("testimonial", testimonialSchema)