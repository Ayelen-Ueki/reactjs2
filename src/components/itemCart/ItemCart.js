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

//Son las cartas en las que se van a mostrar los productos
const ItemCart = () => {
  const { totalPrice, cartListItems, order } = useContext(CartContext)
  return(
    <div>
  {cartListItems.map((item) => {
  return(
    <div className="itemCart">
      <Card>
        <CardImg
          alt="Card image cap"
          img
          src={item.image}
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">{item.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Cantidad: {order}
          </CardSubtitle>
          <CardText>${totalPrice}</CardText>
          <Button>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/product/${item.id}`}
            >
              Ver detalle
            </Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  )
   })}
   </div>
   )
};

export default ItemCart;
