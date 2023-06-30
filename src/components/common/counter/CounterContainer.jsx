import React, { useState } from "react";
import Counter from "./Counter";

const CounterContainer = () => {
  const [contador, setContador] = useState(0); //hook
  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };
  return (
    <div>
      <Counter contador={contador} sumar={sumar} restar={restar} />
    </div>
  );
};

export default CounterContainer;
