import React from "react";
import ItemList from "../itemList/ItemList";
import items from "../item/Item";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

//Contiene todos los productos de la tienda y la funcionalidad para llamarlos desde nuestra "base de datos" (items)
//Los muestra a través del Item List, enviando los datos de los productos por props
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { category } = useParams();

  // const getItems = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(items);
  //     }, 2000);
  //   });
  // };

  const getProducts = async  () => {
    //productSnapshot nos va a traer nuestra lista de productos que cargamos a Firebase dentro de "feelinit"
    const productSnapshot = await getDocs(collection(db, "feelinit"));
    //Recorremos el Sanpshot para obtener cada uno de nuestro productos : los docs son cada uno de los productos que tenemos en nuestra collection
    const productList = productSnapshot.docs.map((doc)=>{
      //Guardamos la data del doc en una variable
      let product = doc.data()
      //Para afectar un objeto y agregarle una propiedad nueva
      product.id=doc.id
      return product
    })
    //Devolvemos productList para poder utilizarlo en otra función
    return productList
  };

  const itemsFilterCategories = items.find((item) => {
    return item.category.toString() === category;
  });

  // useEffect(() => {
  //   getItems().then((res) => {
  //     setProducts(res);
  //   });
  // }, []);

  useEffect(() => {
    setProducts([])
    getProducts().then((products) => {
      category ? itemsFilterCategories(products, category) : setProducts(products)
      
    });
  }, []);


  useEffect(() => {
    setCategories(itemsFilterCategories);
  }, []);

  return (
    <div className="container">
      <ItemList data={{ products, categories }} />
      {/* <ItemList
      image={'alfajorcitos.png'}
      title={'Alfajorcitos'}
      price={600}
      description={'Deliciosos alfajorcitos de dulce de leche. (Precio por docena)'}
      className="cards"
      stock={15}
      />
      <ItemList
      image={'veganCookies.png'}
      title={'Cookies'}
      price={840}
      description={'Cookies veganas. (Precio por docena)'}
      className="cards"
      stock={10}
      />
      <ItemList
      image={'tortaMocha.png'}
      title={'Tortas'}
      price={1800}
      description={'Torta mocha. (Precio unitario)'}
      className="cards"
      stock={5}
      /> */}
    </div>
  );
};

export default ItemListContainer;
