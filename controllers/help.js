const ErrorResponse = require('../utils/errorResponse')
const sendEmail = require('../utils/sendEmail');
const HelpRequest = require('../models/HelpRequest');
const FinancialRequest = require('../models/FinancialRequest');


exports.normal= async (req, res, next) => {

    const {name ,email, phone,volunter, doctor } = req.body;
    const date = Date.now();

    try {
        const helpRequest = await HelpRequest.create({
            name ,email,phone,volunter, doctor ,date 
        });

        res.status(201).json({success : true , data : "Your volunteer will get back to you"})
        console.log("Your volunteer will get back to you"); 

    } catch (error) {
        console.log(error);
        next(error);
    }

}


exports.financial= async (req, res, next) => {

    const {name ,email, phone,volunter } = req.body;
    const date = Date.now();
    const status = "0"

    try {
        const financialRequest = await FinancialRequest.create({
            name ,email,phone,volunter, date , status
        });

        res.status(201).json({success : true , data : "Your volunteer will get back to you"})
        console.log("Your volunteer will get back to you"); 

    } catch (error) {
        console.log(error);
        next(error);
    }

}