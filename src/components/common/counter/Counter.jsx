import React from "react";

const Counter = ({ sumar, restar, contador }) => {
  return (
    <div>
      <button onClick={sumar}>Sumar</button>
      <h3>{contador}</h3>
      <button onClick={restar}>Restar</button>
    </div>
  );
};

export default Counter;
