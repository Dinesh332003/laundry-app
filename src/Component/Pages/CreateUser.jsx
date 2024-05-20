import React, { useState } from 'react'
import loginimg from "../../Assets/images/login.png"
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import axios from "axios"

const CreateUser = () => {
  const [state,setState]=useState()
  const [username,setUsername]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [city,setCity]=useState()

  const createApi=()=>{
    const data ={
      username:username,
      email: email,
      password: password,
      city: city
    }

    axios.post("http://localhost:4003/laundry/api/create/post",data).then((response)=>{
setState(response.data)
    }).catch((error)=>{
      console.log("error")
    })
   
  }
  return (
   <>
   <Header/>
  <div className='main'>
<div className='container Login_Form'>
  <div className='row'>
  <div className='sign-image col-lg-6 col-sm-12'> 
<img src={loginimg} alt="" />
 </div>
 <div className='login-input col-lg-6 col-sm-12'>
  <h3 className='heading'>Signup</h3>
  <p className='color-changes'>Welcome! Login to get amazing discounts and offers.</p>
<input type="text"placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}} value={username} className='form-control'/> <br />
<input type="password" placeholder='Email'onChange={(e)=>{setEmail(e.target.value)}} value={email} className='form-control'/> <br />
<input type="password" placeholder='Password'onChange={(e)=>{setPassword(e.target.value)}} value={password} className='form-control'/> <br />
<input type="password" placeholder='City' onChange={(e)=>{setCity(e.target.value)}} value={city} className='form-control'/> <br />
<Link to="/login"><button className='button' onClick={()=>createApi()}>Signup</button></Link>

 </div>
  </div>

</div>
    </div>
   
   </>
  )
}

export default CreateUser
