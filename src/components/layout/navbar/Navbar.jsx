import CartWidget2 from "../../common/cartWidget/CartWidget2";
import "./Navbar.css";

const Navbar = ({ children }) => {
  return (
    <>
      {/*se coloca un fragment para probar los de los children*/}
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

        <div className="cart">
          <CartWidget2 />
        </div>
      </div>
      {children}
    </>
  );
};

export default Navbar;
