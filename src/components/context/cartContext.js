import { createContext, useState } from "react";
import React from "react";

const CartContext = createContext();

const CartProvider = ({ children}) => {
  const [cartListItems, setCartListItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderLength, setOrderLength ] = useState(0);
  const [order, setOrder] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addProductToCart = (product) => {
    let isInCart = cartListItems.find(
      (cartItems) => cartItems.id === product.id
    );
    if (!isInCart) {
      setTotalPrice(totalPrice + product.price*product.order)
      setCartListItems((cartListItems) => [...cartListItems, product]);
      setOrderLength(cartListItems.length)
    }
    else{
        setCartListItems(product.order +1)
    }
  };

  const deleteProduct = (product) => {
    setCartListItems(cartListItems.filter( (cartProduct) => cartProduct.id !== product.id) )
}

  const data = {
    cartListItems,
    setCartListItems,
    addProductToCart,
    totalPrice, 
    deleteProduct, 
    orderLength,
    order, 
    setOrder, 
    open, 
    showButton, 
    handleOpen, 
    handleClose, 
    setShowButton
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartContext };
export default CartProvider;
