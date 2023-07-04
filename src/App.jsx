import Navbar from "./components/layout/navbar/Navbar";

import ItemListContainer from "./components/pages/home/itemList/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar>
        <ItemListContainer />
      </Navbar>
    </div>
  );
}

export default App;
