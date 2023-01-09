import React, { useState } from "react"
import close from "../../assets/closebtn.svg"
import rDisplay from "../../assets/rlaptop.svg"
import "./rules.css"

const Rules = () => {
  const [ruleToggle, setRuleToggle] = useState(false);

  const toggleSwitch = () => {
    setRuleToggle(!ruleToggle);
  }

  return (
    <div className="rps__rules-station">
      <div onClick={toggleSwitch} id="rule-index" className="rps__rules" >
        <div className="rps__rules-btn">
          <p>Rules</p>
        </div>
      </div>
      <div className="rps__rules-screen scale-in-right" style={{ display: ruleToggle ? 'flex' : 'none' }}>
        <div className="rps__rules-screen__title">
          <h1>Rules</h1>
          <img onClick={toggleSwitch} id="close-btn" src={close} alt="Close Button" />
        </div>
        <div className="rps__rules-screen__display">
          <img src={rDisplay} alt="Game rules" />
        </div>
      </div>
      <div id="my-backdrop" className="gradient__bg full-screen" style={{ display: ruleToggle ? 'block' : 'none' }}></div>
    </div>
  )
}

export default Rules;
