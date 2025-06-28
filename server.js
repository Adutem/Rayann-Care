import express from "express"
import dotenv from "dotenv"
import connectDb from "./connect/connectDB.js"
import contactRouter from "./router/contactroute.js"
import testimonialRouter from "./router/testimonialroute.js"
import path from "path"

dotenv.config()
connectDb()

const app = express()
app.use(express.json())

app.use(express.urlencoded({ extended: true })); // handles form data

const PORT = process.env.PORT || 5001

app.use("/api/contact", contactRouter)
app.use("/api/testimonial", testimonialRouter)

// app.get("/", (req, res) => {
//     res.send(`Hello world`)
// })
app.use('/', express.static(path.join(process.cwd(), '/public')));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})