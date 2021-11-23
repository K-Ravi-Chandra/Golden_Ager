const express = require('express');
const router = express.Router();

const {getHistory,registerseniorcitizen,getHelpRequests,findSeniorCitizen ,updateHelpRequest, updateFinancialRequest,registerfamilymember,findDoctor ,registerdoctor, getFinancialRequests}   = require('../controllers/volunter')

router.route("/registerseniorcitizen").post(registerseniorcitizen);
router.route("/getfinancialrequests").post(getFinancialRequests);
router.route("/getHistory").post(getHistory);
router.route("/getHelpRequests").post(getHelpRequests);
router.route("/registerdoctor").post(registerdoctor)
router.route("/registerfamilymember").post(registerfamilymember)
router.route("/finddoctor").post(findDoctor )
router.route("/findseniorcitizen").post(findSeniorCitizen )
router.route("/updateFinancialRequest").post(updateFinancialRequest)
router.route("/updateHelpRequest").post(updateHelpRequest)

module.exports = router;