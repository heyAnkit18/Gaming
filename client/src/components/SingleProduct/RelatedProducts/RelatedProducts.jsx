import React from "react";
import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products";

const RelatedProducts = ({ categoryId, productId }) => {
    const { data } = useFetch( //30
        `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
        //30...tottal 2 filetr use kiye h , 1. selected product no come in related 2.categoryId ke product ko fetch 
        //30..pagination[start]=0&pagination[limit]=4   only 4 product show in related 
    );

    return (
        <div className="related-products">
            <Products headingText="Related Products" products={data} />
        </div>
    );
};

export default RelatedProducts;
