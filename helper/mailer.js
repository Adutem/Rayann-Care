import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: "gmail", // or "hotmail", "yahoo", "outlook" etc
    auth: {
        user: process.env.MAIL_USER,      // your email
        pass: process.env.MAIL_PASSWORD   // your app password (NOT your real password)
    }
});
