import React, {useState} from "react";
import { Box, Button,Modal } from '@mui/material'
import  './Table.css'
import './Form.css'
import backend from "../../backend";
import { toast } from "react-toastify";



const SubjectDetails = (props) => {
    const [courseName, setCourseName] = useState('CBSE Board All Subjects');
    const [subjectName, setSubjectName] = useState();
    const [teacherName, setTeacherName] = useState();
    const [subjectFee, setSubjectFee] = useState();
    const [modal, setModal] = useState(false);
  const [updateId, setUpdateId] = useState("");

    const handleCustomerClose = () => setModal(false);

    const CustomerModalOpen = (id , coursename , subjectname , teachername , subjectfee) => {
        const key = id
        setUpdateId(key);
        setCourseName(coursename)
        setSubjectName(subjectname)
        setTeacherName(teachername)
        setSubjectFee(subjectfee)

        setModal(true)
      };
  
      const handleDelete = async(id) =>{
          const key = JSON.parse(id)
          console.log('====================================');
          console.log(key,id);
          console.log('====================================');
    
          try {
            const response = await fetch(`${backend}subject/${key}`, {
              method: "DELETE",
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            });
    
            await response.json();
            console.log('====================================');
            console.log(response);
            console.log('====================================');
    
            props.setSubjectList( [...props.subjectList.filter(item => item._id !== id)]);
            window.location.reload(true);
          } catch (err) {
            console.log(err);
          }
        }
  
        const updateList = async (e) => {
          e.preventDefault();
          try {
            const response = await fetch(`${backend}subject/${updateId}`, {
              method: "PUT",
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  subjectCourse :courseName, 
                  subjectName : subjectName,
                  subjectTeacher : teacherName,
                  subjectFee : subjectFee
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
          window.location.reload()
        
        }
    
    
    return (
      <>
          <div className='table-scroll' style={{width:"100%", overflowX:"scroll",overflowY:"scroll", padding:10,height:"100vh"}}>
          <table >
        <tbody>
        {
          <tr >
          <th style={{border:"1px solid black", padding:5}}>Course Name</th>
          <th style={{border:"1px solid black", padding:5}}>Subject Name</th>
          <th style={{border:"1px solid black", padding:5}}>Teacher Name</th>
          <th style={{border:"1px solid black", padding:5}}>Fee</th>
          <th style={{border:"1px solid black", padding:5}}>Buttons</th>

        </tr>
        }
        {props.subjectList.map(
          (item) => (
  
            <tr style={{border:"1px solid black", padding:5}} key={item._id} onClick={()=>{console.log(item._id)}}>
                <td style={{border:"1px solid black" , padding:5}}>
                {item.subjectCourse}
                </td>
                <td style={{border:"1px solid black" , padding:5}}>
                {item.subjectName}
                </td>
                <td style={{border:"1px solid black" , padding:5}}>
                {item.subjectTeacher}
                </td>
                <td style={{border:"1px solid black" , padding:5}}>
                {item.subjectFee}
                </td>
                <td style={{border:"1px solid black" , padding:5}}>
                  <Button style={{marginBottom:5}} variant='contained' color='error' size='small' onClick={() => handleDelete(JSON.stringify(item._id))} >
                    Delete
                  </Button>
                  <Button variant='contained' color='success' size='small' onClick={()=>CustomerModalOpen(
                       item._id,item.subjectCourse , item.subjectName , item.subjectTeacher , item.subjectFee
                  )} >
                    Update
                  </Button>
                </td>
        
              </tr>
          )
        )} 
        </tbody>
      </table>
          </div>
  
  
  
  
  
  
          <Modal
          open={modal}
          onClose={handleCustomerClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
            <Box sx={{position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: {xs:"80%" ,md:500},
              height:"70vh",
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
              overflowY:"scroll"
            }}>
  
              <div style={{width:"auto"}} className="form-container">
                <form onSubmit={updateList} >
                  <div className="form-group">
                    <label>Course Name:</label>
                    <select style={{width:"100%" , height:40}} type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} >
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
                    <label>Subject Name:</label>
                    <input type="text" value={subjectName} onChange={(e) => setSubjectName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Teacher Name:</label>
                    <input type="text" value={teacherName} onChange={(e) => setTeacherName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Fee :</label>
                    <input type="text" value={subjectFee} onChange={(e) => setSubjectFee(e.target.value)} />
                  </div>
  
                  <button type="submit">Submit</button>
                </form>
              </div>
  
            </Box>
          </Modal>
  
      </>
    )
};

export default SubjectDetails;
