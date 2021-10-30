const ErrorResponse = require('../utils/errorResponse')
const sendEmail = require('../utils/sendEmail');
const HelpRequest = require('../models/HelpRequest');

exports.normalHelp = async (req, res, next) => {

    const {name ,email, phone,helptype } = req.body;
    const date = Date.now();

    try {
        const helpRequest = await HelpRequest.create({
            name ,email,phone,helptype,date
        });

        res.status(201).json({success : true})
        console.log("Submitted Succssfully"); 

    } catch (error) {
        console.log(error);
        next(error);
    }

}