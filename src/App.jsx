import { useState } from "react";

import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";

function App() {
  const [saludo, setSaludo] = useState("Greetings");
  const cambiarSaludo = (nuevoNombre) => {
    setSaludo(nuevoNombre);
  };

  return (
    <div>
      <Navbar />

      <ItemListContainer saludo={saludo} cambiarSaludo={cambiarSaludo} />
    </div>
  );
}

export default App;
