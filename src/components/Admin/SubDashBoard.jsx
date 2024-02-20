import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import backend from "../../backend";
import "./SubdashBoard.css"
const SubDashBoard = (props) => {
  const [studentCourse, setStudentCourse] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [studentEnrollment, setStudentEnrollment] = useState("");
  const [details, setDetails] = useState([]);

  const { id } = useParams();

  const data = [
    "class 6",
    "class 7",
    "class 8",
    "class 9",
    "class 10",
    "class 11 science",
    "class 12 science",
    "class 11 commerce",
    "class 12 commerce",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backend}student/${props.apiRoute}/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentEnrollment: studentEnrollment,
          studentClass: studentClass,
          studentCourse: studentCourse,
          studentOffice:
            id === "office1"
              ? "office 1"
              : id === "office2"
              ? "office 2"
              : id === "office3"
              ? "office 3"
              : id === "superadmin"
              ? props.office === "all"
                ? ""
                : props.office
              : "none",
        }),
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setDetails(resJson);
        alert("Form Submitted");
        // setIncome(resJson);
        console.log("====================================");
        console.log(resJson);
        console.log("====================================");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(studentClass, studentCourse, studentEnrollment);
  }, [studentClass, studentCourse, studentEnrollment]);

  const printableContentRef = useRef(null);

  const printContent = () => {
    
    const printableContent = printableContentRef.current.innerHTML;
    console.log(printableContentRef.current);
    const printWindow = window.open('', '_blank', 'width=800,height=700');
    
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write(printableContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    
    printWindow.print();
  };



  return (
    <>
      <h1 >{props.headingDash}</h1>
      <div class="search-box">
        <input
          type="text"
          placeholder="Search..."
          style={{ width: "60%" }}
          value={studentEnrollment}
          onChange={(e) => {
            setStudentEnrollment(e.target.value);
          }}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </div>
      <div style={{ marginTop: 10 }}>
        <select
          className="student__field"
          required
          style={{ height: 40 }}
          value={studentCourse}
          onChange={(e) => {
            setStudentCourse(e.target.value);
          }}
        >
          <option value="">Select Course</option>

          <option value={"IIT / NEET"}>IIT / NEET</option>
          {/* <option>Schooling Solution</option> */}
          <option value={"Extra Curricular"}>Extra Curricular</option>
        </select>
      </div>

      <div style={{ marginTop: 10 }}>
        <select
          className="student__field"
          required
          style={{ height: 40 }}
          value={studentClass}
          onChange={(e) => {
            setStudentClass(e.target.value);
          }}
        >
          <option value="">Select Class</option>
          {data.map((item, index) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>

      <div style={{ marginTop: 40 }} ref={printableContentRef}>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid #000",
          }}
        >
          <thead>
            {props.apiRoute === "monthlydue" ||
            props.apiRoute === "totaldue" ? (
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Enrollment No.
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Name
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Monthly Fee
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Monthly Due
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Total Paid
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Send Message
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  {" "}
                  <button
                  className="button"
                    onClick={
                      printContent}
                  >
                    Export
                  </button>
                </th>
              </tr>
            ) : (
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Enrollment No.
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Name
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Monthly Fee
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Total Paid
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  {" "}
                  <button
                                    className="button"

                    onClick={
                      printContent}
                  >
                    Export
                  </button>
                </th>
              </tr>
            )}
          </thead>
          <tbody>
            {props.apiRoute === "monthlydue" || props.apiRoute === "totaldue"
              ? details?.map((item) => (
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
                      {item.monthlyFee}
                    </td>
                    <td style={{ border: "1px solid black", padding: 5 }}>
                      {item.monthlyDue}
                    </td>
                    <td style={{ border: "1px solid black", padding: 5 }}>
                      {item.totalPaid}
                    </td>
                    <td style={{ border: "1px solid black", padding: 5 }}>
                      <button>Send</button>
                    </td>
                  </tr>
                ))
              : details?.map((item) => (
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
                      {item.monthlyFee}
                    </td>
                    <td style={{ border: "1px solid black", padding: 5 }}>
                      {item.totalIncome}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default SubDashBoard;
