import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import FreeTutorial from "./pages/FreeTutorial";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./components/Admin/Admin";
import Footer from "./components/Footer/Footer";
import SuperAdmin from "./components/Admin/SuperAdmin";
import SnavBar from "./components/Admin/SnavBar";

function App() {

  return (
   
    <div >
      {/* <Navbar/> */}
      {/* <SnavBar/> */}
      
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
    </div>
  );
}

export default App;