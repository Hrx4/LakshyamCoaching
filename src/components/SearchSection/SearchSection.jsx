import React, { useState } from "react";
import "./SearchSection.css";
import backend from "../../backend";

// Parent component
const SearchSection = ({ setNoteList, setShowImg, setShowPdf, setTitle }) => {
  const [subject, setSubject] = useState("");
  const [course, setCourse] = useState("");
  const [classs, setClasss] = useState("");
  const [batch, setBatch] = useState("");

  const mainSubjects = [
    "CBSE Board All Subjects",
    "ICSE Board All Subjects",
    "Class 11 CBSE Boards + CUET",
    "Class 11 ICSE Boards + CUET",
    "Class 12 CBSE Boards + CUET",
    "Class 12 ICSE Boards + CUET",
    "JEE Mains",
    "NEET",
    "Foundation Course JEE IIT / NEET",
    "Commerce Board + CUET",
    "CA Foundation",
  ];
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
      <option hidden>Select Subject</option>

      {options.map((option) => (
        <option style={{ color: "black" }} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
  const Select1 = ({ options, setCourse, course }) => (
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
      <option hidden>Select Course</option>
      {options.map((option) => (
        <option style={{ color: "black" }} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
  const Select2 = ({ options, setClasss, classs }) => (
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
      <option hidden>Select Class</option>

      {options.map((option) => (
        <option style={{ color: "black" }} key={option}>
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
      <option hidden>Select Batch</option>

      {options.map((option) => (
        <option style={{ color: "black" }} key={option}>
          {option}
        </option>
      ))}
    </select>
  );

  return (
    <section className="courseSearch">
      <div className="courseSearch-bars">
        <div className="courseSearch-bars-bar">
          <Select
            options={subSubjects}
            setSubject={setSubject}
            subject={subject}
          />
        </div>

        <div className="courseSearch-bars-bar">
          <Select1
            options={mainSubjects}
            setCourse={setCourse}
            course={course}
          />
        </div>
        <div className="courseSearch-bars-bar">
          <Select3 options={batches} setBatch={setBatch} batch={batch} />
        </div>
        <div className="courseSearch-bars-bar">
          <Select2 options={classes} setClasss={setClasss} classs={classs} />
        </div>
        <button onClick={() => handleNoteTable()} style={{ borderRadius: 5 }}>
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchSection;
