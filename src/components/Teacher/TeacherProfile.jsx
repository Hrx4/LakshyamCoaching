import React from "react";
const TeacherProfile = () =>{
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
              <tr style={{ border: "2px solid white" }}>
                <td
                  style={{
                    // border: "2px solid white",
                    padding: 10,
                    width: "50%",
                    margin: 0,
                    fontWeight: "bold",
                    display:"flex",
                    justifyContent:"left"
                  }}
                >
                  Name
                </td>
                <td
                  style={{
                    border: "2px solid white",
                    padding: 10,
                    width: "50%",
                  }}
                >
                </td>
              </tr>
              <tr style={{ border: "2px solid white" }}>
                <td
                  style={{
                    // border: "2px solid white",
                    padding: 10,
                    fontWeight: "bold",
                    display:"flex",
                    justifyContent:"left"
                  }}
                >
                  Email
                </td>
                <td style={{ border: "2px solid white", padding: 10 }}>
                </td>
              </tr>
              <tr style={{ border: "2px solid white", padding: 5 }}>
                <td
                  style={{
                    // border: "2px solid white",
                    padding: 10,
                    fontWeight: "bold",
                    display:"flex",
                    justifyContent:"left"
                  }}
                >
                  Password
                </td>
                <td style={{ border: "2px solid white", padding: 10 }}>
                </td>
              </tr>
              <tr style={{ border: "2px solid white", padding: 5 }}>
                <td
                  style={{
                    // border: "2px solid white",
                    padding: 10,
                    fontWeight: "bold",
                    display:"flex",
                    justifyContent:"left"
                  }}
                >
                  Age
                </td>
                <td style={{ border: "2px solid white", padding: 10 }}>
                </td>
              </tr>
              <tr style={{ border: "2px solid white", padding: 5 }}>
                <td
                  style={{
                    // border: "2px solid white",
                    padding: 10,
                    fontWeight: "bold",
                    display:"flex",
                    justifyContent:"left"
                  }}
                >
                  Gender
                </td>
                <td style={{ border: "2px solid white", padding: 10 }}>
                </td>
              </tr>
              <tr style={{ border: "2px solid white", padding: 5 }}>
                <td
                  style={{
                    // border: "2px solid white",
                    padding: 10,
                    fontWeight: "bold",
                    display:"flex",
                    justifyContent:"left"
                  }}
                >
                  Education
                </td>
                <td style={{ border: "2px solid white", padding: 10 }}>
                </td>
              </tr>
              <tr style={{ border: "2px solid white", padding: 5 }}>
                <td
                  style={{
                    // border: "2px solid white",
                    padding: 10,
                    fontWeight: "bold",
                    display:"flex",
                    justifyContent:"left"
                  }}
                >
                  Address
                </td>
                <td style={{ border: "2px solid white", padding: 10 }}>
                </td>
              </tr>
              <tr style={{ border: "2px solid white", padding: 5 }}>
                <td
                  style={{
                    // border: "2px solid white",
                    padding: 10,
                    fontWeight: "bold",
                    display:"flex",
                    justifyContent:"left"
                  }}
                >
                  Salary
                </td>
                <td style={{ border: "2px solid white", padding: 10 }}>
                </td>
              </tr>
              <tr style={{ border: "2px solid white", padding: 5 }}>
                <td
                  style={{
                    // border: "2px solid white",
                    padding: 10,
                    fontWeight: "bold",
                    display:"flex",
                    justifyContent:"left"
                  }}
                >
                  Date of Job
                </td>
                <td style={{ border: "2px solid white", padding: 10 }}>
                </td>
              </tr>
              <tr style={{ border: "2px solid white", padding: 5 }}>
                <td
                  style={{
                    // border: "2px solid white",
                    padding: 10,
                    fontWeight: "bold",
                    display:"flex",
                    justifyContent:"left"
                  }}
                >
                  Subject
                </td>
                <td style={{ border: "2px solid white", padding: 10 }}>
                </td>
              </tr>
              <tr style={{ border: "2px solid white", padding: 5 }}>
                <td
                  style={{
                    // border: "2px solid white",
                    padding: 10,
                    fontWeight: "bold",
                    display:"flex",
                    justifyContent:"left"
                  }}
                >
                  Class
                </td>
                <td style={{ border: "2px solid white", padding: 10 }}>
                </td>
              </tr>
              <tr style={{ border: "2px solid white", padding: 5 }}>
                <td
                  style={{
                    // border: "2px solid white",
                    padding: 10,
                    fontWeight: "bold",
                    display:"flex",
                    justifyContent:"left"
                  }}
                >
                  Course
                </td>
                <td style={{ border: "2px solid white", padding: 10 }}>
                </td>
              </tr>
              <tr style={{ border: "2px solid white", padding: 5 }}>
                <td
                  style={{
                    // border: "2px solid white",
                    padding: 10,
                    fontWeight: "bold",
                    display:"flex",
                    justifyContent:"left"
                  }}
                >
                  Blood Group
                </td>
                <td style={{ border: "2px solid white", padding: 10 }}>
                </td>
              </tr>
              <tr style={{ border: "2px solid white", padding: 5 }}>
                <td
                  style={{
                    // border: "2px solid white",
                    padding: 10,
                    fontWeight: "bold",
                    display:"flex",
                    justifyContent:"left"
                  }}
                >
                  Catagory
                </td>
                <td style={{ border: "2px solid white", padding: 10 }}>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </>
    )
}


export default TeacherProfile;