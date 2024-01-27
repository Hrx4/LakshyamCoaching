import React from "react";
const TeacherProfile = () =>{
  const fetchStorage = JSON.parse(localStorage.getItem("lakshyamTeacher"));
  let list = [
    ["Email", fetchStorage.teacherEmail],
    ["Name", fetchStorage.teacherName],
    ["Password", fetchStorage.teacherPassword],
    ["Date of Birth", fetchStorage.teacherDob],
    ["Age", fetchStorage.teacherAge],
    ["Gender", fetchStorage.teacherGender],
    ["Education", fetchStorage.teacherEducation],
    ["Address", fetchStorage.teacherAddress],
    ["Salary", fetchStorage.teacherSalary],
    ["Date of Joining", fetchStorage.teacherDoj],
    ["Subject", fetchStorage.teacherSubject],
    ["Class", fetchStorage.teacherClass],
    ["Course", fetchStorage.teacherCourse],
  ];

    return (
        <>
        <div>
          <h1 style={{ marginLeft: 15, display: "flex" }}  className="dHeading">Teacher Profile</h1>
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
                
                <td
                  style={{
                    border: "2px solid white",
                    padding: 10,
                    width: "50%",
                  }}
                >
                  {item[1]}
                </td>
              </tr>
            ))}
              
            </tbody>
          </table>
        </div>
        </>
    )
}


export default TeacherProfile;