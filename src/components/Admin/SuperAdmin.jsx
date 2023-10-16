import React, { useState } from 'react'
import NoteForm from './NoteForm'
import NoteTable from './NoteTable'
import backend from '../../backend'
import ContactTable from './ContactTable'
import ClassForm from './ClassForm'
import NoticeForm from './NoticeForm'
import ApplyTable from './ApplyTable'
import NoticeTable from './NoticeTable'

const SuperAdmin = () => {

  const [noteList, setNoteList] = useState([])
  const [contactList, setContactList] = useState([])
  const [applyList, setApplyList] = useState([])
  const [noticeList, setNoticeList] = useState([])
  const [noteView, setNoteView] = useState('noteform')
  

  const handleNoteTable = async() => {
    setNoteView('notetable')

    try {
        const response = await fetch(`${backend}getnote/`, {
          method: "GET",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });

        const resJson = await response.json();


        if (response.status === 200) {
          setNoteList(resJson);
          console.log('====================================');
          console.log(resJson);
          console.log('====================================');
        } else {
          console.log("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }

    }
  const handleContactTable = async() => {
      setNoteView('contacttable')
  
      try {
          const response = await fetch(`${backend}contact/`, {
            method: "GET",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
  
          const resJson = await response.json();
  
  
          if (response.status === 200) {
            setContactList(resJson);
            console.log('====================================');
            console.log(resJson);
            console.log('====================================');
          } else {
            console.log("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
  
    }
    const handleApplyTable = async() => {
      setNoteView('applytable')
  
      try {
          const response = await fetch(`${backend}apply/`, {
            method: "GET",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
  
          const resJson = await response.json();
  
  
          if (response.status === 200) {
            setApplyList(resJson);
            console.log('====================================');
            console.log(resJson);
            console.log('====================================');
          } else {
            console.log("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
  
    }
    const handleNoticeTable = async() => {
      setNoteView('noticetable')
  
      try {
          const response = await fetch(`${backend}notice/`, {
            method: "GET",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
  
          const resJson = await response.json();
  
  
          if (response.status === 200) {
            setNoticeList(resJson);
            console.log('====================================');
            console.log(resJson);
            console.log('====================================');
          } else {
            console.log("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
  
    }
    // const handleClassForm = () =>{
    //   setNoteView("classform");
    // }
  return (
    <>
      
        <div className='super-container' style={{display:"flex" , backgroundColor:('rgba(22,34,57,0.85)'), color:"white"}}>
        <div className='super-choose' style={{display:"flex",marginTop:5 , overflow:"hidden"}}>
        
        <div onClick={(e)=>{setNoteView('noteform')}} style={{padding:20, cursor:"pointer"}} className='note__btn'>
          Note Form
        </div>
        <div onClick={handleNoteTable} style={{padding:20 , cursor:"pointer"}} className='note__btn'>
          Note Details
        </div>
        <div onClick={handleContactTable} style={{padding:20 , cursor:"pointer"}} className='note__btn'>
          Query Details
        </div>
        <div onClick={handleApplyTable} style={{padding:20 , cursor:"pointer"}} className='note__btn'>
          Apply Details
        </div>
        <div onClick={(e)=>{setNoteView('noticeform')}} style={{padding:20 , cursor:"pointer"}} className='note__btn'>
          Notice Form
        </div>
        <div onClick={handleNoticeTable} style={{padding:20 , cursor:"pointer"}} className='note__btn'>
          Notice details
        </div>
        {/* <div onClick={handleClassForm} style={{padding:20 , cursor:"pointer"}} className='note__btn'>Class</div> */}
      </div>
      {/* <Divider orientation='vertical'   style={{height:"93vh",color:"success"}}/> */}
      {
        (noteView==='noteform')?
        <NoteForm/>:
        null
      }
      {
        (noteView==='notetable')?
      <NoteTable noteList={noteList} setNoteList={setNoteList}/>:
      null
      }
      {
        (noteView==='contacttable')?
        <ContactTable contactList={contactList} setContactList={setContactList}/>:
        null
      }
      {
        (noteView==='applytable')?
        <ApplyTable applyList={applyList} setApplyList={setApplyList}/>:
        null
      }
      {
        (noteView==='noticeform')?
        <NoticeForm />:
        null
      }
      {
        (noteView==='noticetable')?
        <NoticeTable noticeList={noticeList} setNoticeList={setNoticeList}/>:
        null
      }
      {
        (noteView==="classform")?
       ( <ClassForm /> ) : null
      }
        </div>
      
    </>
  )
}

export default SuperAdmin