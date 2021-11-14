const Appointments = require('../models/Appointments')

exports.bookAppointment = async (req ,res , next) => {
    
    const {name , doctor } = req.body;

    try {
        const appointment = await Appointments.create({
            name , doctor
        })

        console.log("Appointment has been booked Successfully")

        res.status(200).json({
            success :true,
            data: "Senior Citizen Registration Successful",
        });

    }catch (error) {
        console.log(error);
        next(error);
    } 
}