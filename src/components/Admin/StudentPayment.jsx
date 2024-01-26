import React, { useState } from "react";
import PayDetailsTab from "./PayDetailsTab";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import "./StudentPayment.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backend from "../../backend";

const StudentPayment = () => {
  const [courseForPay, setCourseForPay] = useState("");
  const [studentEnrollment, setStudentEnrollment] = useState("");
  const [payDetails, setPayDetails] = useState();
  const [studentPayList, setStudentPayList] = useState([]);

  const handlePayDetails = async (e) => {
    e.preventDefault();
    setPayDetails("addPayDetails");
    try {
      const res = await fetch(`${backend}super/student/getstudent`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          course: courseForPay,
          studentEnrollment : studentEnrollment
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");
        setStudentPayList(resJson);
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
      <div className="PayBox" style={{ marginTop: 40, margin: 20 }}>
        <h1 id="heading" style={{ marginBottom: "15px" }}>
          Student Payment
        </h1>
        <div style={{ border: "2px solid rgb(30, 144, 255)", padding: 20 }}>
          <h2 style={{ textTransform: "capitalize" }}>Select Course</h2>
          <form onSubmit={handlePayDetails}>
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
                  value={courseForPay}
                  label="Select Your Course"
                  onChange={(e) => setCourseForPay(e.target.value)}
                  style={{ color: "white" }}
                >
                  <MenuItem value="IIT-JEE/NEET">IIT-JEE/NEET</MenuItem>
                  <MenuItem value="Schooling Solution">Schooling Solution</MenuItem>
                  <MenuItem value="Extra Curricular">
                    Extra Curricular
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <label >Student Enrollment : </label>
            <input type="text" value={studentEnrollment} onChange={(e)=>setStudentEnrollment(e.target.value)} />
            <button style={{ marginTop: 15 }}>Submit</button>
          </form>
        </div>
        {payDetails === "addPayDetails" ? (
          <PayDetailsTab
            studentPayList={studentPayList}
            setStudentPayList={setStudentPayList}
          />
        ) : null}
      </div>
    </>
  );
};

export default StudentPayment;
