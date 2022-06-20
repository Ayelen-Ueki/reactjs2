import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CartOrder = () => {
  const { totalPrice } = useContext(CartContext);
  return (<div>
    <p>{totalPrice}</p>
  </div>)
};
export default CartOrder;
