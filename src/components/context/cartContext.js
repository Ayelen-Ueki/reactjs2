import {createContext, useState} from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState ([]);
    const addProductToCart = (product) => {
        setCartListItems(cartListItems => [...cartListItems,product])
    }
    const data =  {
        cartListItems,
        setCartListItems,
        addProductToCart,
    }
    return(
        <CartContext.Provider value = {data}>
            {children}
        </CartContext.Provider>

    )
}

export {CartContext};
export default CartProvider;