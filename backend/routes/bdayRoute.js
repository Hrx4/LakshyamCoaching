const express = require('express');
const { getBirthday } = require('../controllers/birthdayControllers');

const router= express.Router()

router.route('/').post(getBirthday)

module.exports = router