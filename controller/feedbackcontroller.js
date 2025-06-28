import feedbackSchema from "../schema/feedbackSchema.js";
import { transporter } from "../helper/mailer.js";
export const createfeedback = async (req, res) => {

    try {
        const { message } = req.body

        if ( !message) {
            return res.status(400).json({
                success: false,
                message: "message is required."
            });
        }


        const createNewfeedback = new feedbackSchema({
            message,
        });

        await createNewfeedback.save()

        // Send email to admin
        await transporter.sendMail({
            from: `"Website Contact" <${process.env.MAIL_USER}>`,
            to: `<${process.env.MAIL_USER}>`, // admin email here
            subject: "New Contact Form Submission",
            html: `
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        res.status(201).json({
            success : true,
            message : "feedback sent successfully",
            createNewfeedback
        })
        
    } catch (error) {
        console.error(error); 
        res.status(400).json({
            error : error.message
        })
    }

}