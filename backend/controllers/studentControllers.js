const asyncHandler = require('express-async-handler');
const studentModels = require('../models/studentModels');
const paymentModels = require('../models/paymentModels');
const subjectModels = require('../models/subjectModels');

const createStudent = asyncHandler(async(req , res) => {
    const {studentEnrollment ,
        studentName, studentClass,studentBoard, studentCourse , studentSubjects , studentEmail , studentPhone , studentAddress , 
        studentPaymentType ,
         studentDob , studentPhoto , guardianName , guardianPhone , guardianEmail , guardianAddress , createdMonth , createdYear
    } = req.body;
 
    const student = await studentModels.create({
        studentEnrollment ,
        studentName, studentClass,studentBoard, studentCourse , studentSubjects , studentEmail , studentPhone , studentAddress , 
        studentPaymentType , 
        studentDob , studentPhoto , guardianName , guardianPhone , guardianEmail , guardianAddress ,createdMonth , createdYear
    })
    const totalFee =0;
    const subjects = await subjectModels.find({subjectCourse:studentCourse});
    subjects.map((item , index)=>{
        studentSubjects.find((sub)=>{
             if(item.subjectName===sub) totalFee+=item.subjectFee})
    })



    const d = new Date();
        await paymentModels.create({
            paymentId: studentEnrollment,
            paymentDetails:[
                {paymentMonth:d.getMonth(),
                paymentMoney:totalFee,
                paymentType:studentPaymentType,
                paymentDate:d,}

            ]
        })

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

const updatePayment = asyncHandler(async(req , res)=>{
    const student = await paymentModels.find({paymentId:req.params.id });
    const {paymentId , paymentDetails} = student[0];
    console.log('====================================');
    console.log(paymentDetails);
    console.log('====================================');
    const d = new Date();
    const updatedPayment = await paymentModels.findOneAndUpdate({paymentId:req.params.id },
        {
            paymentId:paymentId,
            paymentDetails:[
                ...paymentDetails , {
                    paymentMonth:d.getMonth(),
                        paymentMoney:'900',
                        paymentType:'monthly',
                        paymentDate:d
                }
            ]
        }
        );
        res.status(201).json(updatedPayment);


})




module.exports = {createStudent , getStudent , deleteStudent , updateStudent , updatePayment}