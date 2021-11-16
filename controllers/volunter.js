const User = require('../models/User');
const SeniorCitizen = require('../models/SeniorCitizen')
const Doctor = require('../models/Doctor')
const FamilyMember = require('../models/FamilyMember')
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

    
            console.log("Senior Citizen Registration Successful");

            res.status(200).json({
                success :true,
                data: "Senior Citizen Registration Successful",
            });

        } catch (error) {
            await SeniorCitizen.deleteOne(senior)
            console.log(error);
            next(error);
        } 

        

    } catch (error) {
        console.log(error);
        next(error);
    } 
}

// Doctor registration
exports.registerdoctor = async (req ,res , next) => {


    const data = req.body

    const username = data.username
    const phone = data.phone
    const hospital = data.hospital
    const hospitalAddress = data.hospitalAddress

    const email = data.email
    const password = data.password
    const volunter = data.volunter


    
    try {
        const doctor = await Doctor.create({
            username, email, phone,volunter, hospital,hospitalAddress
        });
        

        const role = "2"

        try {
            
            const user = await User.create({
                username, email, password,role
            });
    
            console.log("Doctor Registration Successful");

            res.status(200).json({
                success :true,
                data: "Doctor Registration Successful",
            });

        } catch (error) {
            await Doctor.deleteOne(doctor)
            console.log(error);
            next(error);
        } 

    } catch (error) {
        console.log(error);
        next(error);
    } 
}

exports.findDoctor  = async (req ,res , next) =>{
    const email = req.body;
    console.log(req.body)


    if(!email) {
        return next(new ErrorResponse("Please provide doctor email address ", 400))
    }
    else{
        try {
            const doctor = await Doctor.findOne(email)
            if(!doctor){
                res.status(200).json({
                    success :false,
                });
            }
            else{
                res.status(200).json({
                    success :true,
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

// Family Member Registeration
exports.registerfamilymember = async (req ,res , next) => {


    const data = req.body

    const username = data.username
    const phone = data.phone
    const senior = data.senior

    const email = data.email
    const password = data.password
    const volunter = data.volunter


    
    try {
        const familymember = await FamilyMember.create({
            username, email, phone,volunter, senior
        });
        

        const role = "3"

        try {
            
            const user = await User.create({
                username, email, password,role
            });
    
            console.log("Family Member Registration Successful");

            res.status(200).json({
                success :true,
                data: "Family Member Registration Successful",
            });

        } catch (error) {
            await FamilyMember.deleteOne(familymember)
            console.log(error);
            next(error);
        } 

    } catch (error) {
        console.log(error);
        next(error);
    } 
}

exports.findSeniorCitizen  = async (req ,res , next) =>{
    const email = req.body;

    if(!email) {
        return next(new ErrorResponse("Please provide senior email address ", 400))
    }
    else{
        try {
            const senior = await SeniorCitizen.findOne(email)
            if(!senior){
                res.status(200).json({
                    success :false,
                });
            }
            else{
                res.status(200).json({
                    success :true,
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

