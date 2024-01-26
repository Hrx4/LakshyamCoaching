const asyncHandler = require("express-async-handler");
const studentModels = require("../models/studentModels");
const paymentModels = require("../models/paymentModels");
const subjectModels = require("../models/subjectModels");

const createStudent = asyncHandler(async (req, res) => {
  const {
    studentName,
    studentDob,
    studentGender,
    fatherName,
    fatherOccupassion,
    fatherNo,
    motherName,
    parentWp,
    emergencyNo,
    studentAddress,
    studentDoj,
    studentBlood,
    schoolName,
    lastClass,
    lastExam,
    iitNeetCourse,
    schoolingCourse,
    schoolingClass,
    iitNeetAdmission,
    schoolingAdmission,
    extraAdmission,
    iitNeetFee,
    schoolingFee,
    extraFee,
    iitNeetSub,
    schoolingSub,
    extraSub,
  } = req.body;

  const date = new Date();
  // const month = date.getMonth();
  const month = 4
  let totalPayingFee = 0;
  let totalMonthlyFee = iitNeetFee + schoolingFee + extraFee;
  const actualDate = date.toISOString().split("T")[0]
  let arr =[]
  let admissionArr =[]
  if(iitNeetAdmission === "YES"){
      admissionArr.push({
        year : date.getFullYear(),
        paymentMonth : month,
        paidMonth : month,
        paymentFee : 1500,
        paidDate : actualDate
      })
    }
  if(schoolingAdmission === "YES"){
    admissionArr.push({
      year : date.getFullYear(),
      paymentMonth : month,
      paidMonth : month,
      paymentFee : 1500,
      paidDate : actualDate
    })
  }
  if(extraAdmission==="YES"){
    admissionArr.push({
      year : date.getFullYear(),
      paymentMonth : month,
      paidMonth : month,
      paymentFee : 600,
      paidDate : actualDate
    })
  }
  if (month >= 0 && month <= 2) {
    arr.push({
      year : date.getFullYear(),
      paymentMonth : month,
      paidMonth : null,
      paymentFee : totalMonthlyFee * (3-month),
      paidDate : null
    })
  }
  else{
    let actualPayingFee = (totalMonthlyFee * (12-month +3)) / (12-month)
    for (let index = month; index <= 11; index++) {
      // const element = array[index];
      arr.push({
        year : date.getFullYear(),
        paymentMonth : index,
        paidMonth : null,
        paymentFee : actualPayingFee,
        paidDate : null
      })
      
    }
  }

  const student = await studentModels.create({
    studentName,
    studentDob,
    studentGender,
    fatherName,
    fatherOccupassion,
    fatherNo,
    motherName,
    parentWp,
    emergencyNo,
    studentAddress,
    studentDoj,
    studentBlood,
    schoolName,
    lastClass,
    lastExam,
    iitNeetCourse,
    schoolingCourse,
    schoolingClass,
    iitNeetAdmission,
    schoolingAdmission,
    extraAdmission,
    iitNeetFee,
    schoolingFee,
    extraFee,
    iitNeetSub,
    schoolingSub,
    extraSub,
    paymentDetails : arr,
    admissionPaymentDetails : admissionArr
  });

  res.status(200).json(student);
});

const getStudent = asyncHandler(async (req, res) => {
  const { studentCourse } = req.body;

  const students = await studentModels.find({ studentCourse: studentCourse });
  res.status(200).json(students);
});
const getStudentPayment = asyncHandler(async (req, res) => {
  const { paymentId } = req.body;

  const payment = await paymentModels.find({ paymentId: paymentId });
  res.status(200).json(payment);
});

const deleteStudent = asyncHandler(async (req, res) => {
  const student = await studentModels.findById(req.params.id);
  console.log(req.params.id);
  if (!student) {
    res.status(404);
    throw new Error("student not found");
  }

  await studentModels.deleteOne({ _id: req.params.id });
  res.status(200).json(student);
});

const updateStudent = asyncHandler(async (req, res) => {
  const {
    studentName,
    studentDob,
    studentGender,
    fatherName,
    fatherOccupassion,
    fatherNo,
    motherName,
    parentWp,
    emergencyNo,
    studentAddress,
    studentDoj,
    studentBlood,
    schoolName,
    lastClass,
    lastExam,
    iitNeetCourse,
    schoolingCourse,
    schoolingClass,
    iitNeetAdmission,
    schoolingAdmission,
    extraAdmission,
    iitNeetFee,
    schoolingFee,
    extraFee,
    iitNeetSub,
    schoolingSub,
    extraSub,
  } = req.body;

  const student = await studentModels.findById(req.params.id);
  if (!student) {
    res.status(404);
    throw new Error("student not found");
  }

  const updatedStudent = await studentModels.findByIdAndUpdate(req.params.id, {
    studentName : studentName,
    studentDob : studentDob,
    studentGender : studentGender,
    fatherName : fatherName,
    fatherOccupassion : fatherOccupassion,
    fatherNo:fatherNo,
    motherName : motherName,
    parentWp : parentWp,
    emergencyNo : emergencyNo,
    studentAddress : studentAddress,
    studentDoj : studentDoj,
    studentBlood : studentBlood,
    schoolName : schoolName,
    lastClass : lastClass,
    lastExam : lastExam,
    iitNeetCourse : iitNeetCourse,
    schoolingCourse : schoolingCourse,
    schoolingClass : schoolingClass,
    iitNeetAdmission : iitNeetAdmission,
    schoolingAdmission : schoolingAdmission,
    extraAdmission : extraAdmission,
    iitNeetFee : iitNeetFee,
    schoolingFee : schoolingFee,
    extraFee : extraFee,
    iitNeetSub : iitNeetSub,
    schoolingSub : schoolingSub,
    extraSub : extraSub,
  });

  res.status(201).json(updatedStudent);
});

const updatePayment = asyncHandler(async (req, res) => {
  const student = await studentModels.findById( req.params.id );
  const {monthList} = req.body
  const date = new Date();
  const month = date.getMonth();
  const actualDate = date.toISOString().split("T")[0]
  if (!student) {
    res.status(404);
    throw new Error("student not found");
  }
  let arr = student.paymentDetails;
  monthList.map((item , index)=>{
    let temp = arr[item];
    temp = {...temp , paidMonth : month,
      paidDate : actualDate,}
      arr[item]=temp
  })
  
  const updatedPayment = await studentModels.findOneAndUpdate(
    { _id: req.params.id },
    {
      paymentDetails: arr,
    }
  );
  res.status(201).json(updatedPayment);
});

const getMonthlyIncome = asyncHandler(async (req, res) => {
  var totalIncome = 0,
    monthlyIncome = 0,
    monthlyDue = 0,
    totalDue = 0;
  const d = new Date();

  const payments = await paymentModels.find();
  payments.map((item, index) => {
    if (d.getMonth() === item.lastIncomeMonth)
      monthlyIncome += item.lastIncomeMoney;
    if (d.getMonth() - item.lastIncomeMonth === 1)
      monthlyDue += item.lastIncomeMoney;
    if (d.getMonth() > item.lastIncomeMonth)
      totalDue += (d.getMonth() - item.lastIncomeMonth) * item.lastIncomeMoney;

    totalIncome += item.totalIncome;
  });

  res.status(200).json({
    monthlyIncome: monthlyIncome,
    monthlyDue: monthlyDue,
    totalIncome: totalIncome,
    totalDue: totalDue,
    totalStudent: payments.length,
  });
});

const getMonthlyIncomeDetails = asyncHandler(async (req, res) => {
  const { studentCourse, studentClass, studentSubject, studentEnrollment } =
    req.body;
  const d = new Date();

  var students = await paymentModels.find({});
  console.log("====================================");
  console.log(students, "285");
  console.log("====================================");
  students = students.filter((item) => item.lastIncomeMonth === d.getMonth());

  if (studentEnrollment !== "") {
    students = students.filter((item) => item.paymentId === studentEnrollment);
  }

  if (studentCourse !== "") {
    students = students.filter((item) => item.studentCourse === studentCourse);
  }
  if (studentClass !== "")
    students = students.filter((item) => item.studentClass === studentClass);

  if (studentSubject !== "") {
    students = students.filter((item) => {
      return item.studentSubjects.some((elem) => elem === studentSubject);
    });
  }

  res.status(200).json(students);
});

const getTotalIncomeDetails = asyncHandler(async (req, res) => {
  const { studentCourse, studentClass, studentSubject, studentEnrollment } =
    req.body;
  const d = new Date();

  var students = await paymentModels.find({});

  if (studentEnrollment !== "") {
    students = students.filter((item) => item.paymentId === studentEnrollment);
  }

  if (studentCourse !== "") {
    students = students.filter((item) => item.studentCourse === studentCourse);
  }
  if (studentClass !== "")
    students = students.filter((item) => item.studentClass === studentClass);

  if (studentSubject !== "") {
    students = students.filter((item) => {
      return item.studentSubjects.some((elem) => elem === studentSubject);
    });
  }

  res.status(200).json(students);
});

const getMonthlyDueDetails = asyncHandler(async (req, res) => {
  const { studentCourse, studentClass, studentSubject, studentEnrollment } =
    req.body;
  const d = new Date();
  let students = await paymentModels.find({});
  console.log("====================================");
  console.log(students, "285");
  console.log("====================================");
  students = students.filter(
    (item) => d.getMonth() - item.lastIncomeMonth === 1
  );

  if (studentEnrollment !== "") {
    students = students.filter((item) => item.paymentId === studentEnrollment);
  }

  if (studentCourse !== "") {
    students = students.filter((item) => item.studentCourse === studentCourse);
  }
  if (studentClass !== "")
    students = students.filter((item) => item.studentClass === studentClass);

  if (studentSubject !== "") {
    students = students.filter((item) => {
      return item.studentSubjects.some((elem) => elem === studentSubject);
    });
  }

  res.status(200).json(students);
});

const getTotalDueDetails = asyncHandler(async (req, res) => {
  const { studentCourse, studentClass, studentSubject, studentEnrollment } =
    req.body;
  const d = new Date();

  var students = await paymentModels.find({});

  students = students.filter((item) => d.getMonth() > item.lastIncomeMonth);

  if (studentEnrollment !== "") {
    students = students.filter((item) => item.paymentId === studentEnrollment);
  }

  if (studentCourse !== "") {
    students = students.filter((item) => item.studentCourse === studentCourse);
  }
  if (studentClass !== "")
    students = students.filter((item) => item.studentClass === studentClass);

  if (studentSubject !== "") {
    students = students.filter((item) => {
      return item.studentSubjects.some((elem) => elem === studentSubject);
    });
  }

  res.status(200).json(students);
});

module.exports = {
  createStudent,
  getStudent,
  deleteStudent,
  updateStudent,
  updatePayment,
  getStudentPayment,
  getMonthlyIncome,
  getMonthlyIncomeDetails,
  getTotalIncomeDetails,
  getMonthlyDueDetails,
  getTotalDueDetails,
};
