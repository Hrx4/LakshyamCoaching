const asyncHandler = require('express-async-handler');
const studentModels = require('../models/studentModels');

const createStudent = asyncHandler(async(req , res) => {
    const {studentEnrollment ,studentName, studentClass,studentBoard, studentCourse , studentSubjects , studentEmail , studentPhone , studentAddress , studentPaymentType , studentDob , studentPhoto , guardianName , guardianPhone , guardianEmail , guardianAddress } = req.body;
 
    const student = await studentModels.create({
        studentEnrollment ,studentName, studentClass,studentBoard, studentCourse , studentSubjects , studentEmail , studentPhone , studentAddress , studentPaymentType , studentDob , studentPhoto , guardianName , guardianPhone , guardianEmail , guardianAddress    })
    
        // await 

        res.status(200).json(student)

})


const getStudent = asyncHandler(async(req , res) => {
    const studentCourse = req.body;

    const students = await studentModels.find({studentCourse : studentCourse})
    res.status(200).json(students);
})

const deleteStudent = asyncHandler(async(req , res) => {
    const student = await studentModels.findById(req.params.id);
    console.log(req.params.id)
    if(!student){
        res.status(404);
        throw new Error("student not found");
    }

    await studentModels.deleteOne({_id:req.params.id})
    res.status(200).json(student);
})


const updateStudent = asyncHandler(async(req , res) => {

    const {studentEnrollment ,studentName, studentClass,studentBoard, studentCourse , studentSubjects , studentEmail , studentPhone , studentAddress , studentPaymentType , studentDob , studentPhoto , guardianName , guardianPhone , guardianEmail , guardianAddress } = req.body;

    const student = await studentModels.findById(req.params.id);
    if(!student){
        res.status(404);
        throw new Error("student not found")
    }

    const updatedStudent = await studentModels.findByIdAndUpdate(
        req.params.id,
        {
            studentEnrollment : studentEnrollment, 
            studentName:studentName,
            studentClass : studentClass,
            studentBoard : studentBoard, 
            studentCourse : studentCourse , 
            studentSubjects : studentSubjects, 
            studentEmail : studentEmail , 
            studentPhone : studentPhone, 
            studentAddress : studentAddress , 
            studentPaymentType : studentPaymentType, 
            studentDob : studentDob , 
            studentPhoto : studentPhoto , 
            guardianName : guardianName,
            guardianPhone : guardianPhone, 
            guardianEmail : guardianEmail , 
            guardianAddress : guardianAddress }

    )

    res.status(201).json(student);
})




module.exports = {createStudent , getStudent , deleteStudent , updateStudent}