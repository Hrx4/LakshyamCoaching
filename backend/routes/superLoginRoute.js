const express = require('express');
const { superLogin } = require('../controllers/superLoginControllers');

const router= express.Router()

router.route('/').post(superLogin)


module.exports = router