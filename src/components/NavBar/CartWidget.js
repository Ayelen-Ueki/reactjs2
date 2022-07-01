import * as React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
// import Menu from "@mui/material/Menu";
// import DeleteIcon from "@mui/icons-material/Delete";
import "./Cartwidget.css";

const CartWidget = () => {
  const { orderLength } = useContext(CartContext);
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    <div>
      <Link to="/cart">
        <Badge badgeContent={orderLength} color="primary">
          <ShoppingCartIcon color="action" />
        </Badge>
      </Link>
      {/* <>
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
                <div key={item.id}  className="cartitems">
                    <img src={item.image} alt="prod carrito"   className="image"/>
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
                <button style={{ cursor: "pointer" }} onClick={handleClose} className="finish">
                  Terminar compra
                </button>
              </Link>
            </div>
          </div>
        </Menu>
      </> */}
    </div>
  );
};

export default CartWidget;
