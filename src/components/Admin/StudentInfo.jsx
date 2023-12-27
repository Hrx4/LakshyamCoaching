import React, { useState } from "react";
import backend from "../../backend";
import { Box, CircularProgress, Modal } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SubCheckbox from "./SubCheckbox";
import { ToastContainer } from "react-toastify";

const StudentInfo = ({ studentList, setStudentList }) => {
  const [studentEnrollment, setStudentEnrollment] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [studentBoard, setStudentBoard] = useState("");
  const [studentCourse, setStudentCourse] = useState("");
  const [studentSubjects, setStudentSubjects] = useState([]);
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [studentPaymentType, setStudentPaymentType] = useState("");
  const [studentDob, setStudentDob] = useState("");
  const [studentPhoto, setStudentPhoto] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");
  const [guardianEmail, setGuardianEmail] = useState("");
  const [guardianAddress, setGuardianAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [updateId, setUpdateId] = useState("");

  const handleDelete = async (id) => {
    const key = JSON.parse(id);
    console.log("====================================");
    console.log(key, id);
    console.log("====================================");

    try {
      const response = await fetch(`${backend}super/student/${key}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      await response.json();
      console.log("====================================");
      console.log(response);
      console.log("====================================");

      setStudentList([...studentList.filter((item) => item._id !== id)]);
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  const uploadFiles = async (e) => {
    const { files } = e.target;
    setLoading(true);
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "solardealership");
    data.append("cloud_name", "dkm3nxmk5");
    await fetch("https://api.cloudinary.com/v1_1/dkm3nxmk5/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (files[0].type === "image/jpeg" || files[0].type === "image/png")
          setStudentPhoto(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  const handleCustomerClose = () => setModal(false);

  const CustomerModalOpen = (
    id,
    studentEnrollment,
    studentName,
    studentClass,
    studentBoard,
    studentCourse,
    studentSubjects,
    studentEmail,
    studentPhone,
    studentAddress,
    studentPaymentType,
    studentDob,
    studentPhoto,
    guardianName,
    guardianPhone,
    guardianEmail,
    guardianAddress
  ) => {
    const key = id;
    setUpdateId(key);
    setStudentEnrollment(studentEnrollment);
    setStudentName(studentName);
    setStudentClass(studentClass);
    setStudentBoard(studentBoard);
    setStudentCourse(studentCourse);
    setStudentSubjects(studentSubjects);
    setStudentEmail(studentEmail);
    setStudentPhone(studentPhone);
    setStudentAddress(studentAddress);
    setStudentPaymentType(studentPaymentType);
    setStudentDob(studentDob);
    setStudentPhoto(studentPhoto);
    setGuardianName(guardianName);
    setGuardianPhone(guardianPhone);
    setGuardianEmail(guardianEmail);
    setGuardianAddress(guardianAddress);
    console.log("====================================");
    console.log(studentSubjects);
    console.log("====================================");
    setModal(true);
  };

  const updateList = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backend}super/student/${updateId}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentEnrollment: studentEnrollment,
          studentName: studentName,
          studentClass: studentClass,
          studentBoard: studentBoard,
          studentCourse: studentCourse,
          studentSubjects: studentSubjects,
          studentEmail: studentEmail,
          studentPhone: studentPhone,
          studentAddress: studentAddress,
          studentPaymentType: studentPaymentType,
          studentDob: studentDob,
          studentPhoto: studentPhoto,
          guardianName: guardianName,
          guardianPhone: guardianPhone,
          guardianEmail: guardianEmail,
          guardianAddress: guardianAddress,
        }),
      });

      const resJson = await response.json();
      console.log(resJson);
      if (response.status === 201) {
        console.log("fine");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  return (
    <>
      {loading ? (
        <div className="loader" style={{ color: "black" }}>
          Please Wait Your File is Uploading......
          <CircularProgress />
        </div>
      ) : null}
      <ToastContainer />

      <div style={{ marginTop: 150 }}>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid #000",
          }}
        >
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Id</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #000", padding: "8px" }}>Action</th>
          </tr>
          {studentList.map((item, index) => (
            <tr
              style={{ border: "1px solid black", padding: 5 }}
              key={item._id}
            >
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {index + 1}
              </td>
              <td
                style={{
                  cursor: "pointer",
                  border: "1px solid #000",
                  padding: "8px",
                }}
              >
                {item.studentName}
              </td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                <button
                  onClick={() =>
                    CustomerModalOpen(
                      item._id,
                      item.studentEnrollment,
                      item.studentName,
                      item.studentClass,
                      item.studentBoard,
                      item.studentCourse,
                      item.studentSubjects,
                      item.studentEmail,
                      item.studentPhone,
                      item.studentAddress,
                      item.studentPaymentType,
                      item.studentDob,
                      item.studentPhoto,
                      item.guardianName,
                      item.guardianPhone,
                      item.guardianEmail,
                      item.guardianAddress
                    )
                  }
                >
                  Edit
                </button>
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={() => handleDelete(JSON.stringify(item._id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>

      <Modal
        open={modal}
        onClose={handleCustomerClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "80%", md: 500 },
            height: "70vh",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            overflowY: "scroll",
          }}
        >
          <div style={{ width: "auto", padding: 0 }} className="form-container">
            <form onSubmit={updateList}>
              <div className="form-part" style={{ width: "100%" }}>
                <h2 className="studentHeading">Student Details</h2>
                <div style={{ marginLeft: 40 }}>
                  <label style={{ marginRight: 10, marginTop: 10 }}>
                    Student Enrollment No.
                  </label>
                  <br />
                  <input
                    type="text"
                    className="student__field"
                    value={studentEnrollment}
                    onChange={(e) => setStudentEnrollment(e.target.value)}
                    required
                  />
                </div>
                <div style={{ marginLeft: 40 }}>
                  <label style={{ marginRight: 10, marginTop: 10 }}>
                    Student Name
                  </label>
                  <br />
                  <input
                    type="text"
                    className="student__field"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    required
                  />
                </div>
                <div style={{ marginLeft: 40 }}>
                  <label style={{ marginRight: 10, marginTop: 10 }}>
                    Class
                  </label>
                  <br />
                  <select
                    className="student__field"
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                    required
                  >
                    <option>IV</option>
                    <option>V</option>
                    <option>VI</option>
                    <option>VII</option>
                    <option>VIII</option>
                    <option>IX</option>
                    <option>X</option>
                    <option>XI</option>
                    <option>XII</option>
                  </select>
                </div>

                <div style={{ marginLeft: 40 }}>
                  <label style={{ marginRight: 10, marginTop: 10 }}>
                    Board
                  </label>
                  <br />
                  <select
                    className="student__field"
                    value={studentBoard}
                    onChange={(e) => setStudentBoard(e.target.value)}
                    required
                  >
                    <option>ICSE</option>
                    <option>CBSE</option>
                    <option>WBBSE</option>
                    <option>WBCHSE</option>
                  </select>
                </div>

                <div style={{ marginLeft: 40 }}>
                  <label style={{ marginRight: 10, marginTop: 10 }}>
                    Course Name
                  </label>
                  <br />

                  <Box sx={{ minWidth: 120 }}>
                    <FormControl
                      style={{ width: "60%", backgroundColor: "white" }}
                      className="student__field"
                    >
                      <InputLabel style={{ color: "black" }}>
                        Select Your Course
                      </InputLabel>
                      <Select
                        // value={courseForPay}
                        label=""
                        // onChange={(e) => setCourseForPay(e.target.value)}
                        style={{ color: "black" }}
                        value={studentCourse}
                        onChange={(e) => {
                          setStudentCourse(e.target.value);
                          setStudentSubjects(studentSubjects);
                          console.log(e.target.value);
                          console.log(studentSubjects);
                        }}
                      >
                        <MenuItem value="CBSE Board All Subjects">
                          {" "}
                          CBSE Board All Subjects
                        </MenuItem>
                        <MenuItem value="ICSE Board All Subjects">
                          ICSE Board All Subjects
                        </MenuItem>
                        <MenuItem value="Class 11 CBSE Boards + CUET">
                          Class 11 CBSE Boards + CUET
                        </MenuItem>
                        <MenuItem value="Class 11 ICSE Boards + CUET">
                          Class 11 ICSE Boards + CUET
                        </MenuItem>
                        <MenuItem value="Class 12 CBSE Boards + CUET">
                          Class 12 CBSE Boards + CUET
                        </MenuItem>
                        <MenuItem value="Class 12 ICSE Boards + CUET">
                          Class 12 ICSE Boards + CUET
                        </MenuItem>
                        <MenuItem value="JEE Mains ">JEE Mains </MenuItem>
                        <MenuItem value="NEET ">NEET </MenuItem>
                        <MenuItem value="Foundation Course JEE IIT / NEET">
                          Foundation Course JEE IIT / NEET
                        </MenuItem>
                        <MenuItem value="Commerce Board + CUET">
                          Commerce Board + CUET
                        </MenuItem>
                        <MenuItem value="CA Foundation">CA Foundation</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>

                {studentCourse ? (
                  <>
                    <div style={{ marginLeft: 40 }}>
                      <label style={{ marginRight: 10, marginTop: 10 }}>
                        Choose Subject
                      </label>
                      <br />
                    </div>
                    <SubCheckbox
                      studentSubjects={studentSubjects}
                      setStudentSubjects={setStudentSubjects}
                    />
                  </>
                ) : null}

                <div style={{ marginLeft: 40 }}>
                  <label style={{ marginRight: 10, marginTop: 10 }}>
                    Email
                  </label>
                  <br />
                  <input
                    type="text"
                    className="student__field"
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                  />
                </div>
                <div style={{ marginLeft: 40 }}>
                  <label style={{ marginRight: 10, marginTop: 10 }}>
                    Phone no.
                  </label>
                  <br />
                  <input
                    type="text"
                    className="student__field"
                    value={studentPhone}
                    onChange={(e) => setStudentPhone(e.target.value)}
                    required
                  />
                </div>
                <div style={{ marginLeft: 40 }}>
                  <label style={{ marginRight: 10, marginTop: 10 }}>
                    Address
                  </label>
                  <br />
                  <input
                    type="text"
                    className="student__field"
                    value={studentAddress}
                    onChange={(e) => setStudentAddress(e.target.value)}
                    required
                  />
                </div>
                <div style={{ marginLeft: 40 }}>
                  <label style={{ marginRight: 10, marginTop: 10 }}>
                    Payment Type
                  </label>
                  <br />
                  <select
                    className="student__field"
                    value={studentPaymentType}
                    onChange={(e) => setStudentPaymentType(e.target.value)}
                    required
                  >
                    <option>Monthly Payment</option>
                    <option>Quarterly Payment</option>
                    <option>Yearly Payment</option>
                  </select>
                </div>
                <div style={{ marginLeft: 40 }}>
                  <label style={{ marginRight: 10, marginTop: 10 }}>
                    Date Of Birth
                  </label>
                  <br />
                  <input
                    type="text"
                    className="student__field"
                    value={studentDob}
                    onChange={(e) => setStudentDob(e.target.value)}
                    required
                  />
                </div>
                <div style={{ marginLeft: 40 }}>
                  <label for="photo" style={{ marginRight: 10, marginTop: 10 }}>
                    Upload a Photo
                  </label>
                  <br />
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    style={{ width: "40%", marginRight: 10 }}
                    onChange={uploadFiles}
                  />
                </div>
              </div>
              <div className="form-part" style={{ width: "100%" }}>
                <h2 className="guardianHeading" style={{ marginLeft: 40 }}>
                  Guardian Details
                </h2>
                <div className="Guardian" style={{ marginLeft: 40 }}>
                  <label style={{ marginRight: "10px", marginTop: 10 }}>
                    Name
                  </label>
                  <br />
                  <input
                    type="text"
                    className="student__field"
                    value={guardianName}
                    onChange={(e) => setGuardianName(e.target.value)}
                    required
                  />
                </div>
                <div className="Guardian" style={{ marginLeft: 40 }}>
                  <label style={{ marginRight: "10px", marginTop: 10 }}>
                    Phone no.
                  </label>
                  <br />
                  <input
                    type="text"
                    className="student__field"
                    value={guardianPhone}
                    onChange={(e) => setGuardianPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="Guardian" style={{ marginLeft: 40 }}>
                  <label style={{ marginRight: "10px", marginTop: 10 }}>
                    Email
                  </label>
                  <br />
                  <input
                    type="text"
                    className="student__field"
                    value={guardianEmail}
                    onChange={(e) => setGuardianEmail(e.target.value)}
                  />
                </div>
                <div className="Guardian" style={{ marginLeft: 40 }}>
                  <label style={{ marginRight: 10, marginTop: 10 }}>
                    Address
                  </label>
                  <br />
                  <input
                    type="text"
                    className="student__field"
                    value={guardianAddress}
                    onChange={(e) => setGuardianAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="Guardian" style={{ marginLeft: 40 }}>
                  <button style={{ marginTop: 15 }}>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};
export default StudentInfo;
