import ItemDetail from "../itemDetail/ItemDetail";
import items from "../item/Item";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  // const getItems = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(item);
  //     }, 2000);
  //   });
  // };

  // useEffect(() => {
  //   getItems().then((res) => {
  //     setProduct(res);
  //   });
  // }, []);
  useEffect(() => {
    setProduct(itemsFilter);
  }, []);

  //usamos find porque filter devuelve un objeto y find un array
  const itemsFilter = items.find((item) => {
    //usamos solo 2 igual porque el id en items está como un number y el que nos trae de useParams es un string
    return item.id.toString() === id;
  });

  return (
    <div>
      <ItemDetail data={product} />
    </div>
  );
};

export default ItemDetailContainer;
