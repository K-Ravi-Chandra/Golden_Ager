const User = require('../models/User');
const SeniorCitizen = require('../models/SeniorCitizen')
const sendEmail = require('../utils/sendEmail');

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
            console.log(error);
            next(error);
        } 

        

    } catch (error) {
        console.log(error);
        next(error);
    } 
}