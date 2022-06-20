import React from "react";
import { Navbar, NavbarBrand} from "reactstrap";
import "./NavBar.css";
import Logo from "../images/Logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

const NavBar = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Navbar expand="md" className="navbar">
        <NavbarBrand>
          {/* Los Links nos van a permitir que al clickar sobre el objeto al que envuelven podamos viajar a las distintas páginas de nuestro sitio según lo indiquemos en el "to". Estas páginas van a estar definidas en donde llamamos a nuestras Routes */}
          <Link to="/">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
          <h1> Feelin'it Pastelería </h1>
        </NavbarBrand>
        <div>
          <Navbar color="faded">
            <Link className="link" to="/">
              Inicio
            </Link>
            <Link className="link" to="/Nosotros">
              Nosotros
            </Link>
            <Link className="link" to="/Recetas">
              Recetas
            </Link>
            <Link className="link" to="/Contacto">
              Contacto
            </Link>
            <Link className="carrito" to="/Carrito">
              <CartWidget />
            </Link>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Categorías" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <Link to="/Alfajores" className="categories"><ListItemButton sx={{ pl: 4 }}>
                  <ListItemText >Alfajores</ListItemText>
                </ListItemButton></Link>
                <Link to="/Cookies" className="categories"><ListItemButton sx={{ pl: 4 }}>
                  <ListItemText>Cookies</ListItemText>
                </ListItemButton></Link>
                <Link to="/Tortas" className="categories"><ListItemButton sx={{ pl: 4 }}>
                  <ListItemText>Tortas</ListItemText>
                </ListItemButton></Link>
              </List>
            </Collapse>
          </Navbar>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
