import React, { useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import "./Header.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase"; 

function Header() {
  const [{ user, basket }] = useContext(DataContext);

  
  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0) || 0;

  const handleSignOut = () => {
    if (auth) {
      auth.signOut();
    } else {
      console.error("Auth module is not available.");
    }
  };

  return (
    <section className="fixed">
      <section className="header_container">
        {/* Logo */}
        <div className="logo_container">
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon-logo"
            />
          </Link>
        </div>

        {/* Delivery Section */}
        <div className="delivery">
          <span>
            <SlLocationPin />
          </span>
          <div>
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search">
          <select name="categories">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search product" />
          <IoIosSearch size={25} />
        </div>

        {/* Right Links */}
        <div className="right_links">
          {/* Language */}
          <Link to="#" className="language">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="US Flag"
            />
            <select>
              <option value="EN">EN</option>
            </select>
          </Link>

          {/* Account Links */}
          <Link to={!user && "/auth"}>
            <div>
              {user ? (
                <>
                  <p>Hello, {user?.email?.split("@")[0]}</p>
                  <span onClick={handleSignOut}>Sign Out</span>
                </>
              ) : (
                <>
                  <p>Sign In</p>
                  <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link>

          {/* Orders */}
          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="cart">
            <BiCart />
            <span>{totalItem}</span>
          </Link>
        </div>
      </section>
      <br />
      <LowerHeader />
    </section>
  );
}

export default Header;
