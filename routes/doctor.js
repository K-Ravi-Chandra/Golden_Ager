const express = require('express');
const router = express.Router();

const { updateAppointment ,getAppointments , getDetails , getPatients}   = require('../controllers/doctor')

router.route("/getAppointments").post(getAppointments );
router.route("/updateAppointment").post( updateAppointment);
router.route("/getDetails").get( getDetails);
router.route("/getPatients").post( getPatients);
module.exports = router;