import React, {useContext} from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import './Payment.css'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'

function Payment() {

  const [{user, basket}] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0) || 0;

  return (
    <LayOut>
    <div className='payment_header'>Checkout({totalItem}) items</div>
    {/*payment method*/}
    <section className='payment'>
      {/* address */}
      <div className='flex'>
        <h3>Delivery Address</h3>
        <div>
          <div>{user.email}</div>
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
<div>
<div>
  <form action=''></form>
</div>
</div>
      </div>
    </section>
    </LayOut>
  )
}

export default Payment
