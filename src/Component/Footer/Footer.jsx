import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";


const Footer = () => {
  return (
<>

 
      <div className='footer container-fluid'>
       <div className='footer-d row'>
        <div className=' clean col-md-3 col-sm-12'>
           <h1>Clean</h1>
           <p>Volup amet magna clita <br /> tempor. Tempor sea eos <br /> vero ipsum. Lorem lorem sit <br />
            sed elitr sed kasd et</p>
            <h4>Opening Hours:</h4>
<h6>Mon – Sat, 8AM – 8PM</h6>
<h6>Sunday: Closed</h6>
        </div>


        <div className='get-in col-md-3 col-sm-12'>
             <h4>Get In Touch</h4>
             <h5><CiLocationOn  className='icon'/>3 Street,  Niwaru, jhotwara,Rajasthan</h5>
             <h5><IoCallOutline className='icon' />+916361069665</h5>
             <h5><CgMail className='icon' />dinesh@gmail.com</h5>
             <h1 className='social'><FaTwitter className='twit' />   <FaInstagram className='insta' />   <RiFacebookFill className='face' />
</h1>
        </div>


        <div className=' links footer-link col-md-3 col-sm-12'>
             <h4>Quick Links</h4>
          <h6><Link to="/">Home</Link></h6>
          <h6><Link to="/about">About</Link></h6>
          <h6><Link to="/contact">Contact</Link></h6>
          <h6><Link to="/login">Login</Link></h6>
        
        </div>



        <div className=' update col-md-3 col-sm-12'>
             <h4>Newsletter</h4>
             <p>Rebum labore lorem <br /> dolores kasd est, et ipsum <br />
              amet et at kasd, ipsum  sea <br /> tempor magna tempor. <br />
               Accu kasd sed ea duo ipsum.</p>

               <input type="text" size="10" placeholder='Your Email' /><button>Sign Up</button>
        </div>
       </div>
       </div>
       </>

  )
}

export default Footer
