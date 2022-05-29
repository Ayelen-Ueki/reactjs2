import "./ItemList.css";
import ItemOne from "../itemOne/ItemOne";

const ItemList = ({data}) => {
  return (
    <div>
      {data.map(({title, price, image, description, id}) => {
        return (
          <div key={id}>
            <ItemOne title={title} price={price} image={image} description={description}/>
          </div>      
        );
      })}
    </div>
  );
};

export default ItemList;
