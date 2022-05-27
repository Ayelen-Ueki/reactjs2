import React from "react";
import ItemList from "../itemList/ItemList";
import "./ItemListContainer.css";
import items from "../item/Item";
import { useState, useEffect } from "react";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const getItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(items));
    }, 2000); 
  };

  useEffect(() => {
    getItems().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div className="container">
      <ItemList data={products}/>
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
