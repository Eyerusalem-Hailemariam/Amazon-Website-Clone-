import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './Product.css';
import Loading from '../Loading/Loading';

function Product() {
    const [products, setProducts] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        setisLoading(true);
        axios
        .get('https://fakestoreapi.com/products')
        .then((res) => setProducts(res.data))
        .catch((err) => console.error(err))
        .finally(() => setisLoading(false)); 
    }, []);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <section className="products_container">
                    {products.map((singleProduct) => (
                        <ProductCard product={singleProduct} key={singleProduct.id} renderAdd={true} />
                    ))}
                </section>
            )}
        </>
    );
}

export default Product;

