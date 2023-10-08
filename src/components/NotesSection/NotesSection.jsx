import React, {useState } from "react";
import {saveAs} from 'file-saver'
import './NotesSection.css';
// NoteCard component





// Parent component
const NotesSection = ({open , setOpen, noteList , setNoteList}) => {

  const [showImg, setShowImg] = useState('');
  const [showPdf, setShowPdf] = useState('');
  const [title, setTitle] = useState('')


  
const NoteCard = ({key, imgSrc, title, pdf }) => {
  // Define a click handler function
  
  return (
    <div id={key} onClick={()=>{setShowImg(imgSrc); setShowPdf(pdf); setTitle(title)}} style={{width:"100%" , height:100 , display:"flex" , alignItems:"center", cursor:"pointer"}}>
      <img
        style={{}}
        className="side-logo-img align-left"
        src={imgSrc}
        alt=""
      />
      <div className="">
        <h4 style={{paddingLeft:20, color:"white"}}>{title}</h4>
      </div>
    </div>
  );
};



  // const handleNoteTable = async() => {

  //   try {
  //       const response = await fetch(`${backend}getnote/`, {
  //         method: "GET",
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //       });

  //       const resJson = await response.json();


  //       if (response.status === 200) {
  //         setNoteList(resJson);
  //         console.log('====================================');
  //         console.log(resJson);
  //         console.log('====================================');
  //       } else {
  //         console.log("Some error occured");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }

  //   }

    // useEffect(() => {
    //   handleNoteTable()
    // }, [])
    

  return (
    <section className="text" style={{display:open?"block" : "none"}}>
      <div className="contain">
        <div className="row tut__container">
          <div className="col-lg-8 col-sm-12">
          {/* {notes.map()} */}
            {
              (showImg==='')?<div style={{ width: "100%", height: "60vh", color:"white" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
              Select your desired notes.....
              </div>
              :
              <img
              id="targetedImg"
              style={{ width: "100%", height: "60vh"}}
              src={showImg}
              alt=""
            />
            }
            <div className="padding-top-bot2">
              <h3>{title}</h3>
              <span>Download Notes Here</span>
              <button className="btn">
                <div onClick={()=>{saveAs(showPdf , `${title}.pdf`)}} download={`${title}.pdf`}  rel="noreferrer" style={{textDecoration:"none" , fontWeight:"bold"}}>
                 Download
                </div>
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-sm-14">
            <div className="scroll">
              {noteList.map((note, index) => (
                <NoteCard
                  key={index}
                  imgSrc={note.noteImage}
                  title={note.noteTitle}
                  pdf={note.notePdf}
                />
                
              ))}
  </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotesSection;
