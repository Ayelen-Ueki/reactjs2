import ItemCardDetail from "../itemCardDetail/ItemCardDetail";
import "./ItemDetail.css";
import React, { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";

const ItemDetail = ({ title,
  price,
  image,
  stock,
  id,
  category, 
  description}) =>
    {
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

        <div className="item">
            <ItemCardDetail  title={title}
          price={price}
          image={image}
          stock={stock}
          id={id}
          category={category}
          description={description}
          setOrder={setOrder}
          order={order}
          setShowButton={setShowButton}
          showButton = {showButton}
          addProductToCart = {addProductToCart}
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
          style={style}
          />
          
        </div>
      )
    }
export default ItemDetail;
