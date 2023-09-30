import React, { useState } from "react";
import CourseItem from "../CourseItem/CourseItem";
// import myCourseImage1 from './courses-01.jpg'
import './CoursesSection.css';
import img_1 from './courses-01 copy.jpg';
import img_2 from './courses-02.jpg';
import img_3 from './courses-03.jpg';
import img_4 from './courses-04.jpg';
import img_5 from './courses-05.jpg';
import ButtonGroup from "./ButtonGroup/ButtonGroup";
 



const CoursesSection = () => {

  const coursesData = [
    {
      imgSrc: img_1,
      title: "Tutorials",
      description:
        "We provide complete step-by-step guidance to walk you through, to accomplish different tasks.",
    },
    {
      imgSrc: img_2,
      title: "Home Tuitions",
      description:
        "We provide personalized training services for students from certified tutors right at your home.",
    },
    {
      imgSrc: img_3,
      title: "Live Courses",
      description:
        "We undertake services such as motivational result-driven classes and stress-releasing sessions.",
    },
    {
      imgSrc: img_4,
      title: "Online Tutorials",
      description:
        "We have expert & experienced faculty members who provide online tutoring for kids to learn online.",
    },
    {
      imgSrc: img_5,
      title: "Competitive Exams",
      description:
        "We have vastly experienced staff members who will ensure your success in various competitive exams.",
    },
    {
      imgSrc: img_1,
      title: "Institute for Commerce",
      description:
        "Now study Commerce from any of our esteemed institutes & pass out with flying colors & a stable job in hand.",
    },
    {
      imgSrc: img_2,
      title: "Tutorials for ICSE class 12 Commerce",
      description:
        "We have experienced teachers to teach students of class XII commerce so that they learn from the basics.",
    },
    {
      imgSrc: img_4,
      title: "Foundation Courses",
      description:
        "In this course structure, students of school levels, up to class X, are rendered coaching in all subjects.",
    },
    {
      imgSrc: img_5,
      title: "Medical Courses",
      description:
        "Students of classes XI and XII are prepared for entrances. Also, medical students are given regular coaching.",
    },
    {
      imgSrc:img_3 ,
      title: "Engineering Courses",
      description:
        "Students of classes XI and XII are prepared for entrances. Also, engineering students are given regular coaching.",
    },
  ];

  const [activeButton, setActiveButton] = useState(1);

  const itemsToShow = activeButton === 1 ? coursesData.slice(0, 5) : coursesData.slice(5);

  return (
    <section className="section-courses" data-section="section4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Choose Your Course</h2>
            </div>
          </div>
          <div className="courseContainer">
            {itemsToShow.map((course, index) => (
              <CourseItem key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
      <ButtonGroup activeButton={activeButton} setActiveButton={setActiveButton} />
    </section>
  );
};

export default CoursesSection;
