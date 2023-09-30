import React from 'react'
import MainBanner from '../components/Main Banner/MainBanner'
import myVideo from '../assets/images/free-tutorial.mp4'
import NotesSection from '../components/NotesSection/NotesSection'

const FreeTutorial = () => {
  return (
    <div>
      <MainBanner
        heading6="Home >"
        heading2a="Free"
        heading2b="Tutorial"
        videoSource={myVideo}
        // buttonText="Discover more" // Provide buttonText prop if needed
        showFeaturesSection={false}
      />
      {/* <SearchSection/> */}
      <NotesSection/>
      
    </div>
  )
}

export default FreeTutorial