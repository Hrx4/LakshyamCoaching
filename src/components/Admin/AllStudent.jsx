import React, {useState} from "react";
import './AllStudent.css'
import StudentInfo from "./StudentInfo";

const AllStudent = () =>{
    const [course, setCourse] = useState('CBSE Board All Subjects');
    const [studentTab, setStudentTab] = useState();
    const handleAllStudentTable = (e) =>{
      e.preventDefault();
      setStudentTab('studentInfo');
    }
    return(
        <div style={{marginTop:40, margin:20}}>
        <h1 id="heading">All Student</h1>
        <div style={{border:'2px solid rgb(30, 144, 255)', padding:20}}>
        <h2 style={{textTransform:'capitalize'}}>Select Course</h2>
        <form onSubmit={handleAllStudentTable}>
        <label>Course Name:</label>
          <select style={{width:"100%" , height:40}} type="text" value={course} onChange={(e) => setCourse(e.target.value)} >
                <option value="CBSE Board All Subjects">
                CBSE Board All Subjects
                </option>
                <option value="ICSE Board All Subjects">
                ICSE Board All Subjects
                </option>
                <option value="Class 11 CBSE Boards + CUET">
                Class 11 CBSE Boards + CUET
                </option>
                <option value="Class 11 ICSE Boards + CUET">
                Class 11 ICSE Boards + CUET
                </option>
                <option value="Class 12 CBSE Boards + CUET">
                Class 12 CBSE Boards + CUET
                </option>
                <option value="Class 12 ICSE Boards + CUET">
                Class 12 ICSE Boards + CUET
                </option>
                <option value="JEE Mains ">JEE Mains </option>
                <option value="NEET ">NEET </option>
                <option value="Foundation Course JEE IIT / NEET">
                Foundation Course JEE IIT / NEET
                </option>
                <option value="Commerce Board + CUET">Commerce Board + CUET</option>
                <option value="CA Foundation">CA Foundation</option>
          </select>
        <button style={{marginTop:15}}>Submit</button>
        </form>
        </div>
        {
        (studentTab==='studentInfo')?
        <StudentInfo/>:
        null
      }
        </div>
    )
}

export default AllStudent;