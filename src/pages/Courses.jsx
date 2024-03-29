import React from 'react'
import MainBanner from '../components/Main Banner/MainBanner'
import myVideo from '../assets/images/courses.mp4'
import CoursesSection from '../components/CoursesSection/CoursesSection'
// import Footer from '../components/Footer/Footer'
import Navbar from "../components/Navbar/Navbar";
const Courses = () => {
  return (
    <>
    <Navbar/>
    <div>
    <MainBanner
        heading2a="our courses"
        // heading2b="courses"
        videoSource={myVideo}
        // buttonText="Discover more" // Provide buttonText prop if needed
        showFeaturesSection={false}
      />
      <CoursesSection/>
      
      </div>
      </>
  )
}

export default Courses