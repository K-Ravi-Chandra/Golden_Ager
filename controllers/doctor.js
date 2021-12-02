const Appointments = require('../models/Appointments');
const Doctor = require('../models/Doctor');
const Senior = require('../models/SeniorCitizen')

exports.updateAppointment = async (req ,res , next) => {

    const {_id , problem , status, advice , solution } = req.body
    const checked = true
    

    try {
        const appointment = await Appointments.updateOne(
            { _id} ,
            {checked ,problem , status, advice , solution  },{}
         )

        console.log(appointment)

        res.status(200).json({
            success :true
        });

    }catch (error) {
        console.log(error);
        next(error);
    } 
}

exports.getTotalAppointments  = async (req ,res , next) => {
    
    const {doctor} = req.body;

    console.log(doctor) 



    if(!doctor){
        return next(new ErrorResponse("Please try again! Later", 400))
    }
    else{
        try { 
            const totalappointments = await Appointments.find(  {"doctor" : doctor})

            res.status(200).json({
                    success :true,
                    requests : totalappointments
            });

        } catch (error) {
            res.status(500).json({
                success :false,
                error: error.message,
            });
        }
    }

}

exports.getAppointments  = async (req ,res , next) => {
    
    const {doctor} = req.body;

    console.log(doctor) 

    if(!doctor){
        return next(new ErrorResponse("Please try again! Later", 400))
    }
    else{
        try { 
            const appointments = await Appointments.find( {
                $and : [
                    {"doctor" : doctor},
                    {"checked" :  false}
                ]
            })
            console.log(appointments)

            res.status(200).json({
                    success :true,
                    requests : appointments
            });

        } catch (error) {
            res.status(500).json({
                success :false,
                error: error.message,
            });
        }
    }

}

exports.getDetails  = async (req ,res , next) =>{

    const email = req.body
    console.log(req.body)
    if(!email){
        return next(new ErrorResponse("Please try again! Later", 400))
    }
    else {
        try {
            const doctor = await Doctor.findOne( email)
            
            res.status(200).json({
                details : doctor ,
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


exports.getPatients  = async (req ,res , next) =>{

    const {doctor} = req.body

    if(!doctor){
        return next(new ErrorResponse("Please try again! Later", 400)) 
    }
    else {
        try {
            const patients = await Senior.find( {"doctor" : doctor} )
            
            res.status(200).json({
                patients : patients ,
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