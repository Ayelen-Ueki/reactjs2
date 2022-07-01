import React, {useContext, useState} from "react";
import { Button } from "reactstrap";
import "./ItemCount.css";
import { CartContext } from "../context/cartContext";


const ItemCount = ({ products, setShowButton}) => {
  const [count, SetCount] =useState(0)
  
  const { addProductToCart, setOrder } = useContext(CartContext);

  const addCount = () => {
    if (count < products.stock) {
      SetCount(count + 1);
    }
  };

  const removeCount = () => {
    SetCount(count - 1);
  };

  const addProduct=()=> {
    setShowButton(true)
    setOrder(count)
    const newProduct = products
    newProduct.cantidad = count
    addProductToCart(newProduct)
  }

  setOrder(count);

  return (
    <div>
      <div className="counter">
        <Button
          className="counterButton"
          onClick={removeCount}
          disabled={count === 0}
        >
          -
        </Button>
        <p>{count}</p>
        <Button className="counterButton" onClick={addCount}>
          +
        </Button>
      </div>
      <Button onClick={()=>addProduct()}> Comprar </Button>
    </div>
  );
};

export default ItemCount;
