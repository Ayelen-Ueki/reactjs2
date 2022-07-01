import ItemCardDetail from "../itemCardDetail/ItemCardDetail";
// import items from "../item/Item";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
// import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import "./itemDetailContainer.css";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProduct().then((product) => {
      setProducts(product);
    });
  }, [id]);

  const getProduct = async () => {
    const docRef = doc(db, "feelinit", id);
    const docSnap = await getDoc(docRef);
    let product = docSnap.data();
    product.id = docSnap.id;
    return product;
  };

  return (
    <div className="itemCardDetail">
      {id && (
        <div>
          <ItemCardDetail products={products} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
