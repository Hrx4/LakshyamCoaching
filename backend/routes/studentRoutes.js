const express = require('express');
const { getStudent, updateStudent, deleteStudent, createStudent } = require('../controllers/studentControllers');

const router= express.Router()

router.route('/').post(createStudent);
router.route('/getstudent').post(getStudent)
router.route('/:id').delete(deleteStudent).put(updateStudent);


module.exports = router