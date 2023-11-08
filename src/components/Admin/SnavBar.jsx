import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import lakshyamLogo from "./lakshyamlogo.png";

const SnavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } 
      
      else {
        setIsScrolled(false);

      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <header className={`main-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <Link to="/">
            <img src={lakshyamLogo} alt="logo" height="60px" width="60px" />
          </Link>
        </div>
        <span
          style={{ paddingRight: 15, marginRight: 15, cursor: "pointer" }}
          onClick={toggleBox}
        >
          Hi Super Admin!
        </span>
      </header>

      {isOpen && (
        <div
          className="navBox"
          style={{
            maxHeight: 400,
            width: 300,
            position: "absolute",
            right: "3%",
            backgroundColor: "rgb(22,34,57,1)",
            overflowY: "scroll",
            zIndex: 200,
          }}
        >
          <div
            style={{
              width: 100,
              height: 150,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={lakshyamLogo}
              alt="Logo"
              style={{ height: "100%", marginLeft: "190px" }}
            />
          </div>
          <button>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default SnavBar;
