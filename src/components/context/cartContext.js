import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children}) => {
  const [cartListItems, setCartListItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProductToCart = (product,) => {
    let isInCart = cartListItems.find(
      (cartItems) => cartItems.id === product.id
    );
    if (!isInCart) {
      setTotalPrice(totalPrice + product.price)
      setCartListItems((cartListItems) => [...cartListItems, product]);
    }
    else{
        setCartListItems(product.cantidad +1)
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
    setTotalPrice,
    deleteProduct, 
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartContext };
export default CartProvider;
