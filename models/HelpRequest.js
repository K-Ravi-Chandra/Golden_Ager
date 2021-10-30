const mongoose = require('mongoose');

const HelpRequestSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    helptype : String,
    date : Date

});


const HelpRequest  = mongoose.model("HelpRequests",HelpRequestSchema);

module.exports = HelpRequest ;