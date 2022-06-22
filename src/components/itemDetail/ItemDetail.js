import ItemCardDetail from "../itemCardDetail/ItemCardDetail";
import "./ItemDetail.css";

const ItemDetail = ({data, itemsFilter}) =>
    {
      return(
        <div className="item">
            <ItemCardDetail data={data} itemsFilter={itemsFilter} />
        </div>
      )
    }
export default ItemDetail;
