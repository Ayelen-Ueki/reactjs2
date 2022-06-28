import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button
  } from "reactstrap";
  import { Link } from "react-router-dom";
  
  //Son las cartas en las que se van a mostrar los productos
  const ItemCards = ({title, totalPrice, image, description, id}) => {
      return (
          <div>
            <Card>  
              <CardImg alt="Card image cap" img src={image} width="100%" />
              <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {description}
                </CardSubtitle>
                <CardText>${totalPrice}</CardText>
                <Button>
                  <Link style={{textDecoration: 'none', color: "black"}} to={`/product/${id}`}>Ver detalle</Link>
                  </Button>
              </CardBody>
            </Card>
          </div>      
        );
  }
  
  export default ItemCards;