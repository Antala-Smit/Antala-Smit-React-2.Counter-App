import React from "react";
import "./Counter.css";

const Counter = ({ Number, Plus, Minus, Reset }) => {
  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter App</h1>
      <h2 className="counter-display">Count: {Number}</h2>
      <button className="counter-button" onClick={() => Plus()}>
        +
      </button>
      <button
        className="counter-button"
        disabled={Number === 0}
        onClick={() => Minus()}
      >
        -
      </button>
      <button className="counter-button" onClick={() => Reset()}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
