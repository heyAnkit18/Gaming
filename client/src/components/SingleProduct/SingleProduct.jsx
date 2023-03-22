import { useState, useContext } from "react"; //29
import { Context } from "../../utils/context"; //32
import { useParams } from "react-router-dom"; //27
import useFetch from "../../hooks/useFetch"; //27
import RelatedProducts from "./RelatedProducts/RelatedProducts";
//import components
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1); //29 , initital value is 1 in cart after add 1
  const { id } = useParams(); //27
  const { data } = useFetch(`/api/products?populate=*&[filters] [id]=${id}`); //product ki api call ki, populate dala , filter apply kiya, field name id diya, fr product ki id de di
  const { handleAddToCart } = useContext(Context); //32

  const increment = () => {
    //29 below
    setQuantity((prevState) => prevState + 1);
  };
  const decrement = () => {
    //29 below
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  if (!data) return; //28 jb tk data undefined h aaghe exicute na ho code
  const product = data?.data?.[0]?.attributes; // 28 for update product name, price etc
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            {/* //28 below also */}
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                product.img.data[0].attributes.url
              }
            />
          </div>
          <div className="right">
            {/* 28 */}
            <span className="name">{product.title}</span>
            <span className="price">&#8377;{product.price}</span>
            <span className="desc">{product.desc}</span>
            <div className="cart-buttons">
              {/* //29  below*/}
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data?.data?.[0], quantity);
                  setQuantity(1); //32 initial quantity of cart after product add will be one
                }}
              >
                <FaCartPlus SIZE={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                {/* for space between category and title */}
                Category:{" "}
                {/* for category title in single page after button 28*/}
                <span>{product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
