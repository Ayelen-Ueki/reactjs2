import ItemCards from "../itemCards/ItemCards";
import "./ItemDetail.css";

const ItemDetail = ({data}) =>
    {
      return(
        <div className="item">
            <ItemCards title={data.title} price={data.price} image={data.image} description={data.description} stock={data.stock} />
        </div>
      )
    }
export default ItemDetail;
