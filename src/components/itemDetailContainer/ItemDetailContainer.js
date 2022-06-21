import ItemDetail from "../itemDetail/ItemDetail";
// import items from "../item/Item";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import db from "../firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState({});
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
  // useEffect(() => {
  //   setProduct(itemsFilter);
  // }, []);


  const getProduct = async() => {
    const docRef = doc(db, "productos", id)
    const docSnaptshop = await getDoc(docRef)
    let product = docSnaptshop.data()
    product.id = docSnaptshop.id
    return product
}


  useEffect(() => {   
    getProduct()
    .then( (prod) => {
        setProducts(prod)
    })
}, [id])

  // usamos find porque filter devuelve un objeto y find un array

  const itemsFilter = products.find((item) => {
    return item.id === item.doc.id;
  });

  itemsFilter()

  return (
    <div>
      <ItemDetail data={products}  />
    </div>
  );
};

export default ItemDetailContainer;
