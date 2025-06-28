import testimonialSchema from "../schema/testimonialSchema.js";

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