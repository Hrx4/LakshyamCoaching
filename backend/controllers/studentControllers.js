const asyncHandler = require('express-async-handler');
const studentModels = require('../models/studentModels');

const createStudent = asyncHandler(async(req , res) => {
    const {studentEnrollment , studentClass,studentBoard, studentCourse , studentSubjects , studentEmail , studentPhone , studentAddress , studentPaymentType , studentDob , studentPhoto , guardianName , guardianPhone , guardianEmail , guardianAddress } = req.body;
 
    const student = await studentModels.create({
        studentEnrollment , studentClass,studentBoard, studentCourse , studentSubjects , studentEmail , studentPhone , studentAddress , studentPaymentType , studentDob , studentPhoto , guardianName , guardianPhone , guardianEmail , guardianAddress    })
    res.status(200).json(student)

})


const getStudent = asyncHandler(async(req , res) => {
    const studentCourse = req.params.id;

    const students = await studentModels.find({studentCourse : studentCourse} , 
        function (err, docs) { 
            if (err){ 
                console.log(err); 
            } 
            else{ 
                console.log("List of the students : ", docs); 
            } 
        })
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

    const {studentEnrollment , studentClass,studentBoard, studentCourse , studentSubjects , studentEmail , studentPhone , studentAddress , studentPaymentType , studentDob , studentPhoto , guardianName , guardianPhone , guardianEmail , guardianAddress } = req.body;

    const student = await studentModels.findById(req.params.id);
    if(!student){
        res.status(404);
        throw new Error("student not found")
    }

    const updatedStudent = await studentModels.findByIdAndUpdate(
        req.params.id,
        {
            studentEnrollment : studentEnrollment, 
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