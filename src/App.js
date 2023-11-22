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

function App() {

  const [imgsrc, setImgsrc] = useState("");

  const [displayState, setDisplayState] = useState("none");
  const getBanner = async () => {
    try {
      const response = await fetch(`${backend}popup/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      if (response.status === 200) {
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
    setTimeout(()=>{
      setDisplayState('flex')
    },10000)
  }, []);



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
          alt=""
          style={{ height: "60%", width: "55%", opacity: 1 }}
        />
        <div style={{ height: "90%"}}>
          <div onClick={()=>setDisplayState('none')}>
          <ClearIcon
            color="success"
            fontSize="large"
            style={{ top: 0, display: "absolute", cursor: "pointer" }}
            
          />
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/freetutorial" element={<FreeTutorial/>} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Admin/>} />
        <Route path="/superadmin" element={<SuperAdmin/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
       
      </Routes>
      <Footer/>
    </>
  );
}

export default App;