import React from 'react'
import MainBanner from '../components/Main Banner/MainBanner'
import myVideo from '../assets/images/contact.mp4'
// import Footer from '../components/Footer/Footer'
import ContactSection from '../components/ContactSection/ContactSection'
import Navbar from "../components/Navbar/Navbar";
const Contact = () => {
  return (
    <>
    <Navbar/>
    <div>
      <MainBanner
        heading6="Home >"
        heading2a="Contact us"
        // heading2b="us"
        videoSource={myVideo}
        showFeaturesSection={false}
      />
      <ContactSection/>
      

    </div>
    </>
  )
}

export default Contact