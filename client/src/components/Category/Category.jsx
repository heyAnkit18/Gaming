import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import "./Category.scss";


const Category = () => {
    const { id } = useParams();
    const { data } = useFetch(
        `/api/products?populate=*&[filters][categories][id]=${id}` //apply filter for sports shooting etc, to give filter= [filters][fieldname][id] id1 forracing,2,3,4  ----26
    );
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title"> 
                    {
                        //for category tittle 26
                        data?.data?.[0]?.attributes?.categories?.data?.[0]
                            ?.attributes?.title
                    }
                </div>
                <Products innerPage={true} products={data} /> 
            </div>
        </div>
    );
};

export default Category;
