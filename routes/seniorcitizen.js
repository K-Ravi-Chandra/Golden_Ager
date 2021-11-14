const express = require('express');
const router = express.Router();

const { bookAppointment }   = require('../controllers/seniorcitizen')

router.route("/bookAppointment").post(bookAppointment);

module.exports = router;