import React from "react";
import ItemList from "../itemList/ItemList";
// import items from "../item/Item";
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

//Contiene todos los productos de la tienda y la funcionalidad para llamarlos desde nuestra "base de datos" (items)
//Los muestra a través del Item List, enviando los datos de los productos por props
const ItemListContainer = () => {
  // const [products, setProducts] = useState([]);
  // const getItems = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(items);
  //     }, 2000);
  //   });
  // };
  // useEffect(() => {
  //   getItems().then((res) => {
  //     setProducts(res);
  //   });
  // }, []);

  const [products, setProducts] = useState([]);
  const { category } = useParams();

  //   useEffect( () => {
  //     setProducts([])
  //     console.log()
  //     getProducts()
  //     .then( (productos) => {
  //         category ?  filterFirebase() : setProducts(productos)
  //     })
  // }, [])
  const getProducts = async () => {
    //productSnapshot nos va a traer nuestra lista de productos que cargamos a Firebase dentro de "feelinit"
    const productSnapshot = await getDocs(collection(db, "feelinit"));
    //Recorremos el Sanpshot para obtener cada uno de nuestro productos : los docs son cada uno de los productos que tenemos en nuestra collection
    const productList = productSnapshot.docs.map((doc) => {
      //Guardamos la data del doc en una variable
      let product = doc.data();
      //Para afectar un objeto y agregarle una propiedad nueva
      product.id = doc.id;
      return product;
    });
    //Devolvemos productList para poder utilizarlo en otra función
    return productList;
  };

  useEffect(() => {
    setProducts([]);
    getProducts().then((productos) => {
      category ? filterFirebase() : setProducts(productos);
    });
  }, [category]);

  const filterFirebase = async () => {
    const productRef = collection(db, "feelinit");
    // El primer category viene de firebase y el segundo del useParams
    const queryResult = query(productRef, where("category", "==", category));
    const querySnapshot = await getDocs(queryResult);
    const productList = querySnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });
    return setProducts(productList);
  };

  return (
    <div className="items">
      {products.map(({ title, price, image, id, stock }) => {
        return (
          <ItemList
            title={title}
            price={price}
            image={image}
            stock={stock}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default ItemListContainer;
