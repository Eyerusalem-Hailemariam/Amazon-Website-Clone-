import React from "react";
import { IoIosSearch } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import "./Header.css";
import LowerHeader from "./LowerHeader";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
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
          <Link to="/signin">
            <p>Sign In</p>
            <span>Account & Lists</span>
          </Link>
          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="cart">
            <BiCart />
            <span>2</span>
          </Link>
        </div>
      </section>
      <br></br>
      <LowerHeader />
    </>
  );
}

export default Header;

