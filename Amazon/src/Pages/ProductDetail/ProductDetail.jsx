import React, { useEffect } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import './ProductDetail.css'
import{ useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import ProductCard from '../../Components/Product/ProductCard'
import { productUrl } from '../../Api/endPoints'
import Loading from '../../Components/Loading/Loading'

function ProductDetail() {
  const {productId} = useParams();
  const[product, setproduct] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(()=> {
    setisLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res) => {
      console.log(res.data);
      setproduct(res.data);
      setisLoading(false);
    }).catch((err)=>{
      console.log(err)
      setisLoading(false);
    })
  }, [])
  return (
      <LayOut>
       {isLoading? <Loading/> : ( <ProductCard 
       product={product}
       flex={true}
       renderdescription={true}
       renderAdd={true} />)}
      </LayOut>
  )
}

export default ProductDetail