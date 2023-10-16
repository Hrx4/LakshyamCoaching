import React, { useState } from 'react'
import { Box,Divider,Modal } from '@mui/material'
import './Notification.css'

const Notification = (props) => {

    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')

    const customModal= (noticeTitle , noticeDescription)=>{
        setTitle(noticeTitle)
        setDescription(noticeDescription)
        setModal(true)

    }


  return (
    <>
        <div style={{maxHeight:400 , display:`${(props.notification)?"block":"none"}` , width:300 , position:"absolute" , right:'4%',backgroundColor:"rgb(22,34,57,1)", overflowY:"scroll",zIndex:200}}>
        
        {
        props.noticeList.map(
            (item)=>(
                (item.noticeLink)?
                <div key={item._id}  className='notice__item' style={{width:"100%" , height:70 ,display:"flex" , alignItems:"center" ,paddingLeft:10  }}>
                <a href={item.noticeLink} target='_blank' rel="noreferrer" style={{textDecoration:"none" , fontSize:16 , color:"white"}}>
                {item.noticeTitle}
                </a>
                </div>
                :
                <div key={item._id}  className='notice__item'  style={{width:"100%" , height:70,color:"white" ,display:"flex" , alignItems:"center",paddingLeft:10 }} 
                onClick={()=>customModal(item.noticeTitle , item.noticeDetails)}>
                {item.noticeTitle}
                </div>
            )
        )
        }
        
        
        
        </div>


        <Modal
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
          <Box sx={{position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: {xs:"80%" ,md:500},
            height:"40vh",
            bgcolor: "rgba(22, 34, 57, 1)",
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}>

            <h2 style={{color:"white"}}>
            {title}
            </h2>
            <Divider orientation='horizontal' style={{height:1 , backgroundColor:"white"}}/>
            <div style={{color:"white" , marginTop:10}}>
                {description}
            </div>

          </Box>
        </Modal>
    </>
   )
}

export default Notification