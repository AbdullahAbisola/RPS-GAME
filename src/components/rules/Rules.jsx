import React from "react";
import close from "../../assets/closebtn.svg";
import rDisplay from "../../assets/rlaptop.svg";
import "./rules.css";
import "./index.js";
const Rules = () => {
  return (
    <div className="rps__rules-station">
      <div id="rule-index" className="rps__rules" >
        <div className="rps__rules-btn">
          <p>Rules</p>
        </div>
      </div>
      <div className="rps__rules-screen scale-in-right">
        <div className="rps__rules-screen__title">
          <h1>Rules</h1>
          <img id="close-btn" src={close} alt="Close Button" />
        </div>
        <div className="rps__rules-screen__display">
          <img src={rDisplay} alt="Game rules" />
        </div>
        <div id="my-backdrop"></div>
      </div>
    </div>
  );
};

export default Rules;
