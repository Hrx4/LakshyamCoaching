const asyncHandler = require('express-async-handler');
const studentModels = require('../models/studentModels');
const teacherModels = require('../models/teacherModels');
 
const getBirthday = asyncHandler(async(req , res)=>{
    const bdayMonth = new Date().getMonth()
    const bdayDate = new Date().getDate()
        const studentlist = await studentModels.find({bdayMonth : bdayMonth, 
        bdayDate  : bdayDate,})
    const teacherlist = await teacherModels.find({bdayMonth : bdayMonth, 
        bdayDate  : bdayDate,})
        res.status(200).json({
            studentList : studentlist,
            teacherList : teacherlist,
        });


})

module.exports = {getBirthday}