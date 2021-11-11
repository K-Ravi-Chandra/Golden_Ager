const mongoose = require('mongoose');


const FinancialRequestSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Insuficient details"]
    },
    email : {
        type : String,
        required : [true, "Insuficient details"]
    },
    phone : {
        type : String,
        required : [true, "Insuficient details"]
    },
    volunter : {
        type : String,
        required : [true, "Insuficient details"]
    },
    date : {
        type : Date,
        required : [true, "Insuficient details"]
    },

});


const FinancialRequest  = mongoose.model("FinancialRequests",FinancialRequestSchema);

module.exports = FinancialRequest ;