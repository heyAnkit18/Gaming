// import React from "react";
import { useNavigate } from "react-router-dom"; //27
import "./Product.scss";

const Product = ({id, data}) => {
    const navigate = useNavigate(); //27
    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/"+id)} //27
        >
            <div className="thumbnail">
                <img
                    src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} alt=""/>
                       
                   
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">&#8377;{data.price}</span>
            </div>
        </div>
    );
};

export default Product;









