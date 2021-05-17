import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10}) => {
  //Hook useState
  const [counter, setCounter] = useState(value);

  //HandleAdd
  //   const handleAdd = (e) => {
  //     console.log(e);
  //   };

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSubstract = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      {/* <button onClick={(e) => handleAdd(e)}>+1</button> */}
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </>
  );
};

CounterApp.prototype = {
  value: PropTypes.number,
};

export default CounterApp;
