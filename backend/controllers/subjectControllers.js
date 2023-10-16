const asyncHandler = require('express-async-handler');
const subjectModels = require('../models/subjectModels');

const createSubject = asyncHandler(async(req , res) => {
    const {subjectCourse , subjectName , subjectFee , subjectTeacher} = req.body;
 
    const subject = await subjectModels.create({
        subjectCourse , subjectName , subjectFee , subjectTeacher
    })
    res.status(200).json(subject);

})


const getSubject = asyncHandler(async(req , res) => {
    const subjects = await subjectModels.find()
    res.status(200).json(subjects);
})

const deleteSubject = asyncHandler(async(req , res) => {
    const subject = await subjectModels.findById(req.params.id);
    console.log(req.params.id)
    if(!subject){
        res.status(404);
        throw new Error("subject not found");
    }

    await subjectModels.deleteOne({_id:req.params.id})
    res.status(200).json(subject);
})


const updateSubject = asyncHandler(async(req , res) => {

    const {subjectCourse , subjectName , subjectFee , subjectTeacher} = req.body

    const subject = await subjectModels.findById(req.params.id);
    if(!subject){
        res.status(404);
        throw new Error("subject not found")
    }

    const updatedSubject = await subjectModels.findByIdAndUpdate(
        req.params.id,
        {
            subjectCourse : subjectCourse , 
            subjectName : subjectName, 
            subjectFee : subjectFee, 
            subjectTeacher :subjectTeacher
        }
    )

    res.status(201).json(subject);
})




module.exports = {createSubject , getSubject , deleteSubject , updateSubject}