import React from "react";
import {
  Navbar,
  NavbarBrand,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownToggle,
  Button,
} from "reactstrap";
import "./NavBar.css";
import Logo from "../images/Logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="md" className="navbar">
        <NavbarBrand href="/">
          {/* Los Links nos van a permitir que al clickar sobre el objeto al que envuelven podamos viajar a las distintas páginas de nuestro sitio según lo indiquemos en el "to". Estas páginas van a estar definidas en donde llamamos a nuestras Routes */}
          <Link to="/">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
          <h1 > Feelin'it Pastelería </h1>
        </NavbarBrand>
        <div>
          <Navbar color="faded">
            <Button>
              <Link className="link" to="/">Inicio</Link>
            </Button>
            <Button>
              <Link className="link"  to="/Nosotros">Nosotros</Link>
            </Button>
            <Button>
              <Link className="link"  to="/Recetas">Recetas</Link>
            </Button>
            <Button>
              <Link className="link"  to="/Contacto">Contacto</Link>
            </Button>

            <div className="d-flex justify-content-center p-5">
              <Dropdown toggle={function noRefCheck() {}}>
                <DropdownToggle caret>Categorías</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link className="link"  to="/category/Alfajores">Alfajores</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link className="link"  to="/category/Tortas">Tortas</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link className="link"  to="/category/Cookies">Cookies</Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </Navbar>
        </div>
        <Link to="/Carrito">
          <CartWidget />
        </Link>
      </Navbar>
    </div>
  );
};

export default NavBar;
