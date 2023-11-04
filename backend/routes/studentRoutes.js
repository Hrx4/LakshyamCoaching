const express = require('express');
const { getStudent, updateStudent, deleteStudent, createStudent } = require('../controllers/studentControllers');

const router= express.Router()

router.route('/').post(createStudent);
router.route('/:id').delete(deleteStudent).put(updateStudent).get(getStudent);


module.exports = router