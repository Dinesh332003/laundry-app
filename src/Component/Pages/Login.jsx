import React, { useState } from 'react'
import axios from 'axios'
import loginimg from "../../Assets/images/login.png"
import Header from '../Header/Header'
import "../../Assets/css/Main.css"
import { Link } from 'react-router-dom'
 
const Login = () => {
  
 
  return (
    <>
    <Header/>
    <div className='main'>
<div className='container Login_Form'>
  <div className='row'>
  <div className='login-image col-lg-6 col-sm-12'> 
<img src={loginimg} alt="" />
 </div>
 <div className='login-input col-lg-6 col-sm-12'>
  <h3 className='heading'>Login</h3>
  <p className='color-changes'>Welcome! Login to get amazing discounts and offers.</p>
<input type="text"placeholder='Username'  className='form-control'/> <br />
<input type="password" placeholder='Password' className='form-control'/> <br />
<button className='button'>Login</button>
 <p className='registerd'> Not registered?  <Link to="/createuser">  <span className='signup'>  Signup</span></Link> </p> 
 </div>
  </div>

</div>
    </div>



    </>
  )
}

export default Login
