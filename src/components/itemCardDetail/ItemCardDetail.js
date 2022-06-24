
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

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Contacto from "../pages/Contacto";

const ItemCardDetail = ({ title,
  price,
  image,
  stock,
  id,
  description, setOrder, order, setShowButton, open, handleOpen, handleClose, addProductToCart, showButton, style }) => {
    return(
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
              <Contacto title={title}
          price={price}
          image={image}
          stock={stock}
          id={id}
          description={description} />
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default ItemCardDetail;
