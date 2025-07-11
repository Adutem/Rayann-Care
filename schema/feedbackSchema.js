import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
}, { timestamps: true })

export default mongoose.model("feedback", feedbackSchema)