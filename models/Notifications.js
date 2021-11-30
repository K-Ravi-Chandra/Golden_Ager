const mongoose = require('mongoose');


const NotificationsSchema = new mongoose.Schema({

    email : {
        type : String,
        required : [true , "Insufficient Details"]
    },
    date : Date,
});

const Notifications = mongoose.model("Notifications", NotificationsSchema);

module.exports = Notifications;