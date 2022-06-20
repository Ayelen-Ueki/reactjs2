import './ItemList.css';
import ItemCards from '../itemCards/ItemCards';

//Enlista los productos que son indicados a través de ItemListContainer y los muestra en forma de cartas
const ItemList = ({title, price, image, id, stock}) => {
  return (
    <div className="items">
          <div key={id} className="item">
            <ItemCards title={title} price={price} image={image} stock={stock} id={id}/>
          </div>      
    </div>
  );
};

export default ItemList;
