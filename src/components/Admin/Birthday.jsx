import React, { useEffect, useState } from "react";
import backend from "../../backend";
import { Button } from "@mui/material";

const Birthday = () => {
  const [teacherList, setTeacherList] = useState([])
  const [studentList, setStudentList] = useState([])

  useEffect(() => {
    const list = async () => {
      try {
        const response = await fetch(`${backend}bday/`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        const resJson = await response.json();

        if (response.status === 200) {
          setStudentList(resJson.studentList);
          setTeacherList(resJson.teacherList);
        } else {
          console.log("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };
    list();
  }, []);

  return (
    <>
      <div style={{ width: "95%" }}>
        <h2 style={{ marginLeft: 5 }}>Student Birthday List</h2>
        <div
          className="table-scroll"
          style={{
            width: "100%",
            overflowX: "scroll",
            overflowY: "scroll",
            padding: 10,
            maxHeight: "100vh",
          }}
        >
          <table>
            <tbody>
              {
                <tr>
                  <th style={{ border: "1px solid black", padding: 5 }}>
                    Enrollment No
                  </th>
                  <th style={{ border: "1px solid black", padding: 5 }}>
                    Name
                  </th>
                  
                  <th style={{ border: "1px solid black", padding: 5 }}>
                    Send Wish
                  </th>
                </tr>
              }
             {studentList.map((item) => (
              <tr
                style={{ border: "1px solid black", padding: 5 }}
                key={item._id}
                onClick={() => {
                  console.log(item._id);
                }}
              >
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item.studentEnrollment}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item.studentName}
                </td>
               
                <td style={{ border: "1px solid black", padding: 5 }}>
                  <Button
                    style={{ marginBottom: 5 }}
                    variant="contained"
                    color="success"
                    size="small"
                    // onClick={() => handleDelete(JSON.stringify(item._id))}
                  >
                    Send
                  </Button>
                </td>
              </tr>
            ))} 
            </tbody>
          </table>
        </div>
        <h2 style={{ marginLeft: 5 }}>Student Birthday List</h2>
        <div
          className="table-scroll"
          style={{
            width: "100%",
            overflowX: "scroll",
            overflowY: "scroll",
            padding: 10,
            maxHeight: "100vh",
          }}
        >
          <table>
            <tbody>
              {
                <tr>
                  <th style={{ border: "1px solid black", padding: 5 }}>
                    Name
                  </th>
                  <th style={{ border: "1px solid black", padding: 5 }}>
                    Email
                  </th>
                  
                  <th style={{ border: "1px solid black", padding: 5 }}>
                    Send Wish
                  </th>
                </tr>
              }
              {teacherList.map((item) => (
              <tr
                style={{ border: "1px solid black", padding: 5 }}
                key={item._id}
                onClick={() => {
                  console.log(item._id);
                }}
              >
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item.teacherName}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item.teacherEmail}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  <Button
                    style={{ marginBottom: 5 }}
                    variant="contained"
                    color="success"
                    size="small"
                    // onClick={() => handleDelete(JSON.stringify(item._id))}
                  >
                    Send
                  </Button>
                </td>
              </tr>
            ))} 
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Birthday;
