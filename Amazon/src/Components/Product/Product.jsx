import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './Product.css'

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            console.log("API Response:", res.data);
            setProducts(res.data);
        })
        .catch((err) => console.error("Error fetching products:", err));    
    }, []); 

    return (
            <section className='products_container'>
                {
                        products.map((singleProduct) => (
                            <ProductCard product={singleProduct} key={singleProduct.id} />
                        ))
                }
            </section>
    );
}

export default Product;
