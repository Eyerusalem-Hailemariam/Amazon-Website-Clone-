import React, {useContext, useState} from 'react'

import LayOut from '../../Components/LayOut/LayOut'
import './Payment.css'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import { axiosInstance } from '../../Api/axios'
import { ClipLoader } from 'react-spinners'
import { db } from '../../Utility/firebase'
import { useNavigate} from 'react-router-dom';
import Orders from '../Orders/Orders'
function Payment() {

  const [{user, basket}, dispatch] = useContext(DataContext);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
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
  setProcessing(true);
const response = await axiosInstance({
  method: 'POST',
  url: `/payment/create?total=${total * 100}`
})
console.log(response.data)
const clientSecret = response.data?.clientSecret;
const { paymentIntent } =  await stripe.confirmCardPayment(
  clientSecret,
  {
    payment_method: {
      card: elements.getElement(CardElement)
    }
  }
)

await db.collection("users").doc(user.uid).collection("orders").doc(paymentIntent.id).set({
  basket: basket,
  amount: paymentIntent.amount,
  created: paymentIntent.created,
});
//making the basket empty
dispatch({type: "EMPTY_BASKET"});
setProcessing(false);
navigate("/orders", { state: { msg: "you have placed new Order"}});
} catch(error){
   setProcessing(false);
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
        <button type='submit'>
          {processing ? (
            <div className='loading'>
            <ClipLoader color='grey' size={12}/>
            <p>Please Wait ....</p>
            </div>
          ): "Pay Now"
          }
         </button>
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
