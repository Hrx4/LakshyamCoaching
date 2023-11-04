const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    
    studentEnrollment: {
        type: String,
        required: [true, "Please add the Enrollment No"],
    },
    studentClass: {
        type: String,
        required: [true, "Please add the Class"],
    },
    studentBoard: {
        type: String,
        required: [true, "Please add the Board"],
    },
    studentCourse: {
        type: String,
        required: [true, "Please add the Course"],
    },
    studentSubjects: {
        type: [],
        required: [true, "Please add the Subjects"],
    },
    studentEmail: {
        type: String,
        required: [true, "Please add the Email"],
    },
    studentPhone: {
        type: String,
        required: [true, "Please add the Phone no"],
    },
    studentAddress: {
        type: String,
        required: [true, "Please add the Address"],
    },
    studentPaymentType: {
        type: String,
        required: [true, "Please add the Payment type"],
    },
    studentDob: {
        type: String,
        required: [true, "Please add the Dob"],
    },
    studentPhoto: {
        type: String,
        required: [true, "Please add the Photo"],
    },
    guardianName: {
        type: String,
        required: [true, "Please add the Guardian Name"],
    },
    guardianPhone: {
        type: String,
        required: [true, "Please add the Guardian Phone no"],
    },
    guardianEmail: {
        type: String,
        required: [true, "Please add the Guardian Email"],
    },
    guardianAddress: {
        type: String,
        required: [true, "Please add the Guardian Address"],
    },
    
}, {
    timestamps: true,
}
);

module.exports = mongoose.model("student" , studentSchema)