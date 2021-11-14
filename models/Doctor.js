const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    hospital : String
})