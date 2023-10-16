const express = require('express');
const { createSubject, getSubject, deleteSubject, updateSubject } = require('../controllers/subjectControllers');

const router= express.Router()

router.route('/').post(createSubject).get(getSubject);
router.route('/:id').delete(deleteSubject).put(updateSubject);


module.exports = router