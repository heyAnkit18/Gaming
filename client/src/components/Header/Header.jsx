import { useEffect, useState, useContext } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

//icons
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
//till here
//components in web search cart
import Search from "./Search/Search";
import Cart from "../Cart/Cart";

import { Context } from "../../utils/context";

import "./Header.scss";
//creating state for cart pop checkout
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const {cartCount} = useContext (Context); //33(i) for car number
  const navigate = useNavigate() //31

  const handleScroll = () => { 
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  //for sticky header
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    {/* for make the header sticky */}
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>  
        <div className="header-content">
          <ul className="left">
            <li onClick={()=> navigate("/")}>Home</li> 
            <li onClick={()=> navigate("../../../footer")}>About</li>
            <li onClick={()=> navigate("../../../Newsletter")}>Login</li>
          </ul>
          <div className="center">ANKIT || GAME-STORE</div>
          <div className="right">
            {/* for search button searching */}
            <TbSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <span
              className="cart-icon"
              // to show cart pop
              onClick={() => setShowCart(true)}
            >
              <CgShoppingCart />
              {/* 33(i) !!cartCount = agar cart mh kuch nh ho to number na dikhe */}
              {!!cartCount && <span>{cartCount}</span>} 
            </span>
          </div>
        </div>
      </header>
{/* for cart showing */}
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
