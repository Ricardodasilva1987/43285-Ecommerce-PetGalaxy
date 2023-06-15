import "./ItemListContainer.css";

const ItemListContainer = ({ saludo, cambiarSaludo }) => {
  //props enviadas desde App, probando enviar con estados (variables y funciones set)
  return (
    <div
      className="Saludo"
      onMouseOver={() => {
        cambiarSaludo("Haz hecho MouseOver!!!");
      }}
    >
      <h1> {saludo}</h1>
    </div>
  );
};

export default ItemListContainer;
