const asyncHandler = require("express-async-handler");
const studentModels = require("../models/studentModels");
const paymentModels = require("../models/paymentModels");
const subjectModels = require("../models/subjectModels");

const createStudent = asyncHandler(async (req, res) => {
  const {
    studentEnrollment,
    studentName,
    studentClass,
    studentBoard,
    studentCourse,
    studentSubjects,
    studentEmail,
    studentPhone,
    studentAddress,
    studentPaymentType,
    studentDob,
    studentPhoto,
    guardianName,
    guardianPhone,
    guardianEmail,
    guardianAddress,
    createdMonth,
    createdYear,
  } = req.body;

  const student = await studentModels.create({
    studentEnrollment,
    studentName,
    studentClass,
    studentBoard,
    studentCourse,
    studentSubjects,
    studentEmail,
    studentPhone,
    studentAddress,
    studentPaymentType,
    studentDob,
    studentPhoto,
    guardianName,
    guardianPhone,
    guardianEmail,
    guardianAddress,
    createdMonth,
    createdYear,
  });

  var totalFee = 0;
  const subjects = await subjectModels.find({ subjectCourse: studentCourse });

  subjects.map((item, index) => {
    studentSubjects.map((sub, index) => {
      if (index > 0 && item.subjectName === sub) {
        totalFee += item.subjectFee;
      }
    });
  });

  const d = new Date();
  await paymentModels.create({
    paymentId: studentEnrollment,
    studentCourse: studentCourse,
    studentSubjects: studentSubjects,
    studentClass: studentClass,
    paymentMoney: totalFee,
    paymentType: studentPaymentType,
    studentName: studentName,
    totalIncome: totalFee,
    lastIncomeMonth: d.getMonth(),
    lastIncomeMoney: totalFee,
    lastIncomeDate: d.toISOString().split("T")[0],
    paymentDetails: [
      {
        paymentMonth: d.getMonth(),
        paymentMoney: totalFee,
        paymentType: studentPaymentType,
        paymentDate: d.toISOString().split("T")[0],
        paidMonth: d.getMonth(),
        paidYear: d.getFullYear(),
        paymentYear: d.getFullYear(),
      },
    ],
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
    studentEnrollment,
    studentName,
    studentClass,
    studentBoard,
    studentCourse,
    studentSubjects,
    studentEmail,
    studentPhone,
    studentAddress,
    studentPaymentType,
    studentDob,
    studentPhoto,
    guardianName,
    guardianPhone,
    guardianEmail,
    guardianAddress,
  } = req.body;

  const student = await studentModels.findById(req.params.id);
  if (!student) {
    res.status(404);
    throw new Error("student not found");
  }

  const updatedStudent = await studentModels.findByIdAndUpdate(req.params.id, {
    studentEnrollment: studentEnrollment,
    studentName: studentName,
    studentClass: studentClass,
    studentBoard: studentBoard,
    studentCourse: studentCourse,
    studentSubjects: studentSubjects,
    studentEmail: studentEmail,
    studentPhone: studentPhone,
    studentAddress: studentAddress,
    studentPaymentType: studentPaymentType,
    studentDob: studentDob,
    studentPhoto: studentPhoto,
    guardianName: guardianName,
    guardianPhone: guardianPhone,
    guardianEmail: guardianEmail,
    guardianAddress: guardianAddress,
  });

  res.status(201).json(student);
});

const updatePayment = asyncHandler(async (req, res) => {
  const student = await paymentModels.find({ paymentId: req.params.id });
  const { paymentMonth, paymentYear } = req.body;
  const {
    paymentId,
    studentCourse,
    studentSubjects,
    paymentDetails,
    paymentType,
    lastIncomeMonth,
    lastIncomeDate,
    lastIncomeMoney,
    totalIncome,
  } = student[0];
  console.log("====================================");
  console.log(paymentDetails);
  console.log("====================================");

  var totalFee = 0;
  var varTotalIncome = totalIncome;
  var lastPaymentMoney = 0;
  const subjects = await subjectModels.find({ subjectCourse: studentCourse });

  subjects.map((item, index) => {
    studentSubjects.map((sub) => {
      if (item.subjectName === sub) totalFee += item.subjectFee;
    });
  });

  const d = new Date();
  var paymentMonthArray = [];
  await paymentMonth.map((item, index) => {
    paymentMonthArray = [
      ...paymentMonthArray,
      {
        paymentMonth: item,
        paymentYear: paymentYear,
        paidMonth: d.getMonth(),
        paidYear: d.getFullYear(),
        paymentMoney: totalFee,
        paymentType: paymentType,
        paymentDate: d,
      },
    ];
  });

  lastPaymentMoney = totalFee * paymentMonth.length;
  varTotalIncome += lastPaymentMoney;
  console.log("====================================");
  console.log(varTotalIncome, lastIncomeMonth);
  console.log("====================================");
  if (lastIncomeMonth === d.getMonth()) lastPaymentMoney += lastIncomeMoney;

  const updatedPayment = await paymentModels.findOneAndUpdate(
    { paymentId: req.params.id },
    {
      // paymentId: paymentId,
      // studentCourse: studentCourse,
      // studentSubjects: studentSubjects,
      // paymentMoney:totalFee,
      lastIncomeMoney: lastPaymentMoney,
      lastIncomeDate: d.toISOString().split("T")[0],
      totalIncome: varTotalIncome,
      lastIncomeMonth: d.getMonth(),
      paymentDetails: paymentDetails.concat(paymentMonthArray),
    }
  );
  res.status(201).json(updatedPayment);
});

const getMonthlyIncome = asyncHandler(async (req, res) => {
  var totalIncome = 0,
    monthlyIncome = 0;
  const d = new Date();

  const payments = await paymentModels.find();
  payments.map((item, index) => {
    if (d.getMonth() === item.lastIncomeMonth)
      monthlyIncome += item.lastIncomeMoney;
    totalIncome += item.totalIncome;
  });

  res.status(200).json({
    monthlyIncome: monthlyIncome,
    totalIncome: totalIncome,
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

module.exports = {
  createStudent,
  getStudent,
  deleteStudent,
  updateStudent,
  updatePayment,
  getStudentPayment,
  getMonthlyIncome,
  getMonthlyIncomeDetails,
  getTotalIncomeDetails
};
