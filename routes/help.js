const express = require("express");
const router = express.Router();
const {normal, financial} = require('../controllers/help')

router.route("/normalhelp").post(normal);
router.route("/financialhelp").post(financial);

module.exports = router; 