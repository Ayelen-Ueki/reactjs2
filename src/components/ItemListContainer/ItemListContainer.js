import React from "react";
import ItemList from "../itemList/ItemList";
import items from "../item/Item";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { category } = useParams();

  const getItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items);
      }, 2000);
    });
  };

  const itemsFilterCategories = items.find((item) => {
    return item.category.toString() === category;
  });

  useEffect(() => {
    getItems().then((res) => {
      setProducts(res);
    });
  }, []);

  useEffect(() => {
    setCategories(itemsFilterCategories);
  }, []);


  return (
    <div className="container">
      <ItemList data={{products, categories}} />
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
