import { useNavigate} from "react-router-dom";
import "./Category.scss";

const Category = ({categories}) => {
  const navigate= useNavigate(); // instance of Navigate 26
  //25
  return (
    <div className="shop-by-category">
        <div className="categories">
          {categories?.data?.map((item) => ( //optical chaining
            <div key={item.id} className="category" onClick={()=> navigate(`/category/${item.id}`)}> 
            {/* onclick method for category click 26 */}
                <img
                            src={
                                process.env.REACT_APP_DEV_URL +
                                item.attributes.img.data.attributes.url //REACT_APP_DEV_URL .env wala h 23
                            }
                        />
          </div>
          ))}
        </div>
      </div>  
  );
};

export default Category;
