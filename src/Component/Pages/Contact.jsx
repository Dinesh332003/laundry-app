 import React from 'react'
 import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
 
 
 const Contact = () => {
 
   return (
    <>
      <Header/>
      <div className='container-fluid'>

     <div className='contact  row'>
<div className='cont-logo col-12 col-md-12'>
<h1>CONTACT</h1>
 <Link to="/"><button>Home</button></Link>
<Link to="/contact"><button>Contact</button></Link>

</div>  
     </div>


     <div className='cntct row'>
<div className='contact-txt col-12 col-md-6'>
<h6>CONTACT US</h6>
<h1>Contact Us For <br /> Cleaning Services</h1> 
</div>
 
<div className='contact-txtt col-12 col-md-6 mt-4'>
<p>Eirmod kasd duo eos et magna, diam <br />
dolore stet sea clita sit ea erat lorem. <br />
Ipsum eos ipsum magna lorem stet.</p> 
</div>

     </div>


     <div className='row mb-5'>
 <div className='cont-input col-md-6 col-12'>
<input type="text" size="26" className='name' placeholder='Your Name' /> 
<input type="text" size="26" className='emaill' placeholder='Your Email' /> <br />
<input type="text" size="60" className='sub'placeholder='Subject' /> <br />
<input type="text" size="60" className='mess' placeholder='Message' />
<button>Submit Message</button>
 </div>

 <div className='google-map col-md-6 col-12'>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd" 
 className="page-google-map__one" allowFullScreen />
 </div>
     </div>
      </div>



      
 
      <Footer/>
    </>
   )
 }
 
 export default Contact
 