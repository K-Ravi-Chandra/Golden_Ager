const mongoose = require('mongoose');


const AppointmentsSchema = new mongoose.Schema({

    name : {
        type : String,
        required : [true , "Insufficient Details"]
    },
    problem : String,
    status : String,
    date : Date,
    doctor : String
});

const Appointments = mongoose.model("Appointments", AppointmentsSchema);

module.exports = Appointments;