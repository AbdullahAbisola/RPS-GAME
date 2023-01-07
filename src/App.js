import React from "react";
import { Dashboard, GameFace, Rules } from "./components";
import { Lose, Win } from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="game__bg">
        <Dashboard />
        <GameFace />
        <Rules />
      </div>
    </div>
  );
};

export default App;
