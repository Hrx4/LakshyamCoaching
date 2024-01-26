const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    studentName: {
      type: String,
    },
    studentDob: {
      type: String,
    },
    studentGender: {
      type: String,
    },
    fatherName: {
      type: String,
    },
    fatherOccupassion: {
      type: String,
    },
    fatherNo: {
      type: String,
    },
    motherName: {
      type: String,
    },
    parentWp: {
      type: String,
    },
    emergencyNo: {
      type: String,
    },
    studentAddress: {
      type: String,
    },
    studentDoj: {
      type: String,
    },
    studentBlood: {
      type: String,
    },
    schoolName: {
      type: String,
    },
    lastClass: {
      type: String,
    },
    lastExam: {
      type: String,
    },
    iitNeetCourse: {
      type: String,
    },
    schoolingCourse: {
      type: String,
    },
    schoolingClass: {
      type: String,
    },
    iitNeetAdmission: {
      type: String,
    },
    schoolingAdmission: {
      type: String,
    },
    extraAdmission: {
      type: String,
    },
    iitNeetFee: {
      type: Number,
    },
    schoolingFee: {
      type: Number,
    },
    extraFee: {
      type: Number,
    },
    iitNeetSub: {
      type: [],
    },
    schoolingSub: {
      type: [],
    },
    extraSub: {
      type: [],
    },
    admissionPaymentDetails :{
        type : []
    },
    paymentDetails: {
        type: [],
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("student", studentSchema);
