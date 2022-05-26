import "./ItemList.css";
import ItemCount from "../itemCount/ItemCount";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { useState, useEffect } from "react";

const ItemList = () => {
  const [item, setItem] = useState({});

  const getItems = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(item));
    }, 2000);
  };

  useEffect(() => {
    getItems().then((res) => {
      setItem(res);
    });
  }, []);

  return (
    <div>
      {item.map((items) => {
        const { title, price, image, description, id } = items;
        return (
          <div key={id}>
            <Card>
              <CardImg alt="Card image cap" img src={image} width="100%" />
              <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {description}
                </CardSubtitle>
                <CardText>{price}</CardText>
              </CardBody>
            </Card>
          </div>
        );
      })}
      <ItemCount />
    </div>
  );
};

export default ItemList;
