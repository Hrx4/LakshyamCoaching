const express = require('express');
const { createNotice, getNotice, deleteNotice, updateNotice } = require('../controllers/noticeControllers');

const router= express.Router()

router.route('/').post(createNotice).get(getNotice);
router.route('/:id').delete(deleteNotice).put(updateNotice);


module.exports = router