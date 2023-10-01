import { Divider } from '@mui/material'
import React, { useState } from 'react'
import NoteForm from './NoteForm'
import NoteTable from './NoteTable'
import backend from '../../backend'

const SuperAdmin = () => {

  const [noteList, setNoteList] = useState([])
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

  return (
    <>
      
        <div className='super-container' style={{display:"flex" , backgroundColor:('rgba(22,34,57,0.85)'), color:"white"}}>
        <div className='super-choose' style={{display:"flex",marginTop:5}}>
        
        <div onClick={(e)=>{setNoteView('noteform')}} style={{padding:20, cursor:"pointer"}} className='note__btn'>
          Note form
        </div>
        <div onClick={handleNoteTable} style={{padding:20 , cursor:"pointer"}} className='note__btn'>
          Note details
        </div>
      </div>
      {/* <Divider orientation='vertical'   style={{height:"93vh",color:"success"}}/> */}
      {
        (noteView==='noteform')?
        <NoteForm/>:
        <NoteTable noteList={noteList} setNoteList={setNoteList}/>
      }
        </div>
      
    </>
  )
}

export default SuperAdmin