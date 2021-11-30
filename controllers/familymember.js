const Appointments = require('../models/Appointments');
const Doctor = require('../models/Doctor');
const Senior = require('../models/SeniorCitizen')
const FamilyMember = require('../models/FamilyMember')
const Notifications = require('../models/Notifications')

const User = require('../models/User');


exports.getMyDetails = async (req ,res , next) => {
    const email = req.body;

    if(!email){
        return next(new ErrorResponse("Please provide email address", 400))
    }
    else{
        try {
            const MyDetails = await FamilyMember.find(email)

                res.status(200).json({
                    success :true,
                    message: " Financial Requests Found",
                    details : MyDetails
                });
        } catch (error) {
            res.status(500).json({
                success :false,
                error: error.message,
            });
        }
    }

}


exports.getAppointmentsData  = async (req ,res , next) => {
    
    const {email} = req.body;

    if(!email){
        return next(new ErrorResponse("Please try again! Later", 400))
    }
    else{
        try { 
            const appointments = await Appointments.find( {
                $and : [
                    {"email" : email},
                    {"checked" :  true}
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
exports.getNotifications  = async (req ,res , next) => {
    
    const {email} = req.body;

    if(!email){
        return next(new ErrorResponse("Please try again! Later", 400))
    }
    else{
        try { 
            const notifications = await Notifications.find( { "email" : email})
            console.log(notifications)

            res.status(200).json({
                    success :true,
                    requests : notifications
            });

        } catch (error) {
            res.status(500).json({
                success :false,
                error: error.message,
            });
        }
    }

}

exports.volunteerdetails = async (req ,res , next) => {
    const {email} = req.body;
    

        try{
            const volunter = await User.findOne({email})
            res.status(200).json({
                success : true,
                volunter  : volunter ,
            });




        } catch (error){
            res.status(500).json({
                success :false,
                error: error.message,
            });
        
    }
}