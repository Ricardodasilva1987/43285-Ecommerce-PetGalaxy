import { useState } from "react";

function Home({ nombre, apellido }) {
  //const x = useState(); //es una arreglo con dos elemento [variable, funcion(que modifica la variable)]
  //console.log(x);
  //Desestructuramos y queda asi:
  const [contador, setContador] = useState(0); //es una arreglo con dos elemento [variable, funcion(que modifica la variable)]
  const [name, setName] = useState("pepe");

  //desestructuro Objetos para trabajar con los props

  return (
    <div>
      <h3>
        Propiedad prop {nombre} {apellido}
      </h3>
      <h1> Este es el home </h1>
      <h3>El contador esta en {contador}</h3>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Boton sumar
      </button>
      <h3>El nombre original es: {name}</h3>
      <button
        onClick={() => {
          setName("Maria");
        }}
      >
        Cambiar el nombre a maria
      </button>
    </div>
  );
}

export default Home;
