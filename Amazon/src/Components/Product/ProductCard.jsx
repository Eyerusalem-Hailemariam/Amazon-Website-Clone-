import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import './Product.css';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';

function ProductCard({ product, flex, renderdescription, renderAdd }) {
  const { image, title, id, price, rating, description } = product;
  const rate = rating?.rate || 0;
  const count = rating?.count || 0;
  const [, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        ...product,
      },
    });
  };

  return (
    <div className={`card_container ${flex ? 'products_flexed' : ''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderdescription && <div style={{ maxWidth: "400px" }}>{description}</div>}
        <div className='rating'>
          <Rating value={rate} precision={0.1} readOnly />
          <small>{count} reviews</small>
        </div>
        <div style={{ color: "red", paddingRight: "300px" }}>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && <button className='button' onClick={addToCart}>Add to Cart</button>}
      </div>
    </div>
  );
}

export default ProductCard;

