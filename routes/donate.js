const express = require("express");
const router = express.Router();
const {donatethings} = require('../controllers/donate');

router.route("/donaterequirements").post(donatethings);

module.exports = router; 