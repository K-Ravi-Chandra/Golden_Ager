const User = require('../models/User');
const SeniorCitizen = require('../models/SeniorCitizen')
const ErrorResponse = require('../utils/errorResponse')
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

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

exports.familymember = async (req ,res , next) => {
    const familyMemberToken = String(req.params.familyMemberToken)

    try {
        const senior = await SeniorCitizen.findOne({
            familyMemberToken
        })

        if(!senior){
            return next(new ErrorResponse("Invalid  Token ", 400))
        }

        res.status(201).json({
            success :true,
            data : " Yay! you have got access",
            email : `${senior.email}`
        })
    } catch (error) {
        next(error)
    }
}


const sendToken = (user, statusCode, res)=> {
    const token = user.getSignedToken();
    res.status(statusCode).json({success : true, token})
}