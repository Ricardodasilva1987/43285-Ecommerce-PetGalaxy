import CartWidget from "../../common/cartwidget/cartWidget";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <img
        src="https://res.cloudinary.com/drids8rm1/image/upload/v1686842786/Proyecto%20Pet%20Galaxy/Logo_tienda_PET_GALAXY_dcholf.png"
        alt=""
      />

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
