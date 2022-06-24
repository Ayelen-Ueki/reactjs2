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

  useEffect(() => {   
    getProduct()
    .then( (prod) => {
        setProducts(prod)
    })
}, [id])

  const getProduct = async() => {
    const docRef = doc(db, "feelinit", id)
    const docSnaptshop = await getDoc(docRef)
    let product = docSnaptshop.data()
    product.id = docSnaptshop.id
    return product
}

  // usamos find porque filter devuelve un objeto y find un array

  // const itemsFilter = products.find((product) => {
  //   return products.id === product.doc.id;
  // });


  return (
    <div>
        {products.map(({ title, price, image, id, stock, category, description }) => (
        <ItemDetail
          title={title}
          price={price}
          image={image}
          stock={stock}
          id={id}
          category={category}
          description={description}
        />
      ))}
    </div>
  );
};

export default ItemDetailContainer;
