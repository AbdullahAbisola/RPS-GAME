import React from "react";
import { Dashboard, GameFace, Rules } from "./components";
import { Lose, Win, RadialAction } from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App section__padding dummy-container">
      <div className="z">
        <Dashboard />
        <GameFace />
        <Rules />
      </div>
    </div>
  );
};

export default App;
