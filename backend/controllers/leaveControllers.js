const asyncHandler = require("express-async-handler");
const leaveModels = require("../models/leaveModels");

const createNotice = asyncHandler(async (req, res) => {
  const { teacherName, leaveDate, leaveDays , leavePdf } = req.body;

  const notice = await leaveModels.create({
    teacherName, leaveDate, leaveDays : parseInt(leaveDays) , leavePdf , leaveStatus : "Pending"
  });
  res.status(200).json(notice);
});

const getNotice = asyncHandler(async (req, res) => {
  let notices = await leaveModels.find();
  notices = notices.reverse();
  res.status(200).json(notices);
});

const deleteNotice = asyncHandler(async (req, res) => {
  const notice = await leaveModels.findById(req.params.id);
  console.log(req.params.id);
  if (!notice) {
    res.status(404);
    throw new Error("notice not found");
  }

  await leaveModels.deleteOne({ _id: req.params.id });
  res.status(200).json(notice);
});

const getTeacherNotice = asyncHandler(async(req , res) => {
    const nameTeacher = req.params.id
    console.log(nameTeacher);
    let notices = await leaveModels.find({teacherName : nameTeacher })
    notices = notices.reverse();
    res.status(200).json(notices);
})

const updateNotice = asyncHandler(async (req, res) => {
  const { leaveStatus} = req.body;
  const notice = await leaveModels.findById(req.params.id);
  if (!notice) {
    res.status(404);
    throw new Error("notice not found");
  }

  const updatedNotice = await leaveModels.findByIdAndUpdate(req.params.id, {
    leaveStatus : leaveStatus
  });

  res.status(201).json(notice);
});

module.exports = { createNotice, deleteNotice, updateNotice, getNotice, getTeacherNotice };
