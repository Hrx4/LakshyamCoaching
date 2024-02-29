const express = require('express');
const { createNotice, deleteNotice, getNotice, updateNotice, getTeacherNotice } = require('../controllers/leaveControllers');

const router= express.Router()

router.route('/').post(createNotice).get(getNotice);
router.route('/:id').delete(deleteNotice).put(updateNotice).get(getTeacherNotice);


module.exports = router