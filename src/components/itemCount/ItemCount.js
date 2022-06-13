import React from "react";
import { Button } from "reactstrap";
import "./ItemCount.css";


const ItemCount = ({ stock, setOrder, order, setShowButton }) => {
  const addCount = () => {
    if (order < stock) {
      setOrder(order + 1);
    }
  };

  const removeCount = () => {
    setOrder(order - 1);
  };

  return (
    <div>
      <div className="counter">
        <Button
          className="counterButton"
          onClick={removeCount}
          disabled={order === 0}
        >
          -
        </Button>
        <p>{order}</p>
        <Button className="counterButton" onClick={addCount}>
          +
        </Button>
      </div>
      <Button onClick={()=>setShowButton(true)}> Comprar </Button>
    </div>
  );
};

export default ItemCount;
