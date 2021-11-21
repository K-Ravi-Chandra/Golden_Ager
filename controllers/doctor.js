const Appointments = require('../models/Appointments');

exports.updateAppointment = async (req ,res , next) => {

    const {_id , problem , status, advice , solution } = req.body
    const checked = true
    

    try {
        const appointment = await Appointments.updateOne(
            { _id} ,
            {checked ,problem , status, advice , solution  },{}
         )

        console.log(appointment)

        // appointment.insert({"problem": `${problem}`})
        // appointment.insert({"status": `${status}`})

        


        res.status(200).json({
            success :true
        });

    }catch (error) {
        console.log(error);
        next(error);
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
                    {"doctor" : req.body.doctor},
                    {"checked" :  false}
                ]
            })
            console.log("-----------------------------------------------------------------------")
            console.log(appointments)
            if(!appointments){
                res.status(200).json({
                    success :true,
                    message: "No Appointments",
                    requests : "0"
                });
            }
            else{
                res.status(200).json({
                    success :true,
                    message: " Appointments Found",
                    requests : appointments
                });
            }
        } catch (error) {
            res.status(500).json({
                success :false,
                error: error.message,
            });
        }
    }

}