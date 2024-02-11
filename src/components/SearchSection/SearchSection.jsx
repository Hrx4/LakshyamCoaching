import React, { useMemo, useState } from "react";
import "./SearchSection.css";
import backend from "../../backend";

// Parent component
const SearchSection = ({ setNoteList, setShowImg, setShowPdf, setTitle }) => {
  const [subject, setSubject] = useState("");
  const [course, setCourse] = useState("");
  const [classs, setClasss] = useState("");
  const [batch, setBatch] = useState("");

  

  const classList = useMemo(
    ()=>course === "IIT / NEET" ?
    [
      "class 11 science",
      "class 12 science",
    ]: course=== "CBSE" ? 
    [
      "class 4",
      "class 5",
      "class 6",
      "class 7",
      "class 8",
      "class 9",
      "class 10",
      "class 11 science",
      "class 12 science",
      "class 11 commerce",
      "class 12 commerce",
    ]
  : course === "ICSE"
  ? [
      "class 4",
      "class 5",
      "class 6",
      "class 7",
      "class 8",
      "class 9",
      "class 10",
    ] :[] , [course]
  )

  const subjectList = useMemo(()=>
  (classs==="class 4"||
  classs==="class 5"||
  classs==="class 6"||
  classs==="class 7"||
  classs==="class 8") ?
  [
    "English","SST" , "Math" , "Science" , "Bengali" , "Hindi"
  ] :
  (
    classs === "class 9" ||
    classs === "class 10"
  ) ?
  [    "English","SST" , "Math" , "Physics","Chemistry" , "Biology" , "Bengali" , "Hindi"
] :
(classs === "class 11 science" ||
classs === "class 12 science") ? [
  "Math" , "Physics","Chemistry" , "Biology" , "Computer" , "English"
] :
(classs === "class 11 commerce" ||
classs === "class 12 commerce") ? ["Accountancy" , "BST" , "Economics" , "Computer" , "English"] :[]
  , [classs])

  const subSubjects = ["Math", "Physics", "Chemistry"];
  const classes = ["Class XI", "Class XII"];
  const batches = ["Batch 1", "Batch 2", "Batch 3"];

  const handleNoteTable = async () => {
    try {
      const response = await fetch(`${backend}getnote/tutorial/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          noteSubject: subject,
          noteClass: classs,
          noteCourse: course,
          noteBatch: batch,
        }),
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setNoteList(resJson);
        if (resJson.length === 0) {
          setShowPdf("");
          setTitle("");
        } else {
          setShowImg(resJson[0].noteImage);
          setTitle(resJson[0].noteTitle);
          setShowPdf(resJson[0].notePdf);
        }
        console.log("====================================");
        console.log(resJson);
        console.log("====================================");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Select component
  const Select = ({ options, setSubject, subject }) => (
    <select
      style={{
        width: "100%",
        background: "transparent",
        border: "none",
        color: "white",
      }}
      value={subject}
      onChange={(e) => {
        setSubject(e.target.value);
      }}
    >
      <option style={{ color: "black" }} value="">Select Subject</option>

      {subjectList?.map((option) => (
        <option style={{ color: "black" }} key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
  const Select1 = ({  setCourse, course }) => (
    <select
      style={{
        width: "100%",
        background: "transparent",
        border: "none",
        color: "white",
      }}
      value={course}
      onChange={(e) => {
        setCourse(e.target.value);
      }}
    >
      <option  style={{ color: "black" }} value="">Select Course</option>
      <option style={{ color: "black" }} value="IIT / NEET">IIT / NEET</option>
              <option  style={{ color: "black" }}value="CBSE">CBSE</option>
              <option style={{ color: "black" }} value="ICSE">ICSE</option>
    </select>
  );
  const Select2 = ({  setClasss, classs }) => (
    <select
      style={{
        width: "100%",
        background: "transparent",
        border: "none",
        color: "white",
      }}
      value={classs}
      onChange={(e) => {
        setClasss(e.target.value);
      }}
    >
      <option style={{ color: "black" }} value="">Select Class</option>

      {classList?.map((option) => (
        <option style={{ color: "black" }} key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
  const Select3 = ({ options, setBatch, batch }) => (
    <select
      style={{
        width: "100%",
        background: "transparent",
        border: "none",
        color: "white",
      }}
      value={batch}
      onChange={(e) => {
        setBatch(e.target.value);
      }}
    >
      <option value="">Select Batch</option>
        <option style={{ color: "black" }} value="Batch 1">Batch 1</option>
              <option style={{ color: "black" }} value="Batch 2">Batch 2</option>
              <option style={{ color: "black" }} value="Batch 3">Batch 3</option>
              <option style={{ color: "black" }} value="Batch 3">Batch 4</option>
              <option style={{ color: "black" }} value="Batch 3">Batch 5</option>
    </select>
  );

  return (
    <section className="courseSearch">
      <div className="courseSearch-bars">
        

        <div className="courseSearch-bars-bar">
          <Select1
            setCourse={setCourse}
            course={course}
          />
        </div>
        <div className="courseSearch-bars-bar">
          <Select2 options={classes} setClasss={setClasss} classs={classs} />
        </div>
        <div className="courseSearch-bars-bar">
          <Select
            options={subSubjects}
            setSubject={setSubject}
            subject={subject}
          />
        </div>
        <div className="courseSearch-bars-bar">
          <Select3 options={batches} setBatch={setBatch} batch={batch} />
        </div>
        
        <button onClick={() => handleNoteTable()} style={{ borderRadius: 5 }}>
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchSection;
