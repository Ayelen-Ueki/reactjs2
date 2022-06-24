import ItemCardDetail from "../itemCardDetail/ItemCardDetail";
import "./ItemDetail.css";

const ItemDetail = ({data}) =>
    {
      return(
        <div className="item">
            <ItemCardDetail data={data} />
        </div>
      )
    }
export default ItemDetail;
