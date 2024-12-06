import React from "react";
import { IoIosSearch } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import "./Header.css";

function Header() {
  return (
    <section>
      <div className="header_container">
        {/* Logo */}
        <div className="logo_container">
          <a href="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon-logo"
            />
          </a>
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
          <select name="categories" id="categories">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search product" />
          <IoIosSearch  size={25}/>
        </div>

        {/* Right Links */}
        <div className="right_links">
          {/* Language */}
          <div className="order_container">
            <a href="" className="language">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041"
              alt="US Flag"
            />
            <select>
              <option value="EN">EN</option>
            </select>
            </a> 

          {/* Account Links */}
          <a href="/signin">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>
          <a href="/orders">
            <div>
              <p>Returns</p>
              <span>& Orders</span>
            </div>
          </a>

          {/* Cart */}
          <a href="/cart" className="cart">
            <BiCart />
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Header;
