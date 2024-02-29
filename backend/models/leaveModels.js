const mongoose = require("mongoose");

const leaveSchema = mongoose.Schema(
  {
    teacherName: {
      type: String,
    },
    leaveDate: {
      type: String,
      required: [true, "Please add the Title"],
    },
    leaveDays: {
      type: Number,
    },
    leavePdf: {
      type: String,
    },
    leaveStatus: { type :String},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("leave", leaveSchema);
