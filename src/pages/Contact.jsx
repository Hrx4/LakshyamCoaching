import React from 'react'
import MainBanner from '../components/Main Banner/MainBanner'
import myVideo from '../assets/images/contact.mp4'
// import Footer from '../components/Footer/Footer'
import ContactSection from '../components/ContactSection/ContactSection'
const Contact = () => {
  return (
    <div>
      <MainBanner
        heading6="Home >"
        heading2a="Contact"
        heading2b="us"
        videoSource={myVideo}
        // buttonText="Discover more" // Provide buttonText prop if needed
        showFeaturesSection={false}
      />
      <ContactSection/>
      

    </div>
  )
}

export default Contact