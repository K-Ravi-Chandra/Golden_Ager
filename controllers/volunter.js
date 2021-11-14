const User = require('../models/User');
const SeniorCitizen = require('../models/SeniorCitizen')
const FinancialRequest = require('../models/FinancialRequest')
const ErrorResponse = require('../utils/errorResponse')

// Senior citizen registration
exports.registerseniorcitizen = async (req ,res , next) => {


    const data = req.body

    const username = data.username
    const age =  data.age
    const phone = data.phone
    const address = data.address

    const email = data.email
    const password = data.password
    const volunter = data.volunter
    const doctor = data.doctor

    const profile = {username , age, phone , address}

    
    try {
        const senior = await SeniorCitizen.create({
            profile, email,volunter, doctor
        });
        
        console.log(senior)

        const role = "1"

        try {
            
            const user = await User.create({
                username, email, password,role
            });

            
            const token = senior.getFamilyMemberToken();
            await senior.save();
    
            console.log("Senior Citizen Registration Successful");

            res.status(200).json({
                success :true,
                data: "Senior Citizen Registration Successful",
            });

        } catch (error) {
            console.log(error);
            next(error);
        } 

        

    } catch (error) {
        console.log(error);
        next(error);
    } 
}

exports.getFinancialRequests  = async (req ,res , next) => {
    const volunter = req.body;

    console.log(volunter)

    if(!volunter){
        return next(new ErrorResponse("Please provide email address to fetch financial requests", 400))
    }
    else{
        try {
            const financialRequest = await FinancialRequest.find(volunter)
            if(!financialRequest){
                res.status(200).json({
                    success :true,
                    message: "No Financial Requests",
                    requests : "0"
                });
            }
            else{
                console.log(financialRequest)
                res.status(200).json({
                    success :true,
                    message: " Financial Requests Found",
                    requests : financialRequest
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


const sendToken = (user, statusCode, res)=> {
    const token = user.getSignedToken();
    res.status(statusCode).json({success : true, token})
}