import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    contact_method: {
        type: String,
        required: true,
    },
    interest: {
        type: String,
        required: true,
    },
    preferred_time: {
        type: String,
        required: true,
    },
    know: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, { timestamps: true })

export default mongoose.model("contact", contactSchema)