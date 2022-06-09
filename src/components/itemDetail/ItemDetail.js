import ItemCardDetail from "../itemCardDetail/ItemCardDetail";
import "./ItemDetail.css";

const ItemDetail = ({data}) =>
    {
      return(
        <div className="item">
            <ItemCardDetail title={data.title} price={data.price} image={data.image} description={data.description} stock={data.stock} id={data.id} />
        </div>
      )
    }
export default ItemDetail;
