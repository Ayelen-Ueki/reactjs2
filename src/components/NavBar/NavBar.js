import React from "react";
import { Navbar, NavbarBrand, DropdownMenu, DropdownItem } from "reactstrap";
import "./NavBar.css";
import Logo from "../images/Logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="md" className="navbar">
        <NavbarBrand href="/">
        <Link to='/'><img src={Logo} alt="logo" className="logo" /></Link>
          <h1> Feelin'it Pastelería </h1>
        </NavbarBrand>
        <div>
          <Navbar color="faded">
            <DropdownMenu right>
              <DropdownItem><Link to='/'>Inicio</Link></DropdownItem>
              <DropdownItem><Link to='/Nosotros'>Nosotros</Link></DropdownItem>
              <DropdownItem><Link to='/Recetas'>Recetas</Link></DropdownItem>
              <DropdownItem><Link to='/Contacto'>Contacto</Link></DropdownItem>
            </DropdownMenu>
          </Navbar>
        </div>
        <Link to='/Cart'><CartWidget /></Link>
      </Navbar>
    </div>
  );
};

export default NavBar;
