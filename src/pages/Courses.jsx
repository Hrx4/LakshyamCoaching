import React from 'react'
import MainBanner from '../components/Main Banner/MainBanner'
import myVideo from '../assets/images/courses.mp4'
import CoursesSection from '../components/CoursesSection/CoursesSection'
// import Footer from '../components/Footer/Footer'
const Courses = () => {
  return (
    <div>
    <MainBanner
        heading6="Home >"
        heading2a="our"
        heading2b="courses"
        videoSource={myVideo}
        // buttonText="Discover more" // Provide buttonText prop if needed
        showFeaturesSection={false}
      />
      <CoursesSection/>
      
      </div>
  )
}

export default Courses