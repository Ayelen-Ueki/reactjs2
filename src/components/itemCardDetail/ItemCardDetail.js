import { Button } from "bootstrap";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
  } from "reactstrap";
  import ItemCount from "../itemCount/ItemCount";
  import { CartContext } from "../context/cartContext";
  
  const ItemCardDetail = ({title, price, image, description, stock}) => {
    const [order, setOrder] = useState(0);
    const [showButton, setShowButton] = useState(false)
    const {addProductToCart} = useContext (CartContext)
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
            {/* Condicional ternario. El signo de admiraci{on al principio niega lo que le sigue} */}
            {!showButton ?
            <ItemCount stock={stock} setOrder={setOrder} order={order} setShowButton={setShowButton}/> :
            <Button onClick = {()=> addProductToCart([title, price, image, description, stock])}><Link to='/cart'>Finalizar Compra</Link></Button>}
            
          </div>      
        );
  }
  
  export default ItemCardDetail;