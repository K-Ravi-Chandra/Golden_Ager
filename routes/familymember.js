const express = require('express');
const router = express.Router();

const {getAppointmentsData,getMyDetails,volunteerdetails,getNotifications} = require('../controllers/familymember')

router.route("/getAppointmentsData").post(getAppointmentsData);
router.route("/getMyDetails").post(getMyDetails);
router.route("/volunteerdetails").post(volunteerdetails);
router.route("/getNotifications").post(getNotifications);
module.exports = router;