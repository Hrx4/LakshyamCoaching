import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import FreeTutorial from "./pages/FreeTutorial";
import Gallery from "./pages/Gallery";
import Admin from "./components/Admin/Admin";
import Footer from "./components/Footer/Footer";
import SuperAdmin from "./components/Admin/SuperAdmin";
import backend from "./backend";
import ClearIcon from "@mui/icons-material/Clear";
import "./App.css";
import ScrollTop from "./ScrollTop";
import StudentPanel from "./components/Student/StudentPanel";
import TeacherPanel from "./components/Teacher/TeacherPanel";

function App() {
  const [imgsrc, setImgsrc] = useState("");

  const [displayState, setDisplayState] = useState("none");
  const getBanner = async () => {
    try {
      const response = await fetch(`${backend}super/popup/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      if (response.status === 200) {
        const size = resJson.length
        if (size>1)
        {setImgsrc(resJson[size-1].popupImage)}
        else 
        setImgsrc(resJson[0].popupImage);
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
    getBanner();
    if(imgsrc!=="")
    {setTimeout(() => {
      setDisplayState("flex");
    }, 10000);}
  }, [imgsrc]);

  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "fixed",
          zIndex: 1000,
          display: displayState,
          justifyContent: "center",
          backgroundColor: "rgba(10,10,10,.75",
          alignItems: "center",
        }}
      >
        <img
          src={imgsrc}
          className="banner__img"
          alt=""
          style={{ opacity: 1 }}
        />
        <div style={{ height: "80%" }}>
          <div onClick={() => setDisplayState("none")}>
            <ClearIcon
              // color="success"
              fontSize="large"
              style={{ display: "absolute", cursor: "pointer", color: "red" }}
            />
          </div>
        </div>
      </div>
<ScrollTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/freetutorial" element={<FreeTutorial />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Admin />} />
        <Route path="/admin/:id" element={<SuperAdmin />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/student" element={<StudentPanel/>}/>
        <Route path="/teacher" element={<TeacherPanel/>}/>

      </Routes>
      <Footer />
    </>
  );
}

export default App;
