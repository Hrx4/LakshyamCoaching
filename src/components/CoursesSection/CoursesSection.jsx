import React, { useRef } from "react";
import CourseItem from "../CourseItem/CourseItem";
import "./CoursesSection.css";
import img_1 from "./4.png";
import img_2 from "./5.png";
import img_3 from "./6.png";
import img_4 from "./7.png";
import img_5 from "./8.png";
import img_6 from "./9.png";
import img_7 from "./10.png";
import img_8 from "./11.png";
import img_9 from "./12.png";
import img_10 from "./13.png";
import img_11 from "./14.png";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

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
      imgSrc: img_6,
      title: "Class 12 ICSE Boards + CUET",
      description:
        "Now study Commerce from any of our esteemed institutes & pass out with flying colors & a stable job in hand.",
    },
    {
      imgSrc: img_7,
      title: "JEE Mains",
      description:
        "We have experienced teachers to teach students of class XII commerce so that they learn from the basics.",
    },
    {
      imgSrc: img_8,
      title: "NEET ",
      description:
        "In this course structure, students of school levels, up to class X, are rendered coaching in all subjects.",
    },
    {
      imgSrc: img_9,
      title: "Foundation Course JEE IIT / NEET",
      description:
        "Students of classes XI and XII are prepared for entrances. Also, medical students are given regular coaching.",
    },
    {
      imgSrc: img_10,
      title: "Commerce Board + CUET",
      description:
        "Students of classes XI and XII are prepared for entrances. Also, engineering students are given regular coaching.",
    },
    {
      imgSrc: img_11,
      title: "CA Foundation",
      description:
        "Students of classes XI and XII are prepared for entrances. Also, medical students are given regular coaching.",
    },
  ];
  const scrollContainerRef = useRef(null);
  const handleScroll = (scrollOffset) => {
    const scrollContainer = scrollContainerRef.current;
    const currentScrollLeft = scrollContainer.scrollLeft;
    const newScrollLeft = currentScrollLeft + scrollOffset;

    scrollContainer.scrollTo({
      left: newScrollLeft,
      behavior: "smooth", // Enable smooth scrolling
    });
  };

  return (
    <section
      className="section-courses"
      data-section="section4"
      style={{ paddingBottom: 50 }}
    >
      <div className="container-fluid">
        <div className="">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Choose Your Course</h2>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="arrow__btn"

            >
              <ArrowBackOutlinedIcon
                style={{ color: "white", fontSize: 40, cursor: "pointer" }}
                onClick={() => handleScroll(-400)}
              />
            </div>

            <div className="courseContainer" ref={scrollContainerRef}>
              {coursesData.map((course, index) => (
                <CourseItem key={index} {...course} />
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="arrow__btn"

            >
              <ArrowForwardOutlinedIcon
                style={{ color: "white", fontSize: 40, cursor: "pointer" }}
                onClick={() => handleScroll(+400)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
