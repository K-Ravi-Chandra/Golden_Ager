const express = require("express");
const router = express.Router();
const {normalHelp} = require('../controllers/help')

router.route("/normalhelp").post(normalHelp);

module.exports = router; 