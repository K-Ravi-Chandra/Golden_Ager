const express = require('express');
const router = express.Router();

const { updateAppointment ,getAppointments  }   = require('../controllers/doctor')

router.route("/getAppointments").post(getAppointments );
router.route("/updateAppointment").post( updateAppointment);
 
module.exports = router;