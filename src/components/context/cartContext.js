import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartListItems, setCartListItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProductToCart = (product) => {
    let isInCart = cartListItems.find(
      (cartItems) => cartItems.id === product.id
    );
    if (!isInCart) {
      setCartListItems((cartListItems) => [...cartListItems, product]);
    }
    else{
        setCartListItems(product.cantidad +1)
    }
  };
  const data = {
    cartListItems,
    setCartListItems,
    addProductToCart,
    totalPrice, 
    setTotalPrice,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartContext };
export default CartProvider;
