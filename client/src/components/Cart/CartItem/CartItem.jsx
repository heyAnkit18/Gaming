import { useContext } from "react"; //33
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/god_of_war_icon_by_andonovmarko_df07pu6-350t.png";
import { Context } from "../../../utils/context"; //33

import "./CartItem.scss";
const CartItem = () => {
  const {cartItems, handleRemoveFromCart, handleCartProductQuantity} = useContext(Context); //33
  return (
    <div className="cart-products">
        {cartItems?.map((item) => ( //33
          <div key={item.id} className="cart-product">
          <div className="img-container">
            <img //33(h)
            src={process.env.REACT_APP_DEV_URL +
              item.attributes.img.data[0].attributes.url} 
              alt="" />
          </div>
          <div className="prod-details">
            <span className="name">{item.attributes.title}</span>
            {/* 33 for removefromcart add onclick method and pass (item) */}
            <MdClose className="close-btn" onClick={()=>handleRemoveFromCart(item)}  /> 
            <div className="quantity-buttons">
              {/* //create onclick method and inside value pass (type=dec,product=item) */}
              <span onClick={()=> handleCartProductQuantity('dec',item)}>-</span> 
              {/*33 taking dynamically quantity */}
              <span>{item.attributes.quantity}</span>
              <span onClick={()=> handleCartProductQuantity('inc',item)}>+</span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>*</span>
              <span className="highlight">&#8377;{item.attributes.price * item.attributes.quantity}</span>
            </div>
          </div>
        </div>
        ))}
    </div>
  );
};

export default CartItem;
