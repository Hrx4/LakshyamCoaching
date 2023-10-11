const express = require('express');
const { deleteApply, createApply, getApply } = require('../controllers/applyControllers');

const router= express.Router()

router.route('/').post(createApply).get(getApply);
router.route('/:id').delete(deleteApply);


module.exports = router