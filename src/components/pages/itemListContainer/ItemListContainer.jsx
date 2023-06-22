import "./ItemListContainer.css";
import Typography from "@mui/material/Typography";

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
      <Typography variant="h1" sx={{ fontSize: { xs: "3rem", md: "5rem" } }}>
        {greeting}
      </Typography>
    </div>
  );
};

export default ItemListContainer;
