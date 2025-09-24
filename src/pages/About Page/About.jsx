import React from "react";
import "./About.css"; 

// import images from my pictures folder
import historyImg from "./pictures/history.png";
import missionImg from "./pictures/mission.png";
import valueImg from "./pictures/value.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="rectangle">
        <img src={historyImg} alt="History" className="icon" />
        <span>History</span>
      </div>
      <div className="rectangle">
        <img src={missionImg} alt="Mission" className="icon" />
        <span>Mission</span>
      </div>
      <div className="rectangle">
        <img src={valueImg} alt="Value" className="icon" />
        <span>Value</span>
      </div>
    </div>
  );
};

export default About;