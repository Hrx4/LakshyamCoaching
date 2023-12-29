import React, { useEffect, useState } from "react";
import MainBanner from "../components/Main Banner/MainBanner";
import myVideo from "../assets/images/free-tutorial.mp4";
import NotesSection from "../components/NotesSection/NotesSection";
import SearchSection from "../components/SearchSection/SearchSection";
import Navbar from "../components/Navbar/Navbar";
import backend from "../../src/backend";

const FreeTutorial = () => {
  const [noteList, setNoteList] = useState([]);

  const handleNoteTable = async () => {
    try {
      const response = await fetch(`${backend}super/getnote/tutorial/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          noteSubject: "",
          noteClass: "",
          noteCourse: "",
          noteBatch: "",
        }),
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setNoteList(resJson);
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
    handleNoteTable();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <MainBanner
          heading6="Home >"
          heading2a="Free Tutorial"
          // heading2b="Tutorial"
          videoSource={myVideo}
          // buttonText="Discover more" // Provide buttonText prop if needed
          showFeaturesSection={false}
        />
        <SearchSection noteList={noteList} setNoteList={setNoteList} />
        <NotesSection noteList={noteList} setNoteList={setNoteList} />
      </div>
    </>
  );
};

export default FreeTutorial;
