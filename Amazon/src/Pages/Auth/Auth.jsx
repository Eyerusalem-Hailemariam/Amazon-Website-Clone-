import React from 'react'
import { Link } from 'react-router-dom'
import AmazonLogo from '../../assets/AmazonLogo.png'
import './SignUp.css'

function Auth() {
  return (
    <section className='login'>
<Link to=''>
<img src={AmazonLogo} alt=''></img>
</Link>
<div className='login_container'>
  <h1>Sign In</h1>
  <form action="">
    <div>
    <label htmlFor='email'>Email</label>
    <input type="email" id="email"></input>
    </div>
    <div>
    <label htmlFor='password'>Password</label>
    <input type="password" id="password"></input>
    </div>
    <button className='login_container_button'>
      Sign In
    </button>
    {/* aggrement */}
    <p>
      By signing-in you agree to the AMzon Fake Clone Conditions of Use & Sale.Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice. 
    </p>
    <div>
    <button className='login_registerButton'>
      Create your Amazon Account</button>
      </div>
  </form>
</div>
    </section>
  )
}

export default Auth
