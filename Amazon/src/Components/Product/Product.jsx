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
            .then((res) => {
                console.log("API Response:", res.data);
                setProducts(res.data);
                setisLoading(false);
            })
            .catch((err) => console.error("Error fetching products:", err))
            .finally(() => setisLoading(false)); 
    }, []);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <section className="products_container">
                    {products.map((singleProduct) => (
                        <ProductCard product={singleProduct} key={singleProduct.id} />
                    ))}
                </section>
            )}
        </>
    );
}

export default Product;

