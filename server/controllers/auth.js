const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse')
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

exports.register = async (req ,res , next) => {
    const {username, email, password,role,age,phone,address} = req.body;

    try {
        const user = await User.create({
            username, email, password,role,age,phone,address
        });

        sendToken(user,201,res);
        console.log("registertation successful");
    } catch (error) {
        console.log(error);
        next(error);
    }

    
}

exports.login = async (req ,res , next) => {
    const {email, password} = req.body;

    if(!email || !password){
        // res.status(400).json({
        //     success : false,
        //     error : "Please provide email and password"
        // });
        return next(new ErrorResponse("Please provide email and password", 400))
    }
    else{
        
        try{
            const user = await User.findOne({email}).select("+password");
            if(!user){
                // res.status(404).json({success : false, error: "user not found"})
                return next(new ErrorResponse("user not found", 401))
            }
            const isMatch = await user.matchPassword(password);

            if(!isMatch ){
                // res.status(400).json({success : false, error: "password not matched"})
                return next(new ErrorResponse("Password not matched", 401))
            }
            else {
                
                // res.status(200).json({  
                // success : true, 
                // token: "yesgfawgp4"})
                sendToken(user,200,res);
            
            }

        } catch (error){
            res.status(500).json({
                success :false,
                error: error.message,
            });
        }
    }
}

exports.forgotpassword = async (req ,res , next) => {
    const {email} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user){
            return next (new ErrorResponse("User not found",404))
        }

        const resetToken = user.getResetPasswordToken();
        console.log(resetToken)

        await user.save();

        const resetUrl = `http://localhost:3000/resetpassword/${resetToken}`;

        const message = `
            <h1> You have requested a password reset<h1>
            <p> refer this link</p>
            <a href = ${resetUrl} clicktracking=off> ${resetUrl} </a>
        `

        try {

            await sendEmail({
                to : user.email,
                subject : "Password Reset Request",
                text: message
            })

            res.status(200).json({
                success : true,
                data : "Email Sent"
            })
            
        } catch (error) {
            user.resetPasswordToken = undefined
            user.resetPasswordExpire = undefined

            await user.save();

            return next(new ErrorResponse("Email Could not be Sent",500));

        }

    } catch (error) {
        next(error);
    }
}

exports.resetpassword = async (req ,res , next) => {
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");

    try {
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire : { $gt : Date.now()}
        })

        if(!user){
            return next(new ErrorResponse("Invalid Reset Token ", 400))
        }
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.status(201).json({
            success :true,
            data : "Password reset sucess"
        })
    } catch (error) {
        next(error)
    }
}


const sendToken = (user, statusCode, res)=> {
    const token = user.getSignedToken();
    res.status(statusCode).json({success : true, token})
}