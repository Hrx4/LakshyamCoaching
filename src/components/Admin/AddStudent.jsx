import React, { useState } from "react";
import './AddStudent.css'
import { ToastContainer, toast } from 'react-toastify';
import { CircularProgress } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import backend from '../../backend';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import SubCheckbox from './SubCheckbox';



const AddStudent = () => {

            const [studentEnrollment , setStudentEnrollment] = useState('') 
            const [studentName,setStudentName] = useState('')
            const [studentClass , setStudentClass] = useState('IV')
            const [studentBoard , setStudentBoard ] = useState('ICSE')
            const [studentCourse , setStudentCourse] = useState('')  
            const [studentSubjects , setStudentSubjects ] = useState([])
            const [studentEmail , setStudentEmail] = useState('')  
            const [studentPhone , setStudentPhone] = useState('')
            const [studentAddress , setStudentAddress ] = useState('')
            const [studentPaymentType , setStudentPaymentType] = useState('Monthly Payment') 
            const [studentDob , setStudentDob ] = useState('') 
            const [studentPhoto , setStudentPhoto] = useState('')  
            const [guardianName , setGuardianName] = useState('')
           const [ guardianPhone , setGuardianPhone] = useState('') 
            const [guardianEmail , setGuardianEmail ] = useState('') 
            const [guardianAddress , setGuardianAddress ] = useState('')
            const [loading, setLoading] = useState(false)



            const uploadFiles = async(e ) => {
              const {files} = e.target
              setLoading(true)
              const data = new FormData();
                      data.append("file" , files[0]);
                      data.append("upload_preset" , "solardealership");
                      data.append("cloud_name" , "dkm3nxmk5")
                      await fetch("https://api.cloudinary.com/v1_1/dkm3nxmk5/image/upload" , {
                        method:"post",
                        body:data,
                      }).then((res) => res.json())
                      .then((data)=> {
                          if(files[0].type === "image/jpeg" || files[0].type === "image/png")
                              setStudentPhoto(data.url)
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                      setLoading(false)
            }
          
            // Handle form submission
            const handleSubmit =async (e) => {
              e.preventDefault();
              // setLoading(true)
          const d = new Date();
              // Handle form submission here (e.g., send the data to the server)
              console.log({ 
                studentEnrollment ,
                studentName, studentClass,studentBoard, studentCourse , studentSubjects , studentEmail , studentPhone , studentAddress , 
                studentPaymentType , 
                studentDob , studentPhoto , guardianName , guardianPhone , guardianEmail , guardianAddress 
              });
              try {
                const res = await fetch(`${backend}student/`, {
                  method: "POST",
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    studentEnrollment : studentEnrollment, 
                    studentName:studentName,
                    studentClass : studentClass,
                    studentBoard : studentBoard, 
                    studentCourse : studentCourse , 
                    studentSubjects : studentSubjects, 
                    studentEmail : studentEmail , 
                    studentPhone : studentPhone, 
                    studentAddress : studentAddress , 
                    studentPaymentType : studentPaymentType, 
                    studentDob : studentDob , 
                    studentPhoto : studentPhoto , 
                    guardianName : guardianName,
                    guardianPhone : guardianPhone, 
                    guardianEmail : guardianEmail , 
                    guardianAddress : guardianAddress ,
                    createdMonth: d.getMonth() , 
                    createdYear : d.getFullYear()
                  }),
                });
                // let resJson = await res.json();
                if (res.status === 200) {
                  console.log("fine");
                      
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
      {loading ? <div className="loader" style={{color:"black"}}> 
      Please Wait Your File is Uploading......
      <CircularProgress/>
      </div> : null}
      <ToastContainer/>

    <div className="add-form">
      <form onSubmit={handleSubmit} >
        <div className="form-part">
            <h2 className="studentHeading">Student Details</h2>
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Student Enrollment No.</label><br/>
            <input type="text" className="student__field"  value={studentEnrollment} onChange={(e) => setStudentEnrollment(e.target.value)}  required />
          </div>
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Student Name</label><br/>
            <input type="text" className="student__field" value={studentName} onChange={(e) => setStudentName(e.target.value)}  required/>
          </div>
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Class</label><br/>
            <select className="student__field" value={studentClass} onChange={(e) => setStudentClass(e.target.value)}  required>
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

          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Board</label><br/>
            <select className="student__field"  value={studentBoard} onChange={(e) => setStudentBoard(e.target.value)} required>
              <option>ICSE</option>
              <option>CBSE</option>
              <option>WBBSE</option>
              <option>WBCHSE</option>
            </select>
          </div>

          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Course Name</label><br/>
            
            <Box sx={{ minWidth: 120 }}>
      <FormControl style={{width:'60%', backgroundColor:'white'}} className="student__field">
        <InputLabel  style={{color:'black'}}>Select Your Course</InputLabel>
        <Select
          
          // value={courseForPay}
          label=""
          // onChange={(e) => setCourseForPay(e.target.value)}
          style={{color:'black'}}
          value={studentCourse} onChange={(e) => {
            setStudentCourse(e.target.value) 
            setStudentSubjects([''])
            }
           } 
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
          </div>
          
         {
          (studentCourse)?
          <>
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Choose Subject</label><br/>
          </div>
        <SubCheckbox studentSubjects={studentSubjects}  setStudentSubjects={setStudentSubjects}/>
          </>
        :null
         }
        

          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Email</label><br/>
            <input type="text" className="student__field" value={studentEmail} onChange={(e) => setStudentEmail(e.target.value)}  />
          </div>
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Phone no.</label><br/>
            <input type="text" className="student__field" value={studentPhone} onChange={(e) => setStudentPhone(e.target.value)}  required/>
          </div>
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Address</label><br/>
            <input type="text" className="student__field" value={studentAddress} onChange={(e) => setStudentAddress(e.target.value)}  required/>
          </div>
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Payment Type</label><br/>
            <select className="student__field" value={studentPaymentType} onChange={(e) => setStudentPaymentType(e.target.value)}  required>
                <option>Monthly Payment</option>
                <option>Quarterly Payment</option>
                <option>Yearly Payment</option>
            </select>
          </div>
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Date Of Birth</label><br/>
            <input type="text" className="student__field" value={studentDob} onChange={(e) => setStudentDob(e.target.value)}  required/>
          </div>
          <div style={{marginLeft:40}}>
          <label for="photo" style={{marginRight:10, marginTop:10}}>Upload a Photo</label><br/>
        <input type="file" name="photo" accept="image/*" style={{width:'40%', marginRight:10}} onChange={uploadFiles} required/>
          </div>
        </div>
        <div className="form-part">
            <h2 className="guardianHeading">Guardian Details</h2>
            <div className="Guardian">
                <label style={{marginRight:'10px',marginTop:10}}>Name</label><br/>
                <input type="text" className="student__field" value={guardianName} onChange={(e) => setGuardianName(e.target.value)}  required />
            </div>
            <div className="Guardian">
            <label style={{marginRight:'10px', marginTop:10}}>Phone no.</label><br/>
            <input type="text" className="student__field" value={guardianPhone} onChange={(e) => setGuardianPhone(e.target.value)}  required/>
          </div>
          <div className="Guardian">
            <label style={{marginRight:'10px', marginTop:10}}>Email</label><br/>
            <input type="text" className="student__field" value={guardianEmail} onChange={(e) => setGuardianEmail(e.target.value)}  />
          </div>
          <div className="Guardian">
            <label style={{marginRight:10, marginTop:10}}>Address</label><br/>
            <input type="text" className="student__field" value={guardianAddress} onChange={(e) => setGuardianAddress(e.target.value)}  required/>
          </div>
          <div className="Guardian">
            <button style={{marginTop:15}}>Submit</button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default AddStudent;
