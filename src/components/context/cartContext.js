import { createContext, useState } from "react";
import React from "react"

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

  const addProductToCart = (products) => {
    let isInCart = cartListItems.find(
      (cartItems) => cartItems.id === products.id
    );
    if (!isInCart) {
      setTotalPrice(totalPrice + products.price*order)
      setCartListItems((cartListItems) => [...cartListItems, products]);
      setOrderLength(cartListItems.length)
      console.log(products.price)
      console.log(cartListItems)
    }
    else{
      if (order < products.stock) {
        setOrder(order + 1);
      }
      else{
        alert("Ya no queda más stock del producto seleccionado")
      }
    }
  };

  const Sale = (products) => {
    setShowButton(true)
    addProductToCart(products)
  }

  const deleteProduct = (product) => {
    setCartListItems(cartListItems.filter( (cartProduct) => cartProduct.id !== product.id) )
}

  const data = {
    cartListItems,
    setCartListItems,
    totalPrice, 
    deleteProduct, 
    orderLength,
    order, 
    setOrder, 
    open, 
    showButton, 
    handleOpen, 
    handleClose, 
    setShowButton, 
    Sale
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartContext };
export default CartProvider;
