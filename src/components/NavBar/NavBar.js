import React from 'react';
import {
  Navbar,
  NavbarBrand,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./NavBar.css";
import Logo from "../Imagenes/Logo.png";

const NavBar = () => {
    return(
       <div className="navbar">
      <Navbar expand="md" light>
        <NavbarBrand href="/" className="navBar">
          <img src={Logo} alt="logo" className="logo" />
          <h1> Feelin Pastelería </h1>
        </NavbarBrand>
        <div>
          <Navbar color="faded" light>
              <DropdownMenu right>
              <DropdownItem>
                 Inicio
                </DropdownItem>
                <DropdownItem>
                  Nosotros
                </DropdownItem>
                <DropdownItem>
                  Recetas
                </DropdownItem>
                <DropdownItem>
                  Contacto
                </DropdownItem>
              </DropdownMenu>
          </Navbar>
        </div>
      </Navbar>
        </div>
    )
}

export default NavBar;