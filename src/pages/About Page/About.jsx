import React, { useState } from "react";
import "./About.css";

import historyImg from "./pictures/history.png";
import missionImg from "./pictures/mission.png";
import valueImg from "./pictures/value.png";

const About = () => {
  // state for each dropdown
  const [showHistory, setShowHistory] = useState(false);
  const [showMission, setShowMission] = useState(false);
  const [showValue, setShowValue] = useState(false);

  return (
    <div className="about-container">
      {/* History */}
      <div
        className={`rectangle ${showHistory ? "active" : ""}`}
        onClick={() => setShowHistory(!showHistory)}
      >
        <img src={historyImg} alt="History" className="icon" />
        <span>History</span>
      </div>
      {showHistory && (
        <div className="dropdown">
          <p>
            Our history goes back to the founding of WiCyS, where women in
            cybersecurity came together to build a supportive community...
          </p>
        </div>
      )}

      {/* Mission */}
      <div
        className={`rectangle ${showMission ? "active" : ""}`}
        onClick={() => setShowMission(!showMission)}
      >
        <img src={missionImg} alt="Mission" className="icon" />
        <span>Mission</span>
      </div>
      {showMission && (
        <div className="dropdown">
          <p>
            Our mission is to foster a strong cybersecurity community by
            empowering and supporting women across all stages of their careers.
          </p>
        </div>
      )}

      {/* Value */}
      <div
        className={`rectangle ${showValue ? "active" : ""}`}
        onClick={() => setShowValue(!showValue)}
      >
        <img src={valueImg} alt="Value" className="icon" />
        <span>Value</span>
      </div>
      {showValue && (
        <div className="dropdown">
          <p>
            Our values include collaboration, diversity, inclusion, and a shared
            commitment to advancing cybersecurity together.
          </p>
        </div>
      )}
    </div>
  );
};

export default About;