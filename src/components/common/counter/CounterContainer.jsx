import React, { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1); //hook
  const sumar = () => {
    contador < stock ? setContador(contador + 1) : alert("Cantidad Maxima");
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1); //forma de if con el dobleanperson
  };
  return (
    <div>
      <Counter contador={contador} sumar={sumar} restar={restar} />
    </div>
  );
};

export default CounterContainer;
