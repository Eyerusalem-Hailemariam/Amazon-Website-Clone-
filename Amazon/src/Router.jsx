import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing/Landing';
import Auth from './Pages/Auth/Auth';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51QWLNoFSD3bz5dFqLl3nH7RnO89IgJichlzQvAynzK95r1ZHsmhZDNhh8oX8DrmcGKMYhUK2MwJsbqX1eb79OGBx007q3lp95u');

function PaymentWithStripe() {
  return (
    <Elements stripe={stripePromise}>
      <Payment />
    </Elements>
  );
}

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/payments' element={<PaymentWithStripe />} />
        <Route path='/category/:categoryName' element={<Results />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
