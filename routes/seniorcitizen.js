const express = require('express');
const router = express.Router();

const { bookAppointment ,details  }   = require('../controllers/seniorcitizen')

router.route("/bookAppointment").post(bookAppointment);
router.route("/details").post(details);

module.exports = router;