import { FaOpencart, FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="general">
      <FaShoppingCart size={40} title="Este es el carrito" color="#251240" />
      <div className="circulo">
        <span className="notificacion">7</span>
      </div>
    </div>
  );
};

export default CartWidget;
