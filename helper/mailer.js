import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  // host: process.env.MAIL_HOST,
  // port: parseInt(process.env.MAIL_PORT),
  // secure: process.env.MAIL_SECURE === 'true', 
  service:"gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});
