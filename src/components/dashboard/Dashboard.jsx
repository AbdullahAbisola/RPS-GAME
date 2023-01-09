import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="rps__dashboard">
      <div className="rps__dashboard-content">
        <h1 className="title">Rock</h1>
        <h1 className="title">Paper</h1>
        <h1 className="title">Scissors</h1>
      </div>
      <div className="rps__dashboard-welcome">
        <h1>Welcome To RPS</h1>
        <p>Click the Buttons to Start</p>
      </div>
      <div className="rps__dashboard-scoreboard">
        <h3>Score</h3>
        <p id="Score-el">0</p>
      </div>
    </div>
  );
};

export default Dashboard;
