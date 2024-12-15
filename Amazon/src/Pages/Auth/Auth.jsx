import React from 'react'
import { Link } from 'react-router-dom'
import AmazonLogo from '../../assets/AmazonLogo.png'
import './SignUp.css'
import {auth} from '../../Utility/firebase'
import { useState, useContext} from 'react'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import {DataContext} from '../../Components/DataProvider/DataProvider'
import { Type } from '../../Utility/action.type'

function Auth() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false
  });
  const [{user}, dispatch] = useContext(DataContext);

const authhandler = async(e) => {
  e.preventDefault();
  console.log(e.target.name);

  if(e.target.name == 'signin'){
    setLoading({...loading, signIn:true})
    signInWithEmailAndPassword(auth, email, password).then((userInfo) => {
      dispatch({
        type:Type.SET_USER,
        user: userInfo.user
      });
      setLoading({...loading, signIn:false})
    }).catch((err) => {
      setError(err.message)
      setLoading({...loading, signIn:false})
    })
  } else {
    setLoading({...loading, signUp:true})
createUserWithEmailAndPassword(auth, email, password).then((userInfo)=> {
 dispatch({
  type: Type.SET_USER,
  user: userInfo.user,
 });
  setLoading({...loading, signUp:false})
}).catch((err)=>{
  setError(err.message)
  setLoading({...loading, signUp:false})
})
  }
}


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
    <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" id="email"></input>
    </div>
    <div>
    <label htmlFor='password'>Password</label>
    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password"></input>
    </div>
    <button type="submit" onClick={authhandler} name="signin" className='login_container_button'>
      Sign In
    </button>
    {/* aggrement */}
    <p>
      By signing-in you agree to the AMzon Fake Clone Conditions of Use & Sale.Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice. 
    </p>
    <div>
    <button type="sumbit" name="signup" onClick={authhandler} className='login_registerButton'>
      Create your Amazon Account</button>
      {error && <small style={{paddingTop:"5px", color: "red"}}>{error}</small>}
      </div>
  </form>
</div>
    </section>
  )
}

export default Auth
