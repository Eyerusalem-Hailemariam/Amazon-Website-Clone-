import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/endPoints";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import Loading from "../../Components/Loading/Loading";

function Results() {
  const [results, setResults] = useState([]); 
  const { categoryName } = useParams(); 
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data); 
        setisLoading(false); 
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setisLoading(false); 
      });
  }, [categoryName]); 

  return (
    <>
     {
      isLoading ? (<Loading/>) : (  <LayOut>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <br />
        <div className="products-container">
      {results.length > 0 ? (
          results.map((product) => (
              <ProductCard key={product.id} product={product} />
          ))
      ) : (
          <p style={{ textAlign: "center" }}>No products found for this category.</p>
      )}
  </div>
      </LayOut>)
     }
    </>
  );
}

export default Results;
