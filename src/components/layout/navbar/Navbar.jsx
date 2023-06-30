import CartWidget from "../../common/cartwidget/cartWidget";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="logo-logo">
        <img
          className="logo"
          src="https://res.cloudinary.com/drids8rm1/image/upload/v1686842786/Proyecto%20Pet%20Galaxy/Logo_tienda_PET_GALAXY_dcholf.png"
          alt="aqui va el logo"
        />
      </div>

      <ul className="categorias">
        <li>
          <a href="">Todas</a>
        </li>
        <li>
          <a href="">Alimentos</a>
        </li>
        <li>
          <a href="">Salud</a>
        </li>
        <li>
          <a href="">Correas y collares</a>
        </li>
        <li>
          <a href="">Juguetes</a>
        </li>
      </ul>

      <div>
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
