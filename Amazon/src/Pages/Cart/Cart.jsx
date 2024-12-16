import React, { useContext } from 'react';
import Layout from '../../Components/LayOut/LayOut';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import './Cart.css';
import { Type } from '../../Utility/action.type';
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);

  // Calculate total cost
  const total = basket.reduce((amount, item) => item.price * item.amount + amount, 0);

  // Increment quantity
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  // Decrement quantity
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className="container">
        <div className="cart_container">
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No items in your cart.</p>
          ) : (
            basket.map((item, i) => (
              <section key={i} className="cart_item">
                <ProductCard
                  product={item}
                  renderdescription={true}
                  renderAdd={false}
                  flex={true}
                />
                <div className="cart_controls">
                  <button className='btn' onClick={() => increment(item)}><MdOutlineKeyboardArrowUp size={20} /></button>
                  <span>{item.amount}</span>
                  <button className='btn' onClick={() => decrement(item.id)}><MdOutlineKeyboardArrowDown size={20}/></button>
                </div>
              </section>
            ))
          )}
        </div>

        {basket?.length !== 0 && (
          <div className="subtotal">
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;