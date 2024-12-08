import React from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import './Product.css'

function ProductCard({ product }) {
    const { image, title, price, rating } = product;
    const rate = rating?.rate || 0; 
    const count = rating?.count || 0; 

    return (
        <div className='card_container'>
            <a href="#">
                <img src={image} alt={title} />
            </a>
            <div>
                <h3>{title}</h3>
                <div className='rating'>
                    {/* Rating */}
                    <Rating value={rate} precision={0.1} readOnly />
                    {/* Count */}
                    <small>{count} reviews</small>
                </div>
                <div>
                    {/* Price */}
                    <CurrencyFormat amount={price} />
                </div>
                <button className='button'>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;
