import ItemDetail from "../itemDetail/ItemDetail";
import { item } from "../item/Item";
import { useState, useEffect } from "react";
;

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    const getItems = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(item);
        }, 2000);
      });
    };
  
    useEffect(() => {
      getItems().then((res) => {
        setProduct(res);
      });
    }, []);
    return(
        <div>
        <ItemDetail data={product}/>
        </div>
    )
}

export default ItemDetailContainer;