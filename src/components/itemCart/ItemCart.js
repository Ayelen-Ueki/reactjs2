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

//Son las cartas en las que se van a mostrar los productos
const ItemCart = () => {
  const { totalPrice, cartListItems, order, deleteProduct } =
    useContext(CartContext);
  return (
    <div>
      {cartListItems.map((item) => {
        return (
          <div className="itemCart">
            <Card>
              <CardImg alt="Card image cap" img src={item.image} width="100%" />
              <CardBody>
                <CardTitle tag="h5">{item.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Cantidad: {order}
                </CardSubtitle>
                <CardText>${totalPrice}</CardText>
                <div className="Buttons">
                <Button>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/product/${item.id}`}
                  >
                    Ver detalle
                  </Link>
                </Button>
                <Button onClick={() => deleteProduct(item)}>
                  <DeleteIcon />
                </Button>
                <Link to="/CarritoCompras">
                <Button style={{ cursor: "pointer" }} className="finish">
                Finalizar
                </Button>
                </Link>
                </div>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCart;
