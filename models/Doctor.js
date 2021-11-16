const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    username :  {
        type : String,
        required : [true, "DoctorSchema  : Name not provided"]   ,
    },
    email : {
        type : String,
        required : [true, "DoctorSchema  : Email not provided"]   ,
    },
    phone : {
        type : String,
        required : [true, "DoctorSchema  : Phone not provided"]   ,
    },
    hospital : {
        type : String,
        required : [true, "DoctorSchema  : Hospital not provided"]   ,
    },
    hospitalAddress: {
        type : String,
        required : [true, "DoctorSchema  : Hospital Address not provided"]   ,
    },
    volunter :  {
        type : String,
        required : [true, "DoctorSchema  : volunter email not provided"]   ,
    },
})

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;