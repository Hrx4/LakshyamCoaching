import React, {useState} from "react";
import "./SubjectDetails.css";
import backend from "../../backend";
import { toast } from "react-toastify";



const SubjectDetails = () => {
    const [courseName, setCourseName] = useState('CBSE Board All Subjects');
    const [subjectName, setSubjectName] = useState();
    const [teacherName, setTeacherName] = useState();
    const [SubjectFee, setSubjectFee] = useState();


    const handleSubmit =async (e) => {
      e.preventDefault();
      
      try {
        const res = await fetch(`${backend}subject/`, {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            subjectCourse:courseName, 
            subjectName : subjectName,
            subjectFee: SubjectFee,
            subjectTeacher:teacherName
          }),
        });
        
        if (res.status === 200) {
          console.log("fine");
              setCourseName('')
              setSubjectName ('') 
              setSubjectFee('')
              setTeacherName('')
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
      
    
  
    };
  return (
    <div className="subjectdetails">
      <form style={{margin:"15px", padding:"15px", border:"2px solid #192655"}} onSubmit={handleSubmit}>
        <div>
          <h1 style={{ fontSize: "30px" }}>SUBJECT DETAILS</h1>
          <label>Course Name</label>
          <br />
          <select type="text" style={{width:"70%"}} required value={courseName} onChange={(e)=>{setCourseName(e.target.value)}} >
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
          <br /><br/>
          <label>Subject name</label><br/>
          <input style={{width:"70%"}} type="text" placeholder="Enter subject name" required value={subjectName} onChange={(e)=>{setSubjectName(e.target.value)}}></input>
          <br /><br/>
          <label>Teacher name</label><br/>
          <input style={{width:"70%"}} type="text" placeholder="Enter teacher name" required value={teacherName} onChange={(e)=>{setTeacherName(e.target.value)}}></input>
          <br /><br/>
          <label>Subject Fee</label><br/>
          <input style={{width:"70%"}} type="text" placeholder="Enter Subject Fee" required value={SubjectFee} onChange={(e)=>{setSubjectFee(e.target.value)}}></input>
          <br/>
          <button style={{ marginTop: "15px" }} type="submit" >
            Submit
          </button>
        </div>
      </form>
      <br />
      <br/>
      <div>
        <table border="1" style={{overflowX:"scroll"}}>
          <h1 style={{ fontSize: "30px", paddingLeft:"15px" }}>All Classrooms</h1>
          <tr>
            <th>Course Name</th>
            <th>Subject name</th>
            <th>Teacher name</th>
            <th>Subject Fee</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1</td>
            <td>CBSE Board All Subjects</td>
            <td>.............</td>
            <td>.............</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>2</td>
            <td>CBSE Board All Subjects</td>
            <td>.............</td>
            <td>.............</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>3</td>
            <td>CBSE Board All Subjects</td>
            <td>.............</td>
            <td>.............</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>4</td>
            <td>CBSE Board All Subjects</td>
            <td>.............</td>
            <td>.............</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>5</td>
            <td>CBSE Board All Subjects</td>
            <td>.............</td>
            <td>.............</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>6</td>
            <td>CBSE Board All Subjects</td>
            <td>.............</td>
            <td>.............</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>7</td>
            <td>CBSE Board All Subjects</td>
            <td>.............</td>
            <td>.............</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
          <tr>
            <td>8</td>
            <td>CBSE Board All Subjects</td>
            <td>.............</td>
            <td>.............</td>
            <td><span><button>Edit</button></span> <span><button style={{backgroundColor:"red"}}>Delete</button></span></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default SubjectDetails;
