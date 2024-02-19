import React, { useState } from "react";
import "./AllStudent.css";
import StudentInfo from "./StudentInfo";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backend from "../../backend";
import { useParams } from "react-router-dom";

const AllStudent = ({ setNoteView, setStudentDetails }) => {
  const [course, setCourse] = useState("");
  const [studentEnrollment, setStudentEnrollment] = useState("");
  const [studentTab, setStudentTab] = useState();
  const [studentList, setStudentList] = useState([]);
  const { id } = useParams();

  const handleAllStudentTable = async (e) => {
    e.preventDefault();
    setStudentTab("studentInfo");
    if (course === "" && studentEnrollment === "")
      return alert("Fill The Fields");
    try {
      const res = await fetch(`${backend}student/getstudent`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentOffice:
            id === "office1"
              ? "office 1"
              : id === "office2"
              ? "office 2"
              : id === "office3"
              ? "office 3"
              : id === "superadmin"
              ? ""
              : "none",
          course: course,
          studentEnrollment: studentEnrollment,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");
        setStudentList(resJson);
        toast.success("Form submitted", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      toast.error("Error Occured", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(err);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="BoxStyle" style={{ marginTop: 40, margin: 20 }}>
        <h1 id="heading">All Student</h1>
        <div style={{ border: "2px solid rgb(30, 144, 255)", padding: 20 }}>
          <h2 style={{ textTransform: "capitalize" }}>Select Course</h2>
          <form onSubmit={handleAllStudentTable}>
            <label>Course Name:</label>

            <Box>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ color: "white" }}
                >
                  Select Your Course
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={course}
                  label="Select Your Course"
                  onChange={(e) => setCourse(e.target.value)}
                  style={{ color: "white" }}
                >
                  <MenuItem value="Select Your Course">
                    Select Your Course
                  </MenuItem>

                  <MenuItem value="IIT-JEE/NEET">IIT-JEE/NEET</MenuItem>
                  <MenuItem value="Schooling Solution">
                    Schooling Solution
                  </MenuItem>
                  <MenuItem value="Extra Curricular">Extra Curricular</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <label>Student Enrollment : </label>
            <input
              type="text"
              value={studentEnrollment}
              onChange={(e) => setStudentEnrollment(e.target.value)}
            />
            <button style={{ marginTop: 15 }}>Submit</button>
          </form>
        </div>
        {studentTab === "studentInfo" ? (
          <StudentInfo
            studentList={studentList}
            setStudentList={setStudentList}
            setNoteView={setNoteView}
            setStudentDetails={setStudentDetails}
          />
        ) : null}
      </div>
    </>
  );
};

export default AllStudent;
