const express = require('express');
const { createPopup, getPopup, deletePopup, updatePopup } = require('../controllers/popupControllers');

const router= express.Router()

router.route('/').post(createPopup).get(getPopup);
router.route('/:id').delete(deletePopup).put(updatePopup);


module.exports = router