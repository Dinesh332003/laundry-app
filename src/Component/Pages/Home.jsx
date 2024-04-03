import React from 'react'
import Header from "../Header/Header";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import first from "../../Assets/images/first.jpg"
import second from "../../Assets/images/second.jpg"
import third from "../../Assets/images/third.jpg"
import cleaning from "../../Assets/images/cleaning.jpeg"
import furnishing from "../../Assets/images/furnishing.webp"
import drycleaning from "../../Assets/images/dry-cleaning.jpeg"
import iron from "../../Assets/images/iron.jpeg"
import convenience from "../../Assets/images/convinence.jpeg"
import quality from "../../Assets/images/quality.jpeg"
import "../../Assets/css/main1.css"
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import review from "../../Assets/images/reviews.jpg"
import Button from 'react-bootstrap/Button';



// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <>
      <Header />
     
      <div className='Home-page container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-12' >  
          <Carousel>
            <Carousel.Item>
              <div className='Slider-in-img'>
                <img src={first} alt="" className='slider' />
                <div className='Slider-in-content'>
                  <p>Efficient & ECO-Friendly</p>
                  <h1>FRESH APPROACH TO YOUR DAILY <br /> <span className='washing'> WASHING</span></h1>

                  <div className='slide-button'>
                    <div className='btns'>
                      <button className='btn-1'>SCHEDULE A PICKUP</button>
                      <button className='btn-2'>CALL (636) 106 9665</button>
                    </div>
                  </div>
                </div>
              </div>
              <Carousel.Caption>

              </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
              <div className='Slider-in-img'>
                <img src={second} alt="" className='slider' />
                <div className='Slider-in-content-2'>
                  <h1>WE OFFER THE BEST <br />  LAUNDRY SERVICES </h1>
                </div>

              </div>


              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className='Slider-in-img'>
                <img src={third} alt="" className='slider' />
                <div className='Slider-in-content-3'>
                  <h1>FRESH APPROACH TO YOUR DAILY <br /> <span className='washing'> WASHING</span></h1>
                </div>

              </div>
              <Carousel.Caption>
 
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
        </div>
     <div className='container-fluid'>
        <div className='row'>
<div className='location  col-12 col-md-4'>
<div className='loc-icon'>
<h1><FaLocationDot /></h1>
  </div>

  <div className='loc-text'>
  <h3>Our office</h3>
  <p>123,Niwaru,Jhotwara</p>  
  </div>
</div>


<div className='email  col-12 col-md-4'>
<div className='loc-icon-email'>
<h1><MdEmail /></h1>
  </div>

  <div className='loc-text'>
  <h3>Email Us</h3>
  <p>123,Niwaru,Jhotwara</p>  
  </div>
</div>



<div className='location  col-12 col-md-4'>
<div className='loc-icon'>
<h1><IoCallSharp /></h1>
  </div>

  <div className='loc-text'>
  <h3>Call Us</h3>
  <p>123,Niwaru,Jhotwara</p>  
  </div>
</div>

 

        </div>
        </div>

        <div className='explaination container'>
          <div className='row'>
          <div className='explain-1 col-12 col-md-6 d-flex mt-5'>
            <span className='imagee'> 
            <img src={convenience} style={{width:"50px", paddingTop:"15px"}} alt="" />
            </span>
            <span className='text'>
            <h6>convenience</h6>
            <p>With just a tap of button, Your laundry gets <br /> done,
            giving your leisure time to  spend with <br /> family and friends.</p>
            </span>
          </div>
          <div className='explain-2 col-12 col-md-6 d-flex mt-5 '>
            <div className='imagee'>
              <img src={quality} style={{width:"50px", paddingTop:"15px"}} alt="" />
            </div>
            <div className='text'>
              <h6>Quility</h6>
              <p>We use the best in class products, to assure <br /> that your favorite clothes are always there for <br />you to wear .</p>
            </div>
          </div>
          </div>
        </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-sm-6'>
          <Card>
     <div className='card-img'>
        <img src={cleaning} alt="" />
     </div>
      <Card.Body>
        <Card.Title className='title'>SPECIALIST CLEANING</Card.Title>
 
      </Card.Body>
    </Card>
          </div>
          <div className='col-md-3 col-sm-6'>
          <Card>
            <div className='card-img'>
          <img src={furnishing} alt="" />
            </div>
      <Card.Body>
        <Card.Title className='title'>HOUSEHOLD & SOFT FURNISHING</Card.Title>
       
      </Card.Body>
    </Card>
          </div>
          <div className='col-md-3 col-sm-6'>
          <Card>
            <div className='card-img'>
          <img src={drycleaning} alt="" />
            </div>
      <Card.Body>
        <Card.Title className='title'>DRY CLEANING</Card.Title>
    
      </Card.Body>
    </Card>
          </div>
          <div className='col-md-3 col-sm-6'>
          <Card>
            <div className='card-img'>
          <img src={iron} alt="" />
            </div>
      <Card.Body>
        <Card.Title className='title'>IRONING SERVICE</Card.Title>
        
      </Card.Body>
    </Card>
          </div>
        </div>
      </div> 

      </div>


      <div className='container'>
        <div className='row review'>
          <div className='col-md-4 col-sm-6'>
<img src={review} style={{width:"380px", height:"100vh", objectFit:"cover", borderRadius:"15px" , boxShadow:
"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}} alt="" />
          </div>
          <div className='view-textt col-md-8 col-sm-6 text-center p-5'>
            <h5>LEARN ABOUT US</h5>
          <h1>We Provide The Best <br /> Cleaning Services</h1>
          <p className='view-para'>Eos kasd eos dolor vero vero, lorem stet diam rebum. <br />
             Ipsum amet sed vero dolor sea lorem justo est dolor <br /> eos.</p>
             <p className='view-para-2'>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo <br /> dolor
             lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.<br /> Erat justo 
             sed sed diam. Ea et erat ut sed diam sea dolor. </p>
              <Button variant="warning" className='view-btn'>Learn More</Button>{' '}

          </div>

        </div>

      </div>


      <div className='container-fluid more-services'>
<div className='row'>
  <div className='col-md-8 col-sm-6'>
<h4>OUR SERVICES</h4>
<h1>Awesome Cleaning Service For You</h1>
  </div>

  <div className='col-md-8 col-sm-6'>
slvhdvkdherkuedfuh
  </div>
</div>

      </div>
      {/* <Footer/> */}
        
    </>
  )
}

export default Home
