const express = require('express');
const router = express.Router();

const {registerseniorcitizen , findDoctor ,registerdoctor, getFinancialRequests}   = require('../controllers/volunter')

router.route("/registerseniorcitizen").post(registerseniorcitizen);
router.route("/getfinancialrequests").get(getFinancialRequests);
router.route("/registerdoctor").post(registerdoctor)
router.route("/finddoctor").post(findDoctor )

module.exports = router;