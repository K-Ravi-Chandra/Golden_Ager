const ErrorResponse = require('../utils/errorResponse')
const sendEmail = require('../utils/sendEmail');

exports.contact = async (req, res, next) => {



const {name ,email, message} = req.body;


const message1 = `
    <h4> This is ${name} from ${email}.<h4>
    <p> ${message}</p>
`

try {

    await sendEmail({
        from: process.env.EMAIL_FROM,
        to : process.env.EMAIL_TO,
        subject : "Contact Form",
        text: message1
    })

    res.status(200).json({
        success : true,
        data : "Contact form submited"
    })
    
} catch (error) {

    return next(new ErrorResponse("Can't Submit your Concern",500));


}

}