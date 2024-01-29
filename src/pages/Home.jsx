import React, { useEffect, useState } from "react";
import MainBanner from "../components/Main Banner/MainBanner";
import myVideo from "../assets/images/course-video.mp4";
import WhyGradSchool from "../components/WhyGradSchool/WhyGradSchool";

import CoursesSection from "../components/CoursesSection/CoursesSection";
import VideoSection from "../components/VideoSection/VideoSection";
import GallerySection from "../components/GallerySection/GallerySection";
import Testimonials from "../components/Testimonials/Testimonials";
import ContactSection from "../components/ContactSection/ContactSection";
import Navbar from "../components/Navbar/Navbar";
import Advertisement from "../components/Advertisement";
import NotificationAndBanner from "../components/NotificationAndBanner";
import backend from "../backend";

function Home() {
  const [noticeList, setNoticeList] = useState();

  const handleNoticeTable = async () => {
    try {
      const response = await fetch(`${backend}notice/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setNoticeList(resJson);
        console.log("====================================");
        console.log(resJson);
        console.log("====================================");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleNoticeTable();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <MainBanner
          heading2a="Full Schooling Solution"
          videoSource={myVideo}
          buttonText="Get Free Study Materials"
          showFeaturesSection={true}
          className="banner-container"
        />
        <NotificationAndBanner
          noticeList={noticeList}
          setNoticeList={setNoticeList}
        />
        <CoursesSection />
        <Advertisement />
        <Testimonials />
        <WhyGradSchool />

        <VideoSection />
        <GallerySection />
        <ContactSection />
      </div>
    </>
  );
}

export default Home;
