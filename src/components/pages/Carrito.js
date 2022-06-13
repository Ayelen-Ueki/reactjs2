import './ItemList.css';
import ItemCards from '../itemCards/ItemCards';
import { useContext } from 'react';

const Cart = () => {
    const{cartListItems}=useContext();
  return (
    <div className="items">
      {cartListItems.map(({title, price, image, description, id, stock}) => {
        return (
          <div key={id} className="item">
            <ItemCards title={title} price={price} image={image} description={description} stock={stock} id={id}/>
          </div>      
        );
      })}
    </div>
  );
};

export default Cart;