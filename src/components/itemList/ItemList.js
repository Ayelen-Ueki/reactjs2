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

const ItemList = ({data}) => {
  return (
    <div>
      {data.map((items) => {
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
            <ItemCount />
          </div>      
        );
      })}
    </div>
  );
};

export default ItemList;
