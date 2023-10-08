import React, { useState } from 'react'
import MainBanner from '../components/Main Banner/MainBanner'
import myVideo from '../assets/images/free-tutorial.mp4'
import NotesSection from '../components/NotesSection/NotesSection'
import SearchSection from "../components/SearchSection/SearchSection";

const FreeTutorial = () => {
  const [open, setOpen] = useState(true)
  const [noteList, setNoteList] = useState([]);

  return (
    <div>
      <MainBanner
        heading6="Home >"
        heading2a="Free Tutorial"
        // heading2b="Tutorial"
        videoSource={myVideo}
        // buttonText="Discover more" // Provide buttonText prop if needed
        showFeaturesSection={false}
      />
      <SearchSection open={open} setOpen={setOpen} noteList={noteList} setNoteList={setNoteList}/>
      <NotesSection open={open} setOpen={setOpen} noteList={noteList} setNoteList={setNoteList} />
      
    </div>
  )
}

export default FreeTutorial