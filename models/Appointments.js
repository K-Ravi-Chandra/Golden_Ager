const mongoose = require('mongoose');


const AppointmentsSchema = new mongoose.Schema({

    name : {
        type : String,
        required : [true , "Insufficient Details"]
    },
    email : {
        type : String,
        required : [true , "Insufficient Details"]
    },
    solution :String,
    advice : String,
    problem : String,
    status : String,
    date : Date,
    doctor : String,
    checked : Boolean
});

const Appointments = mongoose.model("Appointments", AppointmentsSchema);

module.exports = Appointments;