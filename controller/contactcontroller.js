import contactSchema from "../schema/contactSchema.js";
import { transporter } from "../helper/mailer.js";

export const createContact = async (req, res) => {

    try {
        const { firstname, lastname, email, phone, contact_method, interest, preferred_time, know, location, message } = req.body

        if (!firstname || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Firstname, email and message are required."
            });
        }


        const createNewContact = new contactSchema({
            firstname,
            lastname,
            email,
            phone,
            contact_method,
            interest,
            preferred_time,
            know,
            location,
            message,
        });

        await createNewContact.save()

        // Send email to admin
        await transporter.sendMail({
            from: `"Website Contact" <${process.env.MAIL_USER}>`,
            to: `<${process.env.MAIL_USER}>`, // admin email here
            subject: "New Contact Form Submission",
            html: `
                <h3>New Contact Message</h3>
                <p><strong>Name:</strong> ${firstname} ${lastname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Preferred Contact:</strong> ${contact_method}</p>
                <p><strong>Interest:</strong> ${interest}</p>
                <p><strong>Preferred Time:</strong> ${preferred_time}</p>
                <p><strong>How they found us:</strong> ${know}</p>
                <p><strong>Location:</strong> ${location}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        res.status(201).json({
            success : true,
            message : "Contact sent successfully",
            createNewContact
        })
        
    } catch (error) {
        console.error(error); 
        res.status(400).json({
            error : error.message
        })
    }

}