import React from "react";
import './SearchSection.css'
// Select component
const Select = ({ options }) => (
  <select className="round wid-full">
    {options.map((option) => (
      <option key={option}>{option}</option>
    ))}
  </select>
);

// SearchInput component
const SearchInput = () => (
  <form className="search-container wid-full">
    <input type="text" id="search-bar" placeholder=" &#61442; Search Your Note" />
  </form>
);

// Parent component
const SearchSection = () => {
  const mainSubjects = ["JEE MAINS", "IIT", "NEET"];
  const subSubjects = ["MATH", "PHYSICS", "CHEMISTRY"];
  const classes = ["Class X", "Class XI", "Class XII"];

  return (
    <section className="courseSearch">
      <div className="courseSearch-bars">
        <div className="courseSearch-bars-bar">
          <Select options={mainSubjects} />
        </div>
        <div className="courseSearch-bars-bar">
          <SearchInput />
        </div>
        <div className="courseSearch-bars-bar">
          <Select options={subSubjects} />
        </div>
        <div className="courseSearch-bars-bar">
          <Select options={classes} />
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
