import "./ItemListContainer.css";

const ItemListContainer = ({ greeting, cambiarSaludo }) => {
  //props enviadas desde App, probando enviar con estados (variables y funciones set)

  return (
    <div
      className="Saludo"
      onMouseOver={() => {
        cambiarSaludo("Hola este es otro saludo");
      }}
      onMouseOut={() => {
        cambiarSaludo("Hola Como estas? ");
      }}
    >
      <h1> {greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
