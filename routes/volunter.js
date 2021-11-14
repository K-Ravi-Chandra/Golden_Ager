const express = require('express');
const router = express.Router();

const {registerseniorcitizen , getFinancialRequests}   = require('../controllers/volunter')

router.route("/registerseniorcitizen").post(registerseniorcitizen);
router.route("/getfinancialrequests").get(getFinancialRequests);

module.exports = router;