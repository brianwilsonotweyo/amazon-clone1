import React from "react";
import "./Header.css";
import { Link, useHistory} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon"/>
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionline1">
            Hello
          </span>
          <span className="header__optionline2">
            Signin
          </span>
          </div>          
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionline1">
            Returns
            </span>
            <span className="header__optionline2">
              Orders
            </span>
          </div>          
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionline1">
            Your
            </span>
            <span className="header__optionline2">
              Prime
            </span>
          </div>          
        </Link>
        <Link to="/checkout" className="header__link"> 
            <div className="header__optionBasket">
              <ShoppingBasketIcon/>
              <span className="header__optionline2 header__basketCount">
               0
              </span>
            </div>
        </Link>
      </div>
      </nav>
  );
}

export default Header;
