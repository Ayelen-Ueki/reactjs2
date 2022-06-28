import ItemCardDetail from "../itemCardDetail/ItemCardDetail";
import "./ItemDetail.css";

const ItemDetail = ({ title,
  price,
  image,
  stock,
  id,
  category, 
  description,
  products}) =>
    {
      const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      };
      return (

        <div className="item">
            <ItemCardDetail  title={title}
          price={price}
          image={image}
          stock={stock}
          id={id}
          category={category}
          description={description}
          style={style}
          products={products}
          />
          
        </div>
      )
    }
export default ItemDetail;
