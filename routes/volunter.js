const express = require('express');
const router = express.Router();

const {registerseniorcitizen}   = require('../controllers/volunter')

router.route("/registerseniorcitizen").post(registerseniorcitizen);

module.exports = router;