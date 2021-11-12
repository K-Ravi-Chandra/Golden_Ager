const express = require('express');
const router = express.Router();

const {registerseniorcitizen, familymember}   = require('../controllers/volunter')

router.route("/registerseniorcitizen").post(registerseniorcitizen);
router.route("/familymember/:familyMemberToken").put(familymember)

module.exports = router;