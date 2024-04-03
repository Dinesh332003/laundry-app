import React from 'react'
import loginimg from "../../Assets/images/login.png"
import Header from '../Header/Header'
import { Link } from 'react-router-dom'

const CreateUser = () => {
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
  <h3 className='heading'>Signup</h3>
  <p className='color-changes'>Welcome! Login to get amazing discounts and offers.</p>
<input type="text"placeholder='Username'  className='form-control'/> <br />
<input type="password" placeholder='Password' className='form-control'/> <br />
<Link to="/login"><button className='button'>Signup</button></Link>
 
 </div>
  </div>

</div>
    </div>
   
   </>
  )
}

export default CreateUser
