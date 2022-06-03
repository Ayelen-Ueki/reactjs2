import ItemCount from "../itemCount/ItemCount";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

const ItemCards = ({title, price, image, description, stock}) => {
    return (
        <div>
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
          <ItemCount stock={stock}/>
        </div>      
      );
}

export default ItemCards;