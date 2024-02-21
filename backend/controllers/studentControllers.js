const asyncHandler = require("express-async-handler");
const studentModels = require("../models/studentModels");
const paymentModels = require("../models/paymentModels");
const teacherModels = require("../models/teacherModels");

const createStudent = asyncHandler(async (req, res) => {
  const {
    studentEnrollment,
    studentOffice,
    studentPassword,
    studentPhoto,
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
    monthlyIncome,
  } = req.body;

  // const date = new Date();
  // const month = date.getMonth();
  // const month = date.getMonth();
  const studentCheck = studentModels.find({studentEnrollment : studentEnrollment})
  if (studentCheck) {
    return res.status(404).json({message : "log"});

  }

  const date = new Date(studentDoj)
  const month = new Date(studentDoj).getMonth()
  const actualDate = date;
  let arr = [];
  let admissionArr = [];
  if (iitNeetAdmission === "YES") {
    admissionArr.push({
      year: date.getFullYear(),
      paymentMonth: month,
      paidMonth: month,
      paymentFee: 1500,
      paidDate: actualDate,
    });
  }
  if (schoolingAdmission === "YES") {
    admissionArr.push({
      year: date.getFullYear(),
      paymentMonth: month,
      paidMonth: month,
      paymentFee: 1500,
      paidDate: actualDate,
    });
  }
  if (extraAdmission === "YES") {
    admissionArr.push({
      year: date.getFullYear(),
      paymentMonth: month,
      paidMonth: month,
      paymentFee: 600,
      paidDate: actualDate,
    });
  }
  if (month >= 0 && month <= 2) {
    arr.push({
      year: date.getFullYear(),
      paymentMonth: month,
      paidMonth: null,
      paymentFee: parseInt(monthlyIncome),
      paidDate: null,
    });
  } else {
    for (let index = month; index <= 11; index++) {
      // const element = array[index];
      arr.push({
        year: date.getFullYear(),
        paymentMonth: index,
        paidMonth: null,
        paymentFee: parseInt(monthlyIncome),
        paidDate: null,
      });
    }
  }
  const bdayMonth = new Date(studentDob).getMonth()
  const bdayDate = new Date(studentDob).getDate()

  const student = await studentModels.create({
    studentEnrollment,
    studentOffice,
    studentPassword,
    studentPhoto,
    studentName,
    bdayMonth : bdayMonth, 
    bdayDate  : bdayDate,
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
    monthlyIncome,
    paymentDetails: arr,
    admissionPaymentDetails: admissionArr,
  });

  res.status(200).json(student);
});

const getStudent = asyncHandler(async (req, res) => {
  const { course, studentEnrollment, studentOffice } = req.body;
  let students;
  if (studentEnrollment !== "") {
    if (studentOffice !== "")
      students = await studentModels.find({
        studentEnrollment: studentEnrollment,
        studentOffice: studentOffice,
      });
    else
      students = await studentModels.find({
        studentEnrollment: studentEnrollment,
      });
  } else if (studentOffice !== "") {
    students = await studentModels.find({ studentOffice: studentOffice });
  } else {
    students = await studentModels.find();
  }
  if (course === "IIT-JEE/NEET") {
    students = students.filter((item) => item.iitNeetFee !== 0);
  } else if (course === "Schooling Solution") {
    students = students.filter((item) => item.schoolingFee !== 0);
  } else if (course === "Extra Curricular") {
    students = students.filter((item) => item.extraFee !== 0);
  }
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
    studentOffice,
    studentPassword,
    studentPhoto,
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
    monthlyIncome,
  } = req.body;

  const student = await studentModels.findById(req.params.id);
  if (!student) {
    res.status(404);
    throw new Error("student not found");
  }

  const updatedStudent = await studentModels.findByIdAndUpdate(req.params.id, {
    studentEnrollment: studentEnrollment,
    studentOffice: studentOffice,
    studentPassword: studentPassword,
    studentPhoto: studentPhoto,
    studentName: studentName,
    studentDob: studentDob,
    studentGender: studentGender,
    fatherName: fatherName,
    fatherOccupassion: fatherOccupassion,
    fatherNo: fatherNo,
    motherName: motherName,
    parentWp: parentWp,
    emergencyNo: emergencyNo,
    studentAddress: studentAddress,
    studentDoj: studentDoj,
    studentBlood: studentBlood,
    schoolName: schoolName,
    lastClass: lastClass,
    lastExam: lastExam,
    iitNeetCourse: iitNeetCourse,
    schoolingCourse: schoolingCourse,
    schoolingClass: schoolingClass,
    iitNeetAdmission: iitNeetAdmission,
    schoolingAdmission: schoolingAdmission,
    extraAdmission: extraAdmission,
    iitNeetFee: iitNeetFee,
    schoolingFee: schoolingFee,
    extraFee: extraFee,
    iitNeetSub: iitNeetSub,
    schoolingSub: schoolingSub,
    extraSub: extraSub,
    monthlyIncome: monthlyIncome,
  });

  res.status(201).json(updatedStudent);
});

const updatePayment = asyncHandler(async (req, res) => {
  const student = await studentModels.findById(req.params.id);
  const { monthList } = req.body;
  const date = new Date();
  const month = date.getMonth();
  const actualDate = date.toISOString().split("T")[0];
  if (!student) {
    res.status(404);
    throw new Error("student not found");
  }
  let arr = student.paymentDetails;
  monthList.map((item, index) => {
    let temp = arr[item];
    temp = { ...temp, paidMonth: month, paidDate: actualDate };
    arr[item] = temp;
  });

  const updatedPayment = await studentModels.findOneAndUpdate(
    { _id: req.params.id },
    {
      paymentDetails: arr,
    }
  );
  res.status(201).json(updatedPayment);
});

const getMonthlyIncome = asyncHandler(async (req, res) => {
  let totalIncome = 0,
    monthlyIncome = 0,
    monthlyDue = 0,
    totalDue = 0;
    const {studentOffice} = req.body
  const d = new Date();
  const month = d.getMonth();

  let students;

  
    if (studentOffice !== "")
      students = await studentModels.find({
        studentOffice: studentOffice,
      });
    else
      students = await studentModels.find();

  students.map((student, index) => {
    student.paymentDetails.map((item, index) => {
      if (month === item.paidMonth) {
        monthlyIncome += item.paymentFee;
      }
      if (month === item.paymentMonth) {
        if (item.paidMonth === null) monthlyDue += item.paymentFee;
      }
      if (month >= item.paymentMonth) {
        if (item.paidMonth === null) totalDue += item.paymentFee;
      }
      if (item.paidMonth !== null) totalIncome += item.paymentFee;
    });
    student.admissionPaymentDetails.map((item, index) => {
      if (month === item.paidMonth) {
        monthlyIncome += item.paymentFee;
      }
      totalIncome += item.paymentFee;
    });
  });
  const teachers = await teacherModels.find();

  res.status(200).json({
    monthlyIncome: monthlyIncome,
    monthlyDue: monthlyDue,
    totalIncome: totalIncome,
    totalDue: totalDue,
    totalStudent: students.length,
    totalTeacher: teachers.length,
  });
});

const getMonthlyIncomeDetails = asyncHandler(async (req, res) => {
  const { studentCourse, studentClass, studentEnrollment ,studentOffice} =
    req.body;
    const d = new Date();
    const month = d.getMonth();
  
    let students = [];
  let result = [];
    
  //office wise filter
      if (studentOffice !== "")
        students = await studentModels.find({
          studentOffice: studentOffice,
        });
      else
        students = await studentModels.find();

  //studentenrollment wise filter

  if (studentEnrollment !== "") {
    students = students.filter((item) => item.studentEnrollment === studentEnrollment);
  }
  else{
    let courseList =[]
     let classList =[]
    if (studentCourse === "IIT / NEET") {
      courseList = students.filter((item) => item.iitNeetFee !== 0);
    }
    else if(studentCourse === "Extra Curricular"){
      courseList = students.filter((item) => item.extraFee !== 0);
    }
    
    if (studentClass !== "") {
      classList = students.filter((item) => item.schoolingClass === studentClass);
    }
    if(studentClass === "" && studentCourse === "")  courseList=students

    students=courseList
    students = students.concat(classList)

    jsonObject = students.map(JSON.stringify);
    uniqueSet = new Set(jsonObject);
    students = Array.from(uniqueSet).map(JSON.parse);
  }
        students.map((student, index) => {
          let monthlyIncome = 0;

          student.paymentDetails.map((item, index) => {
            if (month === item.paidMonth ) {
              monthlyIncome+=item.paymentFee
          }
          })
          if(monthlyIncome!==0){
            result.push({
              studentEnrollment : student.studentEnrollment,
              studentName : student.studentName,
              totalIncome : monthlyIncome,
              monthlyFee : student.monthlyIncome
            })
          }
        });

  res.status(200).json(result);
});

const getTotalIncomeDetails = asyncHandler(async (req, res) => {
  const { studentCourse, studentClass, studentEnrollment ,studentOffice} =
  req.body;
  
  let students = [];
  let result = [];

  //office wise filter
  if (studentOffice !== "")
  students = await studentModels.find({
    studentOffice: studentOffice,
  });
else
  students = await studentModels.find();

//studentenrollment wise filter

if (studentEnrollment !== "") {
students = students.filter((item) => item.studentEnrollment === studentEnrollment);
}
else{
let courseList =[]
let classList =[]
if (studentCourse === "IIT / NEET") {
courseList = students.filter((item) => item.iitNeetFee !== 0);
}
else if(studentCourse === "Extra Curricular"){
courseList = students.filter((item) => item.extraFee !== 0);
}

if (studentClass !== "") {
classList = students.filter((item) => item.schoolingClass === studentClass);
}
if(studentClass === "" && studentCourse === "") courseList=students 
students=courseList
students = students.concat(classList)

jsonObject = students.map(JSON.stringify);
uniqueSet = new Set(jsonObject);
students = Array.from(uniqueSet).map(JSON.parse);
}


students.map((student, index) => {
  let totalIncome = 0;
  student.paymentDetails.map((item, index) => {
    if (item.paidMonth !==null) {
      totalIncome+=item.paymentFee
  }
  })
  if(totalIncome!==0){
    result.push({
      studentEnrollment : student.studentEnrollment,
      studentName : student.studentName,
      totalIncome : totalIncome,
      monthlyFee : student.monthlyIncome
    })
  }
});

res.status(200).json(result);


});

const getMonthlyDueDetails = asyncHandler(async (req, res) => {
  const { studentCourse, studentClass, studentEnrollment ,studentOffice} =
    req.body;
    const d = new Date();
    const month = d.getMonth();
  
    let students = [];
  let result = [];
    
  //office wise filter
      if (studentOffice !== "")
        students = await studentModels.find({
          studentOffice: studentOffice,
        });
      else
        students = await studentModels.find();

  //studentenrollment wise filter

  if (studentEnrollment !== "") {
    students = students.filter((item) => item.studentEnrollment === studentEnrollment);
  }
  else{
    let courseList =[]
     let classList =[]
    if (studentCourse === "IIT / NEET") {
      courseList = students.filter((item) => item.iitNeetFee !== 0);
    }
    else if(studentCourse === "Extra Curricular"){
      courseList = students.filter((item) => item.extraFee !== 0);
    }
    
    if (studentClass !== "") {
      classList = students.filter((item) => item.schoolingClass === studentClass);
    }
    if(studentClass === "" && studentCourse === "") courseList=students 

    students=courseList
    students = students.concat(classList)
    
    jsonObject = students.map(JSON.stringify);
    uniqueSet = new Set(jsonObject);
    students = Array.from(uniqueSet).map(JSON.parse);
  }

        students.map((student, index) => {
          let monthlyDue = 0;
          let totalPaid = 0
          student.paymentDetails.map((item, index) => {
            if (month === item.paymentMonth && item.paidMonth===null) {
              monthlyDue+=item.paymentFee
          }
          if(item.paidMonth!==null) totalPaid+=item.paymentFee
          })
          if(monthlyDue!==0){
            result.push({
              studentEnrollment : student.studentEnrollment,
              studentName : student.studentName,
              monthlyFee : student.monthlyIncome,
              monthlyDue :monthlyDue,
              totalPaid : totalPaid
            })
          }
        });

  res.status(200).json(result);
});

const getTotalDueDetails = asyncHandler(async (req, res) => {
  const { studentCourse, studentClass, studentEnrollment ,studentOffice} =
    req.body;
    const d = new Date();
    const month = d.getMonth();
  
    let students = [];
  let result = [];
    
  //office wise filter
      if (studentOffice !== "")
        students = await studentModels.find({
          studentOffice: studentOffice,
        });
      else
        students = await studentModels.find();

  //studentenrollment wise filter

  if (studentEnrollment !== "") {
    students = students.filter((item) => item.studentEnrollment === studentEnrollment);
  }
  else{
    let courseList =[]
     let classList =[]
    if (studentCourse === "IIT / NEET") {
      courseList = students.filter((item) => item.iitNeetFee !== 0);
    }
    else if(studentCourse === "Extra Curricular"){
      courseList = students.filter((item) => item.extraFee !== 0);
    }
    
    if (studentClass !== "") {
      classList = students.filter((item) => item.schoolingClass === studentClass);
    }
    if(studentClass === "" && studentCourse === "") courseList=students 

    students=courseList
    students = students.concat(classList)
    
    jsonObject = students.map(JSON.stringify);
    uniqueSet = new Set(jsonObject);
    students = Array.from(uniqueSet).map(JSON.parse);
  }

        students.map((student, index) => {
          let monthlyDue = 0;
          let totalPaid = 0
          student.paymentDetails.map((item, index) => {
            if (month >= item.paymentMonth && item.paidMonth===null) {
              monthlyDue+=item.paymentFee
          }
          if(item.paidMonth!==null) totalPaid+=item.paymentFee
          })
          if(monthlyDue!==0){
            result.push({
              studentEnrollment : student.studentEnrollment,
              studentName : student.studentName,
              monthlyFee : student.monthlyIncome,
              monthlyDue :monthlyDue,
              totalPaid : totalPaid
            })
          }
        });

  res.status(200).json(result);
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
