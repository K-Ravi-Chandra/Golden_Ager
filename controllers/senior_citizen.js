const User = require('../models/User');
const SeniorCitizen = require('../models/SeniorCitizen')
const sendEmail = require('../utils/sendEmail');

// Senior citizen registration
exports.register = async (req ,res , next) => {

    const {profile, email, volunter, doctor, password} = req.body;
    // const {username, email, password,role,age,phone,address,email, volunteer, doctor} = req.body;

    try {
        const senior = await SeniorCitizen.create({
            profile, email,volunter, doctor
        });

        const username = profile.name;
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