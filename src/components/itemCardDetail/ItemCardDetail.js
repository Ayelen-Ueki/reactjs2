import React, { useContext } from "react";
// import { Link } from "react-router-dom";
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
// import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
// import Contacto from "../pages/Contacto";

const ItemCardDetail = ({
  title,
  price,
  image,
  stock,
  id,
  description,
  // style,
  products,
}) => {
  const {
    // handleOpen,
    // handleClose,
    showButton,
    addProductToCart,
    // open,
    // totalPrice,
  } = useContext(CartContext);
  return (
    <div>
      <Card>
        <CardImg alt="Card image cap" img src={image} width="100%" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {description}
          </CardSubtitle>
          <CardText>${price}</CardText>
        </CardBody>
      </Card>
      {/* Condicional ternario. El signo de admiración al principio niega lo que le sigue} */}
      {!showButton ? (
        <ItemCount stock={stock} price={price} id={id} />
      ) : (
        <div>
          {/* <p>Total: {totalPrice}</p> */}
          <Button
            onClick={addProductToCart(products)}
          >
            {/* <Link to="/Carrito"> */}
              Finalizar Compra
            {/* </Link> */}
          </Button>
          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Contacto
                title={title}
                price={price}
                image={image}
                stock={stock}
                id={id}
                description={description}
              />
            </Box>
          </Modal> */}
        </div>
      )}
    </div>
  );
};

export default ItemCardDetail;
