const ErrorResponse = require('../utils/errorResponse')
const sendEmail = require('../utils/sendEmail');

exports.contact = async (req, res, next) => {

    const {values} = req.body

    const name = values.name ;
    const email = values.email;
    const message = values.message;

    

    const mail = `
        <h4> This is ${name} from ${email}.<h4>
        <p> ${message}</p>
    `

    try {

        await sendEmail({
            from: process.env.EMAIL_FROM,
            to : process.env.EMAIL_TO,
            subject : "Contact Form",
            text: mail
        })

        res.status(200).json({
            success : true,
            data : "Contact form submited"
        })
        
    } catch (error) {

        return next(new ErrorResponse("Can't Submit your Concern",500));

    }

}