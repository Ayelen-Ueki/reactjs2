import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import "./ItemCart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import CartOrder from "../pages/CarritoCompra";

//Son las cartas en las que se van a mostrar los productos
const ItemCart = () => {
  const { totalPrice, cartListItems, cartAmount, deleteProduct } =
    useContext(CartContext);
  return (
    <div>
      {cartListItems.length !== 0 ? (
      <>
      {cartListItems.map((item) => {
        return (
          <div className="itemCart">
            <Card>
              <CardImg alt="Card image cap" img src={item.image} width="100%" />
              <CardBody>
                <CardTitle tag="h5">{item.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Cantidad: {cartAmount}
                </CardSubtitle>
                <CardText>${totalPrice}</CardText>
                <div className="Buttons">
                <Button onClick={() => deleteProduct(item)}>
                  <DeleteIcon />
                </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        );
      })}
      {cartListItems.length !== 0 && <CartOrder/>}
      </>
):(
<h2>No tienes productos en tu carrito</h2>
)}
    </div>
  )
};

export default ItemCart;
