import React, { useState } from "react";
import "./SearchSection.css";
import backend from "../../backend";

const handleNoteTable = async (
  setNoteList,
  setOpen,
  subject,
  course,
  classs,
  batch
) => {
  try {
    const response = await fetch(`${backend}super/getnote/tutorial/`, {
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
      console.log("====================================");
      console.log(resJson);
      console.log("====================================");
    } else {
      console.log("Some error occured");
    }
    setOpen(true);
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
    {options.map((option) => (
      <option style={{ color: "black" }} key={option}>
        {option}
      </option>
    ))}
  </select>
);

// Parent component
const SearchSection = ({ open, setOpen, noteList, setNoteList }) => {
  const [subject, setSubject] = useState("Math");
  const [course, setCourse] = useState("CBSE Board All Subjects");
  const [classs, setClasss] = useState("Class XI");
  const [batch, setBatch] = useState("Batch 1");

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
        <button
          onClick={() =>
            handleNoteTable(
              setNoteList,
              setOpen,
              subject,
              course,
              classs,
              batch
            )
          }
          style={{ borderRadius: 5 }}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchSection;
