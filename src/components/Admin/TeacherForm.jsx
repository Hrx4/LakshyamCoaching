import React, { useState } from "react";
import backend from "../../backend";

const TeacherForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [education, setEducation] = useState("");
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState(0);
  const [doj, setDoj] = useState("");
  const [dob, setDob] = useState("");
  const [classValue, setClassValue] = useState("");
  const [subjectValue, setSubjectValue] = useState("");
  const [courseValue, setCourseValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backend}teacher/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teacherName: name,
          teacherDob : dob,
          teacherAge: age,
          teacherGender: gender,
          teacherEducation: education,
          teacherEmail: email,
          teacherPassword: password,
          teacherAddress: address,
          teacherSalary: parseInt(salary),
          teacherDoj: doj,
          teacherSubject: subjectValue,
          teacherClass: classValue,
          teacherCourse: courseValue,
        }),
      });

      const resJson = await response.json();

      if (response.status === 200) {
        console.log("fine");
        alert("Teacher added");
      setName("")
      setDob("")
      setAge("")
      setGender("")
      setEducation("")
      setEmail("")
      setPassword("")
      setAddress("")
      setSalary(0)
      setDoj("")
      setSubjectValue("")
      setClassValue("")
      setCourseValue("")
      console.log(resJson);
      } else {
        alert("Some error occured");
      }
      
    } catch (err) {
      alert(err);
    }
  };
  return (
    <>
      <div
        style={{
          marginTop: 60,
          marginBottom: 50,
          display: "flex",
          margin: "auto",
          padding: 50,
          width: 500,
        }}
      >
        <form onSubmit={handleSubmit}>
          <h1>Teacher Details:</h1>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>{" "}
          <div className="form-group">
            <label>Password:</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Education:</label>
            <input
              type="text"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Base Salary:</label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Date Of Joining:</label>
            <input
              type="date"
              value={doj}
              onChange={(e) => setDoj(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Date Of Birth:</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Subject :</label>
            <input
              type="text"
              value={subjectValue}
              onChange={(e) => setSubjectValue(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Class :</label>
            <input
              type="text"
              value={classValue}
              onChange={(e) => setClassValue(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Course:</label>
            <input
              type="text"
              value={courseValue}
              onChange={(e) => setCourseValue(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default TeacherForm;
