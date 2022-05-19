import React from "react";
import { Navbar, NavbarBrand, DropdownMenu, DropdownItem } from "reactstrap";
import "./NavBar.css";
import Logo from "../Imagenes/Logo.png";
import CartWidget from "../CartWidget";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="md" className="navbar">
        <NavbarBrand href="/">
          <img src={Logo} alt="logo" className="logo" />
          <h1> Feelin'it Pastelería </h1>
        </NavbarBrand>
        <div>
          <Navbar color="faded">
            <DropdownMenu right>
              <DropdownItem>Inicio</DropdownItem>
              <DropdownItem>Nosotros</DropdownItem>
              <DropdownItem>Recetas</DropdownItem>
              <DropdownItem>Contacto</DropdownItem>
            </DropdownMenu>
          </Navbar>
        </div>
        <CartWidget />
      </Navbar>
    </div>
  );
};

export default NavBar;
