import React, { useState } from "react";
import './SearchSection.css'
import backend from "../../backend";




const handleNoteTable = async(setNoteList , setOpen , subject , course , classs) => {

  try {
      const response = await fetch(`${backend}getnote/tutorial/`, {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          noteSubject :subject, 
          noteClass :classs, 
          noteCourse :course
      }),
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
      setOpen(true)

    } catch (err) {
      console.log(err);
    }


  }

// Select component
const Select = ({ options ,setSubject , subject}) => (
  <select style={{width:"100%" , background:"transparent" , border:"none" , color:"white" }}  value={subject} onChange={(e)=>{setSubject(e.target.value)}}>
    {options.map((option) => (
      <option style={{color:"black"}} key={option}>{option}</option>
    ))}
  </select>
);
const Select1 = ({ options,setCourse,course }) => (
  <select style={{width:"100%" , background:"transparent" , border:"none" , color:"white" }} value={course} onChange={(e)=>{setCourse(e.target.value)}}>
    {options.map((option) => (
      <option style={{color:"black"}} key={option}>{option}</option>
    ))}
  </select>
);
const Select2 = ({ options ,setClasss , classs}) => (
  <select style={{width:"100%" , background:"transparent" , border:"none" , color:"white" }} value={classs} onChange={(e)=>{setClasss(e.target.value)}}>
    {options.map((option) => (
      <option style={{color:"black"}} key={option}>{option}</option>
    ))}
  </select>
);



// Parent component
const SearchSection = ({open , setOpen , noteList , setNoteList}) => {
  const [subject, setSubject] = useState("Physics")
  const [course, setCourse] = useState("Jee")
  const [classs, setClasss] = useState("12")

  const mainSubjects = ["JEE Main", "WBJEE"];
  const subSubjects = ["Math", "Physics", "Chemistry"];
  const classes = [ "Class XI", "Class XII"];

  return (
    <section className="courseSearch">
      <div className="courseSearch-bars">
        <div className="courseSearch-bars-bar">
          <Select options={subSubjects} setSubject={setSubject} subject={subject}  />
        </div>
        
        <div className="courseSearch-bars-bar">
          <Select1 options={mainSubjects} setCourse={setCourse} course={course}/>
        </div>
        <div className="courseSearch-bars-bar">
          <Select2 options={classes} setClasss={setClasss} classs={classs}/>
        </div>
        <button onClick={()=>handleNoteTable(setNoteList , setOpen, subject , course , classs)} style={{borderRadius:5}}>
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchSection;
