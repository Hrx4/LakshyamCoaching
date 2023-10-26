import React, { useState,useRef } from 'react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ClearIcon from '@mui/icons-material/Clear';
import NoteForm from './NoteForm'
import NoteTable from './NoteTable'
import backend from '../../backend'
import ContactTable from './ContactTable'
import ClassForm from './ClassForm'
import NoticeForm from './NoticeForm'
import ApplyTable from './ApplyTable'
import NoticeTable from './NoticeTable'
import SubjectDetails from './SubjectDetails'
import SubjectForm from './SubjectForm'
import AddStudent from './AddStudent'
import AllStudent from './AllStudent'


const SuperAdmin = () => {
  const ref = useRef(null)
  const [noteList, setNoteList] = useState([])
  const [contactList, setContactList] = useState([])
  const [applyList, setApplyList] = useState([])
  const [noticeList, setNoticeList] = useState([])
  const [subjectList, setSubjectList] = useState([])
  const [noteView, setNoteView] = useState('noteform')
  const [slideOpen, setSlideOpen] = useState(false)
  const [studentItem, setStudentItem] = useState([ { id: 1, name: '▶ Student', isOpen: false, subItems: ['Add Student', 'All Students'] } ])
  const [subjectItem, setSubjectItem] = useState([ { id: 1, name: '▶ Subject', isOpen: false, subItems: [' Subject Form', 'Subject Details'] } ])
  const [noticeItem, setNoticeItem] = useState([ { id: 1, name: '▶ Notice', isOpen: false, subItems: ['Notice Form', 'Notice Details'] } ])
  const [noteItem, setNoteItem] = useState([ { id: 1, name: '▶ Note', isOpen: false, subItems: ['Note Form', 'Note Details'] } ])

  const toggleMenu = (itemId) => {
    setStudentItem((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const toggleSubjectMenu = (itemId) => {
    setSubjectItem((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const toggleNoticeMenu = (itemId) => {
    setNoticeItem((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const toggleNoteMenu = (itemId) => {
    setNoteItem((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };


  const handleNoteTable = async() => {
    ref.current.classList.add( 'slider__close')
    ref.current.classList.remove( 'slider__open')
      setSlideOpen(false)
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
    ref.current.classList.add( 'slider__close')
    ref.current.classList.remove( 'slider__open')
      setSlideOpen(false)
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
      ref.current.classList.add( 'slider__close')
      ref.current.classList.remove( 'slider__open')
      setSlideOpen(false)
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
       ref.current.classList.add( 'slider__close')
       ref.current.classList.remove( 'slider__open')
      setSlideOpen(false)


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
    const handleSubjectDetails = async () =>{
      ref.current.classList.add( 'slider__close')
      ref.current.classList.remove( 'slider__open')
      setSlideOpen(false)



         setNoteView("subjectdetails");
         try {
          const response = await fetch(`${backend}subject/`, {
            method: "GET",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
  
          const resJson = await response.json();
  
  
          if (response.status === 200) {
            setSubjectList(resJson);
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
     const handleNoteForm = ()=>{
      setNoteView('noteform')
      ref.current.classList.add( 'slider__close')
      ref.current.classList.remove( 'slider__open')
      setSlideOpen(false)


    }
     const handleNoticeForm = ()=>{
      setNoteView('noticeform')
      ref.current.classList.add( 'slider__close')
      ref.current.classList.remove( 'slider__open')
      setSlideOpen(false)

     }
     const handleSubjectForm = ()=>{
      setNoteView('subjectform')
      ref.current.classList.add( 'slider__close')
      ref.current.classList.remove( 'slider__open')
      setSlideOpen(false)

     }

     const btnclicked = ()=>{
      if(!slideOpen){
      ref.current.classList.remove( 'slider__close')
       ref.current.classList.add( 'slider__open')
      setSlideOpen(true)
      }
      else{
        ref.current.classList.add( 'slider__close')
        ref.current.classList.remove( 'slider__open')
        setSlideOpen(false)
      }
      
    } 

    const handleAddStudentDetails = () =>{
      setNoteView('addStudentForm');
    }

    const handleAllStudentDetails = () =>{
      setNoteView('allStudentForm');
    }



  return (
    <>
      
        <div className='super-container' style={{display:"flex" , backgroundColor:('rgba(22,34,57,0.85)'), color:"white", }}>
        
        <button className='hide__btn' style={{ position:"absolute" ,marginTop:5}} onClick={btnclicked}>
        {
          (!slideOpen)? 
          <DoubleArrowIcon fontSize='small'/>
          :
          <ClearIcon fontSize='small'/>

        }
        </button>
        <div ref={ref} id='super-choose' className='super-choose' style={{display:"flex" , overflow:"hidden"}}>
        
        {/* <div onClick={handleNoteForm} style={{padding:20, cursor:"pointer"}} className='note__btn'>
          Note Form
        </div>
        <div onClick={handleNoteTable} style={{padding:20 , cursor:"pointer"}} className='note__btn'>
          Note Details
        </div> */}

        <div style={{paddingTop:20, textAlign:'left', marginLeft:0, paddingLeft:5}} className='note__btn'>
        <ul style={{listStyleType: 'none'}}>
          {noteItem.map((noteItems) => (
            <li key={noteItems.id}>
              <span
                onClick={() => toggleNoteMenu(noteItems.id)}
                style={{cursor: 'pointer', fontSize:17, textAlign:'left', color:'white' }} className='note__btn'
              >
                {noteItems.name}
              </span>
              {noteItems.isOpen && (
                <ul style={{padding:10, color:'white'}}>
                   
                  <li onClick={handleNoteForm}>Note Form</li>
                  <li onClick={handleNoteTable}>Note Details</li>
                </ul>
              )}
            </li>
          ))}
        </ul>
     
    </div>

        <div onClick={handleContactTable} style={{padding:20 , cursor:"pointer", paddingLeft:30}} className='note__btn'>
          Query Details
        </div>
        <div onClick={handleApplyTable} style={{padding:20 , cursor:"pointer", paddingLeft:30}} className='note__btn'>
          Apply Details
        </div>
        {/* <div onClick={handleNoticeForm} style={{padding:20 , cursor:"pointer"}} className='note__btn'>
          Notice Form
        </div>
        <div onClick={handleNoticeTable} style={{padding:20 , cursor:"pointer"}} className='note__btn'>
          Notice details
        </div> */}
        {/* <div onClick={handleSubjectForm} style={{padding:20 , cursor:"pointer"}} className='note__btn'>
          Subject Form
        </div> */}
        {/* <div onClick={handleClassForm} style={{padding:20 , cursor:"pointer"}} className='note__btn'>Class</div> */}
        {/* <div onClick={handleSubjectDetails} style={{padding:20 , cursor:"pointer"}} className='note__btn'>Subject Details</div> */}

        <div style={{paddingTop:20, textAlign:'left', marginLeft:0}} className='note__btn'>
        <ul style={{listStyleType: 'none'}}>
          {noticeItem.map((noticeItems) => (
            <li key={noticeItems.id}>
              <span
                onClick={() => toggleNoticeMenu(noticeItems.id)}
                style={{cursor: 'pointer', fontSize:17, textAlign:'left', color:'white' }} className='note__btn'
              >
                {noticeItems.name}
              </span>
              {noticeItems.isOpen && (
                <ul style={{padding:10, color:'white'}}>
                   
                  <li onClick={handleNoticeForm}>Notice Form</li>
                  <li onClick={handleNoticeTable}>Notice Details</li>
                </ul>
              )}
            </li>
          ))}
        </ul>
     
    </div>


        <div style={{paddingTop:20, textAlign:'left', marginLeft:0}} className='note__btn'>
        <ul style={{listStyleType: 'none'}}>
          {subjectItem.map((subjectItems) => (
            <li key={subjectItems.id}>
              <span
                onClick={() => toggleSubjectMenu(subjectItems.id)}
                style={{cursor: 'pointer', fontSize:17, textAlign:'left', color:'white' }} className='note__btn'
              >
                {subjectItems.name}
              </span>
              {subjectItems.isOpen && (
                <ul style={{padding:10, color:'white'}}>
                   
                  <li onClick={handleSubjectForm}>Subject Form</li>
                  <li onClick={handleSubjectDetails}>Subject Details</li>
                </ul>
              )}
            </li>
          ))}
        </ul>
     
    </div>
        
        <div style={{paddingTop:20, textAlign:'left', marginLeft:0}} className='note__btn'>
        <ul style={{listStyleType: 'none'}}>
          {studentItem.map((studentItems) => (
            <li key={studentItems.id}>
              <span
                onClick={() => toggleMenu(studentItems.id)}
                style={{cursor: 'pointer', fontSize:17, textAlign:'left', color:'white' }} className='note__btn'
              >
                {studentItems.name}
              </span>
              {studentItems.isOpen && (
                <ul style={{padding:10, color:'white'}}>
                   {/* {studentItems.subItems.map((subItem) => (
                    <li onClick={handleStudentDetails} key={subItem}>{subItem}</li>
                  ))}  */}
                  <li onClick={handleAddStudentDetails}>Add Student</li>
                  <li onClick={handleAllStudentDetails}>All Student</li>
                </ul>
              )}
            </li>
          ))}
        </ul>
     
    </div>




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
      {
        (noteView==="subjectdetails")?
       ( <SubjectDetails subjectList={subjectList} setSubjectList={setSubjectList} /> ) : null
      }
      {
        (noteView==='subjectform')?
        <SubjectForm />:
        null
      }
      {
        (noteView==='addStudentForm')?
        <AddStudent />:
        null
      }
      {
        (noteView==='allStudentForm')?
        <AllStudent />:
        null
      }
        </div>
      
    </>
  )
}

export default SuperAdmin