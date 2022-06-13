import "./ItemList.css";
import ItemCards from "../itemCards/ItemCards";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartListItems } = useContext();
  {
    cartListItems.length === 0 && (
      <>
        <p>Aún no hay productos agregados</p>
        <Link to="/Inicio">¿Quieres ver nuestro catálogo?</Link>
      </>
    )
  }
  {cartListItems.map(({ title, price, image, description, id, stock }) => {
  return (
    <div className="items">
      
        return (
          <div key={id} className="item">
            <ItemCards
              title={title}
              price={price}
              image={image}
              description={description}
              stock={stock}
              id={id}
            />
          </div>
        );

    </div>
  )
})}
}

export default Cart;