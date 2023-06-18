import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";

function App() {
  const [greeting, setGreeting] = useState("Hola Como estas?");
  const cambiarSaludo = (nuevoNombre) => {
    setGreeting(nuevoNombre);
  };

  return (
    <div>
      <Navbar />

      <ItemListContainer greeting={greeting} cambiarSaludo={cambiarSaludo} />
    </div>
  );
}

export default App;
