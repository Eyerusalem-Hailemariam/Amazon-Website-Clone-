import React from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import './Product.css';
import { Link } from 'react-router-dom';

function ProductCard({ product, flex, renderdescription }) {
    const { image, title, id, price, rating,description } = product;
    const rate = rating?.rate || 0;
    const count = rating?.count || 0;

    return (
        <div className={`card_container ${flex ? 'products_flexed' : ''}`}>
            <Link to={`/products/${id}`}>
                <img src={image} alt={title} />
            </Link>
            <div>
                <h3 >{title}</h3>
                {renderdescription && <div style={{maxWidth: "400px"}}>{description}</div>}
                <div className='rating'>
                    {/* Rating */}
                    <Rating value={rate} precision={0.1} readOnly />
                    {/* Count */}
                    <small>{count} reviews</small>
                </div>
                <div style={{color: "red", paddingRight: "300px"}}>
                    {/* Price */}
                    <CurrencyFormat amount={price} />
                </div>
                <button className='button'>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;
