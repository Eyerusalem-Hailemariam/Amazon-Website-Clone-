import React, {useContext, useState} from 'react'

import LayOut from '../../Components/LayOut/LayOut'
import './Payment.css'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import { axiosInstance } from '../../Api/axios'

function Payment() {

  const [{user, basket}] = useContext(DataContext);
  const [error, setError] = useState(null);
  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0) || 0;
  const total = basket.reduce((amount, item) => item.price * item.amount + amount, 0);


  const handleChange = (e) => {
if (e.error){
e?.error?.message ? setError(e.error.message) : setError('Please enter a valid card number')
  }
}

const handlePayment = async (e) => {
e.preventDefault();
try {
const response = await axiosInstance({
  method: 'POST',
  url: `/payment/create?total=${total * 100}`
})
console.log(response.data)
} catch(error){
  if (error.response){
    setError(error.response.data.message)
  } else {
    setError(error.message)

}
}}
  return (
    <LayOut>
    <div className='payment_header'>Checkout({totalItem}) items</div>
    {/*payment method*/}
    <section className='payment'>
      {/* address */}
      <div className='flex'>
        <h3>Delivery Address</h3>
        <div>
          <div>{user?.email}</div>
          <div>123 React Lane</div>
          <div>Chicago, IL</div>
        </div>
      </div>
      <hr/>
      {/* product */}
      <div className='flex'>
        <h3>Review items and delivery</h3>
        <div>
          {
            basket?.map((item=><ProductCard product={item} flex={true}/>))
          }
        </div>
      </div>
      <hr/>
      {/*card form*/}
      <div className='flex'>
        <h3>Payment methods</h3>
      <div className='payment_card_container'>
      <div className='payment_details'>
         <form onSubmit={handlePayment}>
          {error && <small style={{color :"red"}}>{error}</small>}
          <CardElement onChange={handleChange}/>
         {/*price*/}
      <div className='payment_price'>
        <div>
        <span style={{display: 'flex', gap: "10px"}}>
        <p>Total Order |</p> <CurrencyFormat amount={total} />
      </span>
        </div>
        <button type='submit'>Pay Now</button>
    </div>
    </form>
      </div>
      
    </div>
      </div>
    </section>
    </LayOut>
  )
}


export default Payment
