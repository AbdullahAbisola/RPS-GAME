import React from "react";
import Lines from "../../assets/Lines.svg";
import { Rock, Paper, Scissors } from "./imports.js";
import "./gameFace.css";
const GameFace = () => {
  return (
    <div className="rps__GameFace">
      <div className="rps__GameFace-Lines">
        <img src={Lines} alt="Triangle" />
      </div>
        <div className="rps__GameFace_circle-container">
          <button  id="Paper" className="circle1">
            <div>
              <img src={Paper} alt="Paper Circle" />
            </div>
          </button>
          <button id="Rock" className="circle2">
            <div>
              <img src={Rock} alt="Rock Circle" />
            </div>
          </button>
          <button id="Scissors" className="circle3">
            <div>
              <img src={Scissors} alt="Scissors Circle" />
            </div>
          </button>
      </div>
      <div className="rps__selection1">
        <div className="rps__selection1_house">
          <p>The House Picked</p>
          <div id="house-el"></div>
        </div>
        <div className="rps__selection1_you">
          <p>You Picked</p>
          <div id="you-el"></div>
        </div>
      </div>
    </div>
  );
};

export default GameFace;
