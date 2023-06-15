import { FaOpencart } from "react-icons/fa";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="general">
      <FaOpencart size={40} title="Este es el carrito" />
      <div className="circulo">
        <span className="notificacion">7</span>
      </div>
    </div>
  );
};

export default CartWidget;
