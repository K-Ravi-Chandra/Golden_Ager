const express = require('express');
const router = express.Router();

const { updateAppointment ,getTotalAppointments,getAppointments , getDetails , getPatients}   = require('../controllers/doctor')

router.route("/getAppointments").post(getAppointments );
router.route("/updateAppointment").post( updateAppointment);
router.route("/getDetails").post( getDetails);
router.route("/getPatients").post( getPatients);
router.route("/getTotalAppointments").post( getTotalAppointments);
module.exports = router;