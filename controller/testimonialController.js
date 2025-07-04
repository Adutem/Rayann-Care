import testimonialSchema from "../schema/testimonialSchema.js";
import { transporter } from "../helper/mailer.js";

export const createTestimonial = async (req, res) => {

    try {
        const { fullname, service_id, message, service_used, location } = req.body

        if (!fullname || !service_id || !message || !service_used || !location) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }



        const createNewTestimonial = new testimonialSchema({
            fullname, 
            service_id, 
            message, 
            service_used, 
            location
        });

        await createNewTestimonial.save()
         await transporter.sendMail({
                    from: `"Website Contact" <${process.env.MAIL_USER}>`,
                    to: `<${process.env.MAIL_USER}>`, // admin email here
                    subject: "New Testimonial Form Submission",
                    html: `
                        <h3>New Contact Message</h3>
                        <p><strong>Name:</strong> ${fullname} </p>
                        <p><strong>Service Id:</strong> ${service_id}</p>
                        <p><strong>Message:</strong> ${message}</p>
                        <p><strong>Service Used:</strong> ${service_used}</p>
                        <p><strong>Location:</strong> ${location}</p>
                    `
                });
        res.status(201).json({
            success : true,
            message : "Testimonial sent successfully",
            createNewTestimonial
        })
        
    } catch (error) {
        console.error(error); 
        res.status(400).json({
            error : error.message
        })
    }

}