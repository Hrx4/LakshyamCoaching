import React from "react";
import "./StudentProfile.css";
const StudentProfile = () => {
  const fetchStorage = JSON.parse(localStorage.getItem("lakshyamStudent"));
  let list = [
    ["Enrollment No", fetchStorage.studentEnrollment],
    ["Name", fetchStorage.studentName],
    ["Password", fetchStorage.studentPassword],
    ["Date of Birth", fetchStorage.studentDob],
    ["Gender", fetchStorage.studentGender],
    ["Father Name", fetchStorage.fatherName],
    ["Father Occupation", fetchStorage.fatherOccupassion],
    ["Father Phone No", fetchStorage.fatherNo],
    ["Mother Name", fetchStorage.motherName],
    ["Parent Whatsapp No", fetchStorage.parentWp],
    ["Emergency contact No", fetchStorage.emergencyNo],
    ["Address", fetchStorage.studentAddress],
    ["Date Of Joining", fetchStorage.studentDoj],
    ["Blood Group", fetchStorage.studentBlood],
    ["Name of the school", fetchStorage.schoolName],
    ["Last Class", fetchStorage.lastClass],
    ["Last Exam Percentage", fetchStorage.lastExam],
  ];

  if (fetchStorage.iitNeetFee !== 0) {
    list.push(["iit/Neet Course", fetchStorage.iitNeetCourse]);
    list.push(["iit/Neet Fee", fetchStorage.iitNeetFee]);
    list.push(["iit/Neet Subjects", fetchStorage.iitNeetSub]);
  }
  if (fetchStorage.schoolingFee !== 0) {
    list.push(["schooling Course", fetchStorage.schoolingCourse]);
    list.push(["schooling Class", fetchStorage.schoolingClass]);
    list.push(["schooling Fee", fetchStorage.schoolingFee]);
    list.push(["schooling Subjects", fetchStorage.schoolingSub]);
  }
  if (fetchStorage.extraFee !== 0) {
    list.push(["Extra Curricular Fee", fetchStorage.extraFee]);
    list.push(["Extra Curricular Subjects", fetchStorage.extraSub]);
  }
  list.push(["Photo", fetchStorage.studentPhoto]);

  return (
    <>
      <div>
        <h1 style={{ marginLeft: 15, display: "flex" }} className="dHeading">
          Student Profile
        </h1>
        <table
          className="sdtable"
          style={{
            width: "1000px",
            overflowX: "scroll",
            overflowY: "scroll",
            height: "100vh",
            border: "none",
            marginLeft: "10px",
          }}
        >
          <tbody>
            <h2
              style={{
                padding: "10px",
                height: "65px",
                border: "2px solid white",
                marginTop: "15px",
                width: "200%",
                marginBottom: "-3px",
                backgroundColor: "#1976d2",
              }}
            >
              Basic Details
            </h2>
            {list.map((item, index) => (
              <tr style={{ border: "2px solid white" }}>
                <td
                  style={{
                    // border: "2px solid white",
                    padding: 10,
                    width: "50%",
                    margin: 0,
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "left",
                  }}
                >
                  {item[0]}
                </td>
                {
                  (index === list.length-1) ? 
                  <td
                  style={{
                    border: "2px solid white",
                    padding: 10,
                    width: "50%",
                  }}
                >
                  <div style={{height:200 , width :200 , margin:"auto"}}>
                  <img style={{height:"100%" , width:"100%" }} src={item[1]} alt="" />
                  </div>
                </td>
                :
                <td
                  style={{
                    border: "2px solid white",
                    padding: 10,
                    width: "50%",
                  }}
                >
                  {item[1]}
                </td>
                }
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentProfile;
