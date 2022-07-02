import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import ItemCount from "../itemCount/ItemCount";
import { CartContext } from "../context/cartContext";

const ItemCardDetail = ({ products }) => {
  const { totalPrice } = useContext(CartContext);
  const [showButton, setShowButton] = useState(false);
  return (
    <div className="itemDetail">
      <Card>
        <CardImg alt="Card image cap" img src={products.image} width="100%" />
        <CardBody>
          <CardTitle tag="h5">{products.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {products.description}
          </CardSubtitle>
          <CardText>${products.price}</CardText>
        </CardBody>
      </Card>
      {/* Condicional ternario. El signo de admiración al principio niega lo que le sigue} */}
      {!showButton ? (
        <ItemCount products={products} setShowButton={setShowButton} />
      ) : (
        <div>
          <p>Total a Pagar: $ {totalPrice}</p>
          <Button>
            <Link to="/cart">Finalizar Compra</Link>
          </Button>
          <Link to="/">
            <Button>Seguir comprando</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemCardDetail;
