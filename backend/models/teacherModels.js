const mongoose = require('mongoose')

const teacherSchema = mongoose.Schema({

    teacherEmail: {
        type : String
    },
    teacherPassword: {
        type : String
    },
    teacherName: {
        type : String
    },
    teacherAge : {
        type: String
    },
    teacherGender: {
        type : String
    },
    teacherEducation : {
        type: String
    },
    teacherAddress: {
        type : String
    },
    
    teacherDoj: {
        type : String
    },
    teacherSubject : {
        type: String
    },
    bdayMonth : {
        type : Number
      },
      bdayDate : {
        type : Number
      },
    teacherClass: {
        type : String
    },
    teacherCourse : {
        type: String
    },
    teacherDob : {
        type: String
    },
    teacherSalary : {
        type: Number
    },
    
}, {
    timestamps: true,
}
);

module.exports = mongoose.model("teacher" , teacherSchema)