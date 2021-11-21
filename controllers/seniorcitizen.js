const Appointments = require('../models/Appointments')
const SeniorCitizen = require('../models/SeniorCitizen')
exports.bookAppointment = async (req ,res , next) => {
    
    const {name , doctor ,email} = req.body;
    const date = Date.now();
    const checked = false;
    console.log(date)

    try {
        const appointment = await Appointments.create({
            name , doctor , date ,email, checked
        })

        console.log("Appointment has been booked Successfully")

        res.status(200).json({
            success :true,
            data: "Appointment has been booked Successfully",
        });

    }catch (error) {
        console.log(error);
        next(error);
    } 
}

exports.details  = async (req ,res , next) =>{
    const email = req.body;


    if(!email) {
        return next(new ErrorResponse("Please provide senior email address ", 400))
    }
    else{
        try {
            const senior = await SeniorCitizen.findOne(email)
            
            res.status(200).json({
                details : senior,
                success :true,
            });
            
        } catch (error) {
            res.status(500).json({
                success :false,
                error: error.message,
            });
        }
    }
}
