import ItemDetail from "../itemDetail/ItemDetail";
// import items from "../item/Item";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
// import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
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
      .then( (product) => {
        setProducts(product)
      })
  }, [id])

    const getProduct = async() => {
      const docRef = doc(db, "feelinit", id)
      const docSnap = await getDoc(docRef)
      let product = docSnap.data()
      product.id=docSnap.id
      return product
  }

  // const getProducts = async () => {
  //   const productSnap = await getDocs(collection(db, "feelinit"));
  //   const productList = productSnap.docs.map((doc) => {
  //     let product = doc.data();
  //     product.id = doc.id;
  //     return product;
  //   });
  //   return productList;
  // };

  // useEffect(() => {
  //   setProducts([]);
  //   getProducts().then((productos) => {
  //     id ? filterFirebase() : setProducts(productos);
  //   });
  // }, [id]);
  // // usamos find porque filter devuelve un objeto y find un array

  // const filterFirebase = async () => {
  //   const productRef = collection(db, "feelinit");
  //   // El primer category viene de firebase y el segundo del useParams
  //   const queryResult = query(productRef, where("id", "==", id));
  //   const querySnapshot = await getDocs(queryResult);
  //   const productList = querySnapshot.docs.map((doc) => {
  //     let product = doc.data();
  //     product.id = doc.id;
  //     return product;
  //   });
  //   return setProducts(productList);
  // };

  return (
    <div>
      {id && (
        <div>
              <ItemDetail
                title={products.title}
                price={products.price}
                image={products.image}
                stock={products.stock}
                id={products.id}
                category={products.category}
                description={products.description}
              />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
