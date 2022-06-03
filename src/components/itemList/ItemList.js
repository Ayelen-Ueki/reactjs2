import './ItemList.css';
import ItemCards from '../itemCards/ItemCards';

const ItemList = ({data}) => {
  return (
    <div className="items">
      {data.map(({title, price, image, description, id, stock}) => {
        return (
          <div key={id} className="item">
            <ItemCards title={title} price={price} image={image} description={description} stock={stock}/>
          </div>      
        );
      })}
    </div>
  );
};

export default ItemList;
