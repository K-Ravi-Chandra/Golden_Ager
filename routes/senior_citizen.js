const express = require('express');
const router = express.Router();

const {register}   = require('../controllers/senior_citizen')

router.route("/register").post(register);

module.exports = router;