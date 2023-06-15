import CartWidget from "../../common/cartwidget/cartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="Logo">
        <img src="" alt="" />
        Galaxy Pet
      </div>

      <ul className="categorias">
        <li>Todas</li>
        <li>Alimentos</li>
        <li>Salud</li>
        <li>Correas y collares</li>
        <li>Juguetes</li>
        <li>Vestuario</li>
      </ul>

      <div>
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
