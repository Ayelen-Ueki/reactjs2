import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import "./ItemList.css";
import { useState } from "react";

const ItemList = ({ image, title, price, description, stock }) => {
  //En este item recibo las propiedades de cada tarjeta para mostrarlo, es un componente de presentación.
  const [count, setCount] = useState(0);

  const addCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const removeCount = () => {
    setCount(count - 1);
  };

  return (
    <Card>
      <CardImg
        alt="Card image cap"
        img
        src={`../images/${image}`}
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {description}
        </CardSubtitle>
        <CardText>{price}</CardText>
        <div className="counter">
          <Button
            className="counterButton"
            onClick={removeCount}
            disabled={count === 0}
          >
            -
          </Button>
          <p>{count}</p>
          <Button className="counterButton" onClick={addCount}>
            +
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ItemList;
