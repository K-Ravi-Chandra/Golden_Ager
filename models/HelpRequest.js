const mongoose = require('mongoose');


const HelpRequestSchema = new mongoose.Schema({
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
    status : String,
    doctor : {
        type : String,
        required : [true, "Insuficient details"]
    },
    date : {
        type : Date,
        required : [true, "Insuficient details"]
    },

});


const HelpRequest  = mongoose.model("HelpRequests",HelpRequestSchema);

module.exports = HelpRequest ;