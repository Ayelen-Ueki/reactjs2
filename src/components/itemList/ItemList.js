import './ItemList.css';
import ItemOne from "../itemOne/ItemOne";

const ItemList = ({data}) => {
  return (
    <div className="items">
      {data.map(({title, price, image, description, id, stock}) => {
        return (
          <div key={id} className="item">
            <ItemOne title={title} price={price} image={image} description={description} stock={stock}/>
          </div>      
        );
      })}
    </div>
  );
};

export default ItemList;
