import React, { useState } from 'react';
import './Form.css'; // Import your CSS file
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backend from '../../backend';

function SubjectForm() {
  // Define state variables for form inputs
  const [subjectCourse, setSubjectCourse] = useState('CBSE Board All Subjects');
  const [subjectName, setSubjectName] = useState('');
  const [subjectTeacher, setSubjectTeacher] = useState('');
  const [subjectFee, setSubjectFee] = useState(0);



  // Handle form submission
  const handleSubmit =async (e) => {
    e.preventDefault();
    // setLoading(true)

    try {
      const res = await fetch(`${backend}subject/`, {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            subjectCourse: subjectCourse,
            subjectName : subjectName,
            subjectTeacher : subjectTeacher,
            subjectFee : subjectFee
        }),
      });
      // let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");
            setSubjectCourse('CBSE Board All Subjects')
            setSubjectName('')
            setSubjectTeacher('')
            setSubjectFee(0)

            toast.success('Form submitted', {
              position: toast.POSITION.TOP_CENTER
          });
      } else {
        toast.error('All field fill required', {
          position: toast.POSITION.TOP_CENTER
      });
        console.log("Some error occured");
      }
    } catch (err) {
      toast.error('All field fill required', {
        position: toast.POSITION.TOP_CENTER
    });
      console.log(err);
    }
    
  // setLoading(false)

  };
  

  return (
    <>
  <ToastContainer/>

      <div className="form-container" style={{marginTop:60 , marginBottom:50}}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Course Name:</label>
          <select style={{width:"100%" , height:40}} type="text" value={subjectCourse} onChange={(e) => setSubjectCourse(e.target.value)} >
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
        </div>

        <div className="form-group">
          <label>Subject Name :</label>
          <input type="text" value={subjectName} onChange={(e) => setSubjectName(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Teacher Name :</label>
          <input type="text" value={subjectTeacher} onChange={(e) => setSubjectTeacher(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Fee :</label>
          <input type="number" value={subjectFee} onChange={(e) => setSubjectFee(e.target.value)} 
            style={{width:"100%"}}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
}

export default SubjectForm;
