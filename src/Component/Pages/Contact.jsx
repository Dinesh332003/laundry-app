 import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
 
 const Contact = () => {
   return (
    <>
      <Header/>
      <div className='container'>

     <div className='contact  row'>
<div className='cont-logo col-12 col-md-6'>
<h1>CONTACT</h1>
</div>
<div className='cont-logo col-12 col-md-6'>
<button>Home</button>
<button>Contact</button>

</div>  
 
     </div>


     <div className='contact-form row'>
<div className='formm col-12 col-md-6'>
<h5>CONTACT US</h5>
<h1>Contact Us For <br /> Cleaning Service</h1>


    
</div>

<div className='map col-12 col-md-6'>

</div>

     </div>
      </div>
      <Footer/>
    </>
   )
 }
 
 export default Contact
 