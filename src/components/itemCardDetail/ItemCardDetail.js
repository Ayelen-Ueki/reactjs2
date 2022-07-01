import React, { useContext } from "react";
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
  const {
    showButton,
    setShowButton,
  } = useContext(CartContext);
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
          <Button>
            <Link to="/cart">Finalizar Compra</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ItemCardDetail;
