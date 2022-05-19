import React from 'react';
import {NavItem} from 'reactstrap';
import iconoCarrito from "../Imagenes/iconoCarrito.png";
import "./NavBar.css";

const CartWidget = () =>{
    return(
        <div>
        <NavItem>
        <img src={iconoCarrito} alt="logo" className='cart' />
        </NavItem>
        </div>
    )
}

export default CartWidget;