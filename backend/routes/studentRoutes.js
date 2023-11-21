const express = require('express');
const { getStudent, updateStudent, deleteStudent, createStudent, updatePayment, getStudentPayment, getMonthlyIncome } = require('../controllers/studentControllers');

const router= express.Router()

router.route('/').post(createStudent);
router.route('/getstudent').post(getStudent)
router.route('/getpayment').post(getStudentPayment).get(getMonthlyIncome)
router.route('/:id').delete(deleteStudent).put(updateStudent);
router.route('/payment/:id').put(updatePayment)

module.exports = router