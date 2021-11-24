const mongoose = require('mongoose');


const DonatingThingsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    thing: String,
    date : Date,
    status : Boolean

});


const DonatingThings = mongoose.model("DonatingThings",DonatingThingsSchema);

module.exports = DonatingThings;