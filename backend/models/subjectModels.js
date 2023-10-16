const mongoose = require('mongoose')

const subjectSchema = mongoose.Schema({
    
    subjectCourse: {
        type: String,
        required: [true, "Please add the Course"],
    },
    subjectName: {
        type: String,
        required: [true, "Please add the Name"],

    },
    subjectFee: {
        type: String,
        required: [true, "Please add the Fee"],

    },
    subjectTeacher: {
        type: String,
        required: [true, "Please add the Teacher"],

    },
}, {
    timestamps: true,
}
);

module.exports = mongoose.model("subject" , subjectSchema)