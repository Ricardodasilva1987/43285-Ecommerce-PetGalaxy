import { useEffect, useState, React } from "react";
import ItemList from "./ItemList";
import { products } from "../../../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  //Se coloca todo la promesa en el useEffect para generarla solo una vez
  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      //reject("salio todo mal");
    });
    tarea.then((res) => setItems(res)).catch((error) => setError(error));
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
