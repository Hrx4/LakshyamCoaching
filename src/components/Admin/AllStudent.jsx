import React, {useState} from "react";
import './AllStudent.css'
import StudentInfo from "./StudentInfo";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backend from '../../backend';

const AllStudent = () =>{
    const [course, setCourse] = useState();
    const [studentTab, setStudentTab] = useState();
    const [studentList , setStudentList] = useState([]);
    const handleAllStudentTable = async(e) =>{
      e.preventDefault();
      setStudentTab('studentInfo');
      try {
        const res = await fetch(`${backend}student/getstudent`, {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            
            studentCourse : course , 
            
          }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
          console.log("fine");
              setStudentList(resJson)
              toast.success('Form submitted', {
                position: toast.POSITION.TOP_CENTER
            });
        } 

      } catch (err) {
        toast.error('Error Occured', {
          position: toast.POSITION.TOP_CENTER
      });
        console.log(err);
      }
    }
    return(
    
        <>
        <ToastContainer/>
          <div className="BoxStyle" style={{marginTop:40, margin:20}}>
        <h1 id="heading">All Student</h1>
        <div style={{border:'2px solid rgb(30, 144, 255)', padding:20}}>
        <h2 style={{textTransform:'capitalize'}}>Select Course</h2>
        <form onSubmit={handleAllStudentTable}>
        <label>Course Name:</label>
          
           <Box >
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" style={{color:'white'}}>Select Your Course</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         value={course}
          label="Select Your Course"
          onChange={(e) => setCourse(e.target.value)}
          style={{color:'white'}}
        >
          <MenuItem  value="CBSE Board All Subjects"> CBSE Board All Subjects</MenuItem>
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
                <MenuItem value="Commerce Board + CUET">Commerce Board + CUET</MenuItem>
                <MenuItem value="CA Foundation">CA Foundation</MenuItem>
        </Select>
      </FormControl>
    </Box>

        <button style={{marginTop:15}}>Submit</button>
        </form>
        </div>
        {
        (studentTab==='studentInfo')?
        <StudentInfo studentList={studentList} setStudentList={setStudentList}/>:
        null
      }
        </div>
        </>
        
        
    )
}

export default AllStudent;