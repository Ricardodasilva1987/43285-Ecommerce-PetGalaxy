import { useState } from "react";

import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";

function App() {
  const [saludo, setSaludo] = useState("Greetings");

  return (
    <div>
      <Navbar />

      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;
