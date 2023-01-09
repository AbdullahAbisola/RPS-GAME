import React, { useState } from "react";
import Lines from "../../assets/Lines.svg";
import { Rock, Paper, Scissors } from "./imports.js";
import "./gameFace.css";

const GameFace = () => {
  // Use the useState hook to create a state variable called "display" and a setter function called "setDisplay"
  const [display, setDisplay] = useState(false);
  const [rock, setRock] = useState("rock");
  const [paper, setPaper] = useState("paper");
  const [scissors, setScissors] = useState("scissors");
  const random = Math.floor(Math.random() * 3 + 1);
  var count = 0;
  // Define the displayImage function that displays the player's face
  function displayImage(choice) {
    var imageElement = document.createElement("img");
    var buttonElement = document.createElement("button");
    var divElement = document.createElement("div");

    if (choice === "rock") {
      imageElement.src = Rock;
      buttonElement.classList.add("choice2");
      document.getElementById("you-el").style.width = "110px";
      document.getElementById("you-el").style.height = "110px";
      count = 2;
      console.log(count);
    } else if (choice === "paper") {
      imageElement.src = Paper;
      buttonElement.classList.add("choice1");
      document.getElementById("you-el").style.width = "110px";
      document.getElementById("you-el").style.height = "110px";
      count = 1;
      console.log(count);
    } else if (choice === "scissors") {
      imageElement.src = Scissors;
      buttonElement.classList.add("choice3");
      document.getElementById("you-el").style.width = "110px";
      document.getElementById("you-el").style.height = "110px";
      count = 3;
      console.log(count);
    }
    document.getElementById("you-el").innerHTML = "";
    document.getElementById("you-el").append(buttonElement);
    buttonElement.append(divElement);
    divElement.append(imageElement);
  }

  // Define the displayVideo function that displays the House's Face

  function displayHouse() {
    var imageElement = document.createElement("img");
    var buttonElement = document.createElement("button");
    var divElement = document.createElement("div");

    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (random === 1) {
          imageElement.src = Paper;
          buttonElement.classList.add("choice1");
          document.getElementById("house-el").style.width = "110px";
          document.getElementById("house-el").style.height = "110px";
          console.log("1");
        } else if (random === 2) {
          imageElement.src = Rock;
          buttonElement.classList.add("choice2");
          document.getElementById("house-el").style.width = "110px";
          document.getElementById("house-el").style.height = "110px";
          console.log("2");
        } else if (random === 3) {
          imageElement.src = Scissors;
          buttonElement.classList.add("choice3");
          document.getElementById("house-el").style.width = "110px";
          document.getElementById("house-el").style.height = "110px";
          console.log("3");
        }

        document.getElementById("house-el").innerHTML = "";
        document.getElementById("house-el").append(buttonElement);
        buttonElement.append(divElement);
        divElement.append(imageElement);
      }, 3000);
      resolve();
    });
  }

  function gameProcess() {
    setTimeout(() => {
      if ((count === 1) & (random === 2)) {
      console.log("Paper Beats Rock, Player Wins");
    } else if ((count === 2) & (random === 3)) {
      console.log("Rock Beats Scissors, Player Wins");
    } else if ((count === 3) & (random === 1)) {
      console.log("Scissors Beats Paper, Player Wins");
    } else if ((count === 2) & (random === 1)) {
      console.log("Paper Beats Rock, House Wins");
    } else if ((count === 3) & (random === 2)) {
      console.log("Rock Beats Scissors, House Wins");
    } else if ((count === 1) & (random === 3)) {
      console.log("Scissors Beats Paper, House Wins");
    } else if ((count === 1) & (random === 1)) {
      console.log("Draw, Nobody Wins");
    } else if ((count === 2) & (random === 2)) {
      console.log("Draw, Nobody Wins");
    } else if ((count === 3) & (random === 3)) {
      console.log("Draw, Nobody Wins");
    }
    }, 3000)
    
  }

  const changeScreen = (choice) => {
    // Use the setDisplay function to set the display state to true
    setDisplay(true);
    setRock("rock");
    setPaper("paper");
    setScissors("scissors");

    // Call the displayImage function with the choice parameter
    displayImage(choice);
    displayHouse()
      .then(gameProcess)
      .catch((error) => console.error(error));
  };

  return (
    <div className="rps__GameFace">
      <div
        className="rps__GameFace-game"
        style={{ display: display ? "none" : "flex" }}
      >
        <div className="rps__GameFace-Lines">
          <img src={Lines} alt="Triangle" />
        </div>
        <div className="rps__GameFace_circle-container">
          <button
            onClick={() => changeScreen("paper")}
            id="Paper"
            className="circle1"
            title={{ paper }}
          >
            <div>
              <img src={Paper} alt="Paper Circle" />
            </div>
          </button>
          <button
            onClick={() => changeScreen("rock")}
            id="Rock"
            className="circle2"
            title={{ rock }}
          >
            <div>
              <img src={Rock} alt="Rock Circle" />
            </div>
          </button>
          <button
            onClick={() => changeScreen("scissors")}
            id="Scissors"
            className="circle3"
            title={{ scissors }}
          >
            <div>
              <img src={Scissors} alt="Scissors Circle" />
            </div>
          </button>
        </div>
      </div>

      {/* Use the "display" state variable to set the display style of the selection page */}
      <div
        id="select"
        className="rps__selection"
        style={{ display: display ? "flex" : "none" }}
      >
        <div className="rps__selection1_house">
          <p>The House Picked</p>
          <div id="house-el"></div>
        </div>
        <div className="rps__selection1_you">
          <p>You Picked</p>
          <div id="you-el"></div>
        </div>
      </div>
      {/* End of Selection Screen */}
    </div>
  );
};

export default GameFace;
