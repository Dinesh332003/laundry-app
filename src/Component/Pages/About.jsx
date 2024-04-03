import React from 'react'
import Header from '../Header/Header'
import dresses from "../../Assets/images/dresses.png"
import { FaCheck } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import curtain from "../../Assets/images/curtain.jpeg"
import washing from "../../Assets/images/washing.jpeg"
import dryclean from "../../Assets/images/dry-cleann.jpeg"
import suit from "../../Assets/images/suit.jpeg"
import Carousel from 'react-bootstrap/Carousel';
import "../../Assets/css/main1.css"
import Button from 'react-bootstrap/Button';


import { FaRegStar } from "react-icons/fa6";
import Footer from '../Footer/Footer';
const About = () => {
  return (
    <>
      <Header />
      <div className='container'>


        <div className='row'>
          <div className='col-md-6 col-sm-12 mt-5'>
            <img src={dresses} alt="" style={{ width: "400px" }} />
          </div>

          <div className='col-md-6 col-sm-12 mt-5'>
            <h5>LEARN ABOUT US</h5>
            <h1>We Are Quality Laundry <br /> Provider In Your City</h1>
            <p className='paracollor'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem eius cum vero explicabo eaque excepturi esse.</p>


            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto at eveniet placeat ipsum repellendus quidem
              ipsam, minima minus perferendis error facilis dolore velit. Officia commodi hic dolorem voluptatem veritatis illo
              pariatur odio, tempora incidunt.</p>
            <div className='point'>
              <div className='point-1'>
                <h4><FaCheck /> Quality Laundry Service </h4>
                <h4> <FaCheck /> Highly Professional Staff</h4>
              </div>
              <div className='point-2'>
                <h4><FaCheck /> Express Fast Delivery </h4>
                <h4><FaCheck /> 100% Satisfaction Gguarantee </h4>
              </div>
            </div>
          </div>

        </div>


        <div className='our-services row'>
          <div className='service-heading col-md-12 col-sm-12'>
            <h5>OUR SERVICES</h5>
            <h1>WHAT WE OFFER</h1>
          </div>


        </div>
        <div className='row'>
          <div className='col-12 col-md-3 mt-2'>
            <Card className='boxes'>
              <div className='about-imgg'>
                <img src={dryclean} alt="" />
              </div>
              <Card.Body>
                <Card.Title className='titlee'>Dry<br />Cleaning</Card.Title>

              </Card.Body>
            </Card>
          </div>
          <div className='col-12 col-md-3 mt-2'>
            <Card className='boxes'>
              <div className='about-imgg'>
                <img src={washing} alt="" />
              </div>
              <Card.Body>
                <Card.Title className='titlee'>Wash & Laundry</Card.Title>

              </Card.Body>
            </Card>
          </div>
          <div className='col-12 col-md-3 mt-2'>
            <Card className='boxes'>
              <div className='about-imgg'>
                <img src={curtain} alt="" />
              </div>
              <Card.Body>
                <Card.Title className='titlee'>Dry Curtain Laundry</Card.Title>

              </Card.Body>
            </Card>
          </div>
          <div className='col-12 col-md-3 mt-2'>
            <Card className='boxes'>
              <div className='about-imgg'>
                <img src={suit} alt="" />
              </div>
              <Card.Body>

                <Card.Title className='titlee'>Suits Cleaning</Card.Title>

              </Card.Body>
            </Card>
          </div>
        </div>


        <div className='row '>
          <div className='review-content col-12 col-md-6'>
            <div className='content-in'>
              <h5>OUR FEATURES</h5>
              <h1>Why Choose Us</h1>
              <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor <br /> 
              lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo  <br />  sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
            </div>
            <div className='detail'>
              <div className='experience'>
                <h1>10</h1>
                <h2>Years Expereince</h2>

                <h1>1250</h1>
                <h2>Happy Clients</h2>
              </div>
              <div className='expert'>
                <h1>250</h1>
                <h2>Expert Worker</h2>

                <h1>9550</h1>
                <h2>Dry Cleaning</h2>
              </div>
            </div>
          </div>

          <div className='points col-12 col-md-6 mt-5'>
            <h1><FaRegStar /></h1>
            <h2>10+</h2>
            <h3>Years</h3>
            <h3>Experience</h3>

          </div>

        </div>





        <div className='container process'>
          <div className='process-heading'>
            <h5>WORKING PROCESS</h5>
            <h1>How We Work </h1>
          </div>

          <div className='row'>
            <div className='col-6 col-md-3'>
              <Card className='process-in'>
                <div className='process-in-1'>
                  <div className='card-img'>

                  </div>
                  <Card.Body>
                    <Card.Title className='work-status'>1</Card.Title>

                  </Card.Body>
                </div>
              </Card>
              <div className='step-method'>
                <h4>Order Place</h4>
              </div>

            </div>
            <div className='col-6 col-md-3'>
              <Card className='process-in'>
                <div className='process-in-1'>
                  <div className='card-img'>

                  </div>
                  <Card.Body>
                    <Card.Title className='work-status'>2</Card.Title>

                  </Card.Body>
                </div>
              </Card>
              <div className='step-method'>
                <h4>Free Pick Up</h4>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <Card className='process-in'>
                <div className='process-in-1'>
                  <div className='card-img'>

                  </div>
                  <Card.Body>
                    <Card.Title className='work-status'>3</Card.Title>
                  </Card.Body>
                </div>
              </Card>
              <div className='step-method'>
                <h4>Dry Cleaning</h4>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <Card className='process-in'>
                <div className='process-in-1'>
                  <div className='card-img'>

                  </div>
                  <Card.Body>
                    <Card.Title className='work-status'>4</Card.Title>

                  </Card.Body>
                </div>
              </Card>
              <div className='step-method'>
                <h4>Free delivery</h4>
              </div>
            </div>
          </div>
        </div>


        <div className='container'>
          <div className='pricing'>
            <h5>OUR PRICING PLAN</h5>
            <h1>The Best Price</h1>
          </div>


          <div className='row'>
            <div className='col-12 col-md-4 mt-4'>
              <Card className='price'>
                <div className='basic'>
                  <h1>Basic</h1>
                  <h2>$<span className='big-num'>49</span>/Mo</h2>
                </div>
                <Card.Body>
                  <Card.Title className='price-title text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod provident totam cum? Voluptas, consequuntur sed temporibus ullam repellendus iure cumque.</Card.Title>
                  <Button variant="info" className='colorchange'>Sign Up Now</Button>{' '}

                </Card.Body>
              </Card>
            </div>
            <div className='col-12 col-md-4 mt-4'>
              <Card className='price'>
                <div className='standard'>
                  <h1>Standard</h1>
                  <h2>$<span className='big-num'>99</span>/Mo</h2>
                </div>
                <Card.Body>
                  <Card.Title className='price-title text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error consequuntur dicta velit explicabo totam nihil est amet eligendi voluptas optio!</Card.Title>
                  <Button variant="info" className='colorchange'>Sign Up Now</Button>{' '}

                </Card.Body>
              </Card>
            </div>
            <div className='col-12 col-md-4 mt-4'>
              <Card className='price'>
                <div className='Premium'>
                  <h1>Premium</h1>
                  <h2>$<span className='big-num'>149</span>/Mo</h2>
                </div>
                <Card.Body>
                  <Card.Title className='price-title text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime adipisci consectetur libero necessitatibus unde magni dicta porro alias illo nisi?</Card.Title>
                  <Button variant="info" className='colorchange'>Sign Up Now</Button>{' '}
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About
