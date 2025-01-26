import React, {useContext, useEffect, useState} from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { db } from '../../Utility/firebase'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import './Orders.css'
import ProductCard from '../../Components/Product/ProductCard'
function Orders() {

  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user){
      db.collection('users').doc(user.uid).collection('orders').orderBy('created', 'desc').onSnapshot(snapshot => {
        setOrders(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
    } else {
      setOrders([])
    }
  });
  return (
        <LayOut>
        <section className='container'>
          <div className='order_container'>
            <h2>Your Orders</h2>
            {
              orders?.length === 0 ? <p>No orders yet</p> : null
            }
            {/* {ordered items} */}
            <div>
{
  orders?.map((eachOrder, i)=> {
    return (
      <di key={i}>
        <hr/>
        <p>Order ID : {eachOrder?.id}</p>
        {
          eachOrder?.data?.basket?.map((order) => {
            return (
              <ProductCard flex={true} product={order}
           key={order.id}></ProductCard>
            )
          })
        }
      </di>
    )
  })
}
            </div>
          </div>
        </section>
        </LayOut>
  )
}

export default Orders
