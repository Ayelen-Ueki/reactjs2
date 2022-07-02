import React, { useContext, useState } from "react";
import { Button } from "reactstrap";
import "./ItemCount.css";
import { CartContext } from "../context/cartContext";

const ItemCount = ({ products, setShowButton, showButton }) => {
  const [count, SetCount] = useState(0);

  const { addProductToCart, cartAmount } = useContext(CartContext);

  const [limite, setLimite] = useState(true);

  const addCount = () => {
    if (cartAmount <= products.stock) {
      if (count <= products.stock) {
        SetCount(count + 1);
      }
    }
  };

  const removeCount = () => {
    SetCount(count - 1);
  };

  const addProduct = () => {
    if (cartAmount <= products.stock) {
      setShowButton(!showButton);
      const newProduct = products;
      newProduct.quantity = count;
      addProductToCart(newProduct);
    } else {
      alert("Lo sentimos, ya no hay stock");
      setLimite(!limite);
      setShowButton(!showButton);
    }
  };

  return (
    <div>
      {limite ? (
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
          <Button onClick={() => addProduct() } disabled={count> products.stock}> Comprar </Button>{" "}
        </div>
      ) : (
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
          <Button onClick={() => addProduct()}> Comprar </Button>{" "}
          <p>Lo sentimos, ya no hay stock</p>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
