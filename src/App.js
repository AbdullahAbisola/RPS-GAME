import React from "react";
import { Dashboard, GameFace, Rules } from "./components";
import { Lose, Win, RadialAction } from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <Dashboard />
        <GameFace />
        <Rules />
      </div>
    </div>
  );
};

export default App;
