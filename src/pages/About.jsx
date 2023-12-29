import React from 'react'
import MainBanner from '../components/Main Banner/MainBanner'
import myVideo from '../assets/images/aboutus.mp4'
import WhyGradSchool from '../components/WhyGradSchool/WhyGradSchool'
import VideoSection from '../components/VideoSection/VideoSection'
import Navbar from "../components/Navbar/Navbar";
const About = () => {
  // const { pathname } = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname])
  
  return (
    <>
  <Navbar/>
    <div>
      <MainBanner
        heading6="Home >"
        heading2a="Success Starts Here"
        videoSource={myVideo}
        showFeaturesSection={true}
      />
      <WhyGradSchool/>
      <VideoSection/>
      
    </div>
    </>
  )
}

export default About
