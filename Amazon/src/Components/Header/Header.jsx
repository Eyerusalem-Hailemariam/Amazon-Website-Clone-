import React from "react";
import { IoIosSearch } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import "./Header.css";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <section className="header_container">
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
          <select name="categories">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search product" />
          <IoIosSearch size={25} />
        </div>

        {/* Right Links */}
        <div className="right_links">
          {/* Language */}
          <a href="#" className="language">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="US Flag"
            />
            <select>
              <option value="EN">EN</option>
            </select>
          </a>

          {/* Account Links */}
          <a href="/signin">
            <p>Sign In</p>
            <span>Account & Lists</span>
          </a>
          <a href="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </a>

          {/* Cart */}
          <a href="/cart" className="cart">
            <BiCart />
            <span>2</span>
          </a>
        </div>
      </section>
      <br></br>
      <LowerHeader />
    </>
  );
}

export default Header;

