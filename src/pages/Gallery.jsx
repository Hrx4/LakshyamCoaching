import React from 'react'
import MainBanner from '../components/Main Banner/MainBanner'
import myVideo from '../assets/images/aboutus.mp4'
import GalleryPage from '../components/GalleryPage/GalleryPage'
import Navbar from "../components/Navbar/Navbar";

const Gallery = () => {
  return (
    <>
    <Navbar/>
    <MainBanner
        heading2a="Gallery"
        videoSource={myVideo}
        showFeaturesSection={true}
      />
        <GalleryPage/>
    </>
  )
}

export default Gallery