import { createContext, useState } from "react";
import React from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartListItems, setCartListItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderLength, setOrderLength] = useState(0);
  const [cartAmount, setcartAmount] = useState(0);

  const addProductToCart = (product) => {
    let isInCart = cartListItems.find(
      (cartItems) => cartItems.id === product.id
    );
    setTotalPrice(totalPrice + product.price * product.quantity);
    setcartAmount(cartAmount + product.quantity );
    if (!isInCart) {
      setCartListItems((cartListItems) => [...cartListItems, product]);
      localStorage.setItem(
        "product",
        JSON.stringify([...cartListItems, product])
      );
    } else {
      isInCart.quantity += product.quantity;
      setCartListItems((cartListItems))
    }
    setOrderLength(cartListItems.length+1);
  };

  const deleteProduct = () => {
    setTotalPrice(0);
    setOrderLength(0);
    setCartListItems([]);
  };

  const cleanCartProducts = () => {
    setTotalPrice(0);
    setCartListItems([]);
  };

  const data = {
    cartListItems,
    setCartListItems,
    totalPrice,
    deleteProduct,
    orderLength,
    addProductToCart,
    cleanCartProducts,
    cartAmount
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartContext };
export default CartProvider;
