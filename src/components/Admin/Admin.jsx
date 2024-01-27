import { Box, Modal} from '@mui/material'
import React from 'react'
import './Admin.css'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import backend from '../../backend'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350, 
        height:200,
        margin:"auto",
        p: 4,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",
        border: "2px solid white",
        borderRadius:5,
        backgroundColor:'rgba(22,34,57,1)'
      };

    const [open, setOpen] = React.useState(false);
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [route , setRoute] = useState("")
  const [apiRoute , setApiRoute] = useState("")
  const navigate = useNavigate()
  const handleOpen = () =>{ 
    setRoute("/admin/superadmin")
    setApiRoute(`${backend}login/`)
    setOpen(true)
  };
  const handleOpen1 = () =>{ 
    setRoute("/admin/office1")
    setApiRoute(`${backend}login/`)

    setOpen(true)
  };
  const handleOpen2 = () =>{ 
    setRoute("/admin/office2")
    setApiRoute(`${backend}login/`)

    setOpen(true)
  };
  const handleOpen3 = () =>{ 
    setRoute("/admin/office3")
    setApiRoute(`${backend}login/`)

    setOpen(true)
  };
  const handleOpen4 = () =>{ 
    setRoute("/student")
    setApiRoute(`${backend}student/details/`)

    setOpen(true)
  };
  const handleOpen5 = () =>{ 
    setRoute("/teacher")
    setApiRoute(`${backend}teacher/details/`)

    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiRoute, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName : username,
          password : password
        }),
      });

      const resJson = await response.json();

      if (response.status === 201 || response.status===200) {
        // setIncome(resJson);
        console.log("====================================");
        console.log(resJson);
        console.log("====================================");
       if ( resJson.check==="Student")
        {
          localStorage.setItem("lakshyamStudent" , JSON.stringify(resJson.data) )
        } 
         if ( resJson.check==="Teacher")
          localStorage.setItem("lakshyamTeacher" , JSON.stringify(resJson.data) )
        navigate(route)
      } else {
        alert("Error Occured")
        console.log("Some error occured");
      }
    } catch (err) {
      alert("Error Occured")
      console.log(err);
    }
  };

  return (
    <>
    <Navbar/>
        <div style={{backgroundColor: 'rgba(22,34,57,0.95)' , height : "100%", width:"100%" , display:"flex" , flexDirection:"column", justifyContent:"center" , gap:30, paddingTop:110 ,  paddingBottom:110}}>

        <div className='admin__row' style={{display:"flex" , justifyContent:"space-evenly"  }}>
            <div  className='admin__card' style={{height:200 , borderRadius:10 , backgroundColor:"transparent" , fontSize:20 , fontWeight:"bold" ,  display:"flex" , justifyContent:"center" , alignItems:"center" }} onClick={handleOpen}>
            Super Admin
            </div>
            <div className='admin__card' style={{height:200  , borderRadius:10 , backgroundColor:"transparent" , fontSize:20 , fontWeight:"bold", display:"flex" , justifyContent:"center" , alignItems:"center" }} onClick={handleOpen1}>
            Office 1
            </div>
            <div className='admin__card' style={{height:200  , borderRadius:10 , backgroundColor:"transparent" , fontSize:20 , fontWeight:"bold", display:"flex" , justifyContent:"center" , alignItems:"center" }} onClick={handleOpen2}>
            Office 2
            </div>
        </div>
        <div className='admin__row' style={{display:"flex" , justifyContent:"space-evenly"}}>
        <div className='admin__card' style={{height:200  , borderRadius:10 , backgroundColor:"transparent" , fontSize:20 , fontWeight:"bold", display:"flex" , justifyContent:"center" , alignItems:"center" }} onClick={handleOpen3}>
            Office 3
            </div>
            <div className='admin__card' style={{height:200  , borderRadius:10 , backgroundColor:"transparent" , fontSize:20 , fontWeight:"bold", display:"flex" , justifyContent:"center" , alignItems:"center" }} onClick={handleOpen4}>
            Student
            </div>
            <div className='admin__card' style={{height:200  , borderRadius:10 , backgroundColor:"transparent" , fontSize:20 , fontWeight:"bold", display:"flex" , justifyContent:"center" , alignItems:"center" }} onClick={handleOpen5}>
            Teacher
            </div>
        </div>

        </div>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {
          (route==="/student") ? 
          <>
          <input onChange={(e)=>{setUsername(e.target.value)}} id='username' type="text" placeholder='Enrollment No' style={{height:30}} />
          <input onChange={(e)=>{setPassword(e.target.value)}} id='password' type='password' placeholder='Password' style={{height:30}} />
          
         <button style={{backgroundColor:"blue" , height:40 , width:70, color:"white" , border:"none" , borderRadius:3,fontStyle:"normal" , fontWeight:"bold"}} onClick={handleSubmit}>
            Login
          </button>
          </>
          :(route==="/teacher") ? 
          <>
          <input onChange={(e)=>{setUsername(e.target.value)}} id='username' type="text" placeholder='Email' style={{height:30}} />
          <input onChange={(e)=>{setPassword(e.target.value)}} id='password' type='password' placeholder='Password' style={{height:30}} />
          
         <button style={{backgroundColor:"blue" , height:40 , width:70, color:"white" , border:"none" , borderRadius:3,fontStyle:"normal" , fontWeight:"bold"}} onClick={handleSubmit}>
            Login
          </button>
          </>
          :
          <>
          <input onChange={(e)=>{setUsername(e.target.value)}} id='username' type="text" placeholder='Username' style={{height:30}} />
          <input onChange={(e)=>{setPassword(e.target.value)}} id='password' type='password' placeholder='Password' style={{height:30}} />
          
         <button style={{backgroundColor:"blue" , height:40 , width:70, color:"white" , border:"none" , borderRadius:3,fontStyle:"normal" , fontWeight:"bold"}} onClick={handleSubmit}>
            Login
          </button>
          </>
          }
        </Box>
      </Modal>

    </>
  )
}

export default Admin