import React, { useState, useContext } from "react";
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
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Contacto from "../pages/Contacto";

const ItemCardDetail = ({ data }) => {
  const {title, price, image, description, stock, id} = data; 

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [order, setOrder] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const { addProductToCart } = useContext(CartContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      {/* Condicional ternario. El signo de admiraci{on al principio niega lo que le sigue} */}
      {!showButton ? (
        <ItemCount
          stock={stock}
          setOrder={setOrder}
          order={order}
          setShowButton={setShowButton}
        />
      ) : (
        <div>
          <Button
            onClick={() =>
              addProductToCart([
                title,
                price,
                image,
                description,
                stock,
                id,
                order,
              ])
            }
          >
            <Link to="/Carrito" onClick={handleOpen}>
              Finalizar Compra
            </Link>
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Contacto data = {data}/>
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default ItemCardDetail;
