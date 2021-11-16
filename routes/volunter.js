const express = require('express');
const router = express.Router();

const {registerseniorcitizen,findSeniorCitizen , registerfamilymember,findDoctor ,registerdoctor, getFinancialRequests}   = require('../controllers/volunter')

router.route("/registerseniorcitizen").post(registerseniorcitizen);
router.route("/getfinancialrequests").get(getFinancialRequests);
router.route("/registerdoctor").post(registerdoctor)
router.route("/registerfamilymember").post(registerfamilymember)
router.route("/finddoctor").post(findDoctor )
router.route("/findseniorcitizen").post(findSeniorCitizen )

module.exports = router;