import React from "react";
import CourseItem from "../CourseItem/CourseItem";
import './CoursesSection.css';
import img_1 from './courses-01 copy.jpg';
import img_2 from './courses-02.jpg';
import img_3 from './courses-03.jpg';
import img_4 from './courses-04.jpg';
import img_5 from './courses-05.jpg';




const CoursesSection = () => {

  const coursesData = [
    {
      imgSrc: img_1,
      title: "CBSE Board All Subjects",
      description:
        "We provide complete step-by-step guidance to walk you through, to accomplish different tasks.",
    },
    {
      imgSrc: img_2,
      title: "ICSE Board All Subjects",
      description:
        "We provide personalized training services for students from certified tutors right at your home.",
    },
    {
      imgSrc: img_3,
      title: "Class 11 CBSE Boards + CUET",
      description:
        "We undertake services such as motivational result-driven classes and stress-releasing sessions.",
    },
    {
      imgSrc: img_4,
      title: "Class 11 ICSE Boards + CUET",
      description:
        "We have expert & experienced faculty members who provide online tutoring for kids to learn online.",
    },
    {
      imgSrc: img_5,
      title: "Class 12 CBSE Boards + CUET",
      description:
        "We have vastly experienced staff members who will ensure your success in various competitive exams.",
    },
    {
      imgSrc: img_1,
      title: "Class 12 ICSE Boards + CUET",
      description:
        "Now study Commerce from any of our esteemed institutes & pass out with flying colors & a stable job in hand.",
    },
    {
      imgSrc: img_2,
      title: "JEE Mains",
      description:
        "We have experienced teachers to teach students of class XII commerce so that they learn from the basics.",
    },
    {
      imgSrc: img_4,
      title: "NEET ",
      description:
        "In this course structure, students of school levels, up to class X, are rendered coaching in all subjects.",
    },
    {
      imgSrc: img_5,
      title: "Foundation Course JEE IIT / NEET",
      description:
        "Students of classes XI and XII are prepared for entrances. Also, medical students are given regular coaching.",
    },
    {
      imgSrc:img_3 ,
      title: "Commerce Board + CUET",
      description:
        "Students of classes XI and XII are prepared for entrances. Also, engineering students are given regular coaching.",
    },
    {
      imgSrc:img_1 ,
      title:"CA Foundation",
      description:
        "Students of classes XI and XII are prepared for entrances. Also, medical students are given regular coaching.",
    }
  ];



  return (
    <section className="section-courses" data-section="section4" style={{paddingBottom:50}}>
      <div className="container-fluid" >
        <div className="">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Choose Your Course</h2>
            </div>
          </div>
          <div className="courseContainer">
            {coursesData.map((course, index) => (
              <CourseItem key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
