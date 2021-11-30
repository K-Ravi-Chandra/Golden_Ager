const express = require('express');
const router = express.Router();


const { bookAppointment ,details ,sendNotifications }   = require('../controllers/seniorcitizen')

router.route("/bookAppointment").post(bookAppointment);
router.route("/details").post(details);
router.route("/sendNotifications").post(sendNotifications);

module.exports = router;