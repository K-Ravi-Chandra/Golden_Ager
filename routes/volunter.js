const express = require('express');
const router = express.Router();

const {getTotalDonations,getSeniorCitizens,getTotalFinancialRequests,acceptDonations , getDonations,getHistory,registerseniorcitizen,getHelpRequests,findSeniorCitizen ,updateHelpRequest, updateFinancialRequest,registerfamilymember,findDoctor ,registerdoctor, getFinancialRequests}   = require('../controllers/volunter')


router.route("/getTotalDonations").post(getTotalDonations);
router.route("/getSeniorCitizens").post(getSeniorCitizens);
router.route("/getTotalFinancialRequests").post(getTotalFinancialRequests);
router.route("/acceptDonations").post(acceptDonations);
router.route("/getDonations").post(getDonations);
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