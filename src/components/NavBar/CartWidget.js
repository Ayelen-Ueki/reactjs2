import * as React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";

const CartWidget = () => {
  const { orderLength, cartListItems, deleteProduct } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Badge badgeContent={orderLength} color="primary">
        <ShoppingCartIcon color="action" onClick={handleClick} />
      </Badge>
      <>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div>
            {orderLength === 0 && (
              <>
                <p>No hay productos agregados al carrito</p>
                <Link to="/products/Tortas">Empezar a comprar</Link>
              </>
            )}
            {cartListItems.map((item) => {
              return (
                <div key={item.id}>
                  <div>
                    {/* <img src={`/${item.image}`} alt="prod carrito" />
                     */}
                     <img src={item.image} alt="prod carrito"/>
                  </div>
                  <div>
                    <p>{item.title}</p>
                    <span>$ {item.price}</span>
                  </div>
                  <div>
                    <button onClick={() => deleteProduct(item)}>
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
              );
            })}
            <div>
              <Link to="/CarritoCompras">
                <button style={{ cursor: "pointer" }} onClick={handleClose}>
                  Terminar compra
                </button>
              </Link>
            </div>
          </div>
        </Menu>
      </>
    </div>
  );
};

export default CartWidget;
