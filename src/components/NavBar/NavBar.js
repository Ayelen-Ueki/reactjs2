import React, {useState} from "react";
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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const categories = ["alfajores", "cookies", "tortas"]
  return (
    <div>
      <Navbar expand="md" className="navbar">
        <NavbarBrand href="/">
          {/* Los Links nos van a permitir que al clickar sobre el objeto al que envuelven podamos viajar a las distintas páginas de nuestro sitio según lo indiquemos en el "to". Estas páginas van a estar definidas en donde llamamos a nuestras Routes */}
          <Link to="/">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
          <h1> Feelin'it Pastelería </h1>
        </NavbarBrand>
        <div>
          <Navbar color="faded">
            <Button>
              <Link className="link" to="/">
                Inicio
              </Link>
            </Button>
            <Button>
              <Link className="link" to="/Nosotros">
                Nosotros
              </Link>
            </Button>
            <Button>
              <Link className="link" to="/Recetas">
                Recetas
              </Link>
            </Button>
            <Button>
              <Link className="link" to="/Contacto">
                Contacto
              </Link>
            </Button>

            <div className="d-flex justify-content-center p-5">
              <Dropdown toggle={function noRefCheck() {}}>
                <DropdownToggle caret>Categorías</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link className="link" to="/category/Alfajores">
                      Alfajores
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link className="link" to="/category/Tortas">
                      Tortas
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link className="link" to="/category/Cookies">
                      Cookies
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              disableRipple
              style={{ backgroundColor: "transparent" }}
              variant="text"
              className="navbar__btn"
            >
              Productos
            </Button>
            <Menu>
              id="basic-menu" anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps=
              {{
                "aria-labelledby": "basic-button",
              }}
              {categories.map((category) => {
                return (
                  <MenuItem onClick={handleClose}>
                    <Link to={`/category/${category}`}>{category}</Link>
                  </MenuItem>
                );
              })}
            </Menu>
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
