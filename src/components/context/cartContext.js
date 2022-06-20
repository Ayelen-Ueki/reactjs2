import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children}) => {
  const [cartListItems, setCartListItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderLength, setOrderLength ] = useState(0);

  const addProductToCart = (product,) => {
    let isInCart = cartListItems.find(
      (cartItems) => cartItems.id === product.id
    );
    if (!isInCart) {
      setTotalPrice(totalPrice + product.price*product.cantidad)
      setCartListItems((cartListItems) => [...cartListItems, product]);
      setOrderLength(cartListItems.length)
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
    deleteProduct, 
    orderLength
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartContext };
export default CartProvider;
