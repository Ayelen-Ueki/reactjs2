import './ItemList.css';
import ItemCards from '../itemCards/ItemCards';

//Enlista los productos que son indicados a través de ItemListContainer y los muestra en forma de cartas
const ItemList = ({data}) => {
  return (
    <div className="items">
      {data.map(({title, price, image, description, id, stock, category}) => {
        return (
          <div key={id} className="item">
            <ItemCards title={title} price={price} image={image} description={description} stock={stock} id={id} category={category}/>
          </div>      
        );
      })}
    </div>
  );
};

export default ItemList;
