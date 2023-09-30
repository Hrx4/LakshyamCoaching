import React from "react";
import "./ButtonGroup.css";

const ButtonGroup = ({ activeButton, setActiveButton }) => {
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <div className="owl-dots">
      <button
        className={`owl-dot ${activeButton === 1 ? "active" : ""}`}
        onClick={() => handleButtonClick(1)}
      >
        <span></span>
      </button>
      <button
        className={`owl-dot ${activeButton === 2 ? "active" : ""}`}
        onClick={() => handleButtonClick(2)}
      >
        <span></span>
      </button>
    </div>
  );
};

export default ButtonGroup;
