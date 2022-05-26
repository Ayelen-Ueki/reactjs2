import React, { useState } from 'react';
import { Button } from 'reactstrap';
import "./ItemCount.css";


const ItemCount = (stock) => {
    const [count, setCount] = useState(0);

    const addCount = () => {
      if (count < stock) {
        setCount(count + 1);
      }
    };
  
    const removeCount = () => {
      setCount(count - 1);
    };
  
return(
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
)
}

export default ItemCount;