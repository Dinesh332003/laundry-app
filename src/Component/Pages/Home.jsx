import React, { useState, useEffect } from 'react'
import Header from "../Header/Header";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import first from "../../Assets/images/firsttt.jpg"
import second from "../../Assets/images/secondd.jpg"
import third from "../../Assets/images/thirdddd.jpg"
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
import { IoHomeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { GiWindow } from "react-icons/gi";
import { GiRedCarpet } from "react-icons/gi";
import { FaKitchenSet } from "react-icons/fa6";
import feature from "../../Assets/images/feature.jpg"
import clients from "../../Assets/images/client.jpg"
import testonimialimg from "../../Assets/images/testimonial-img.jpg"
import experince1 from "../../Assets/images/expereince-1.jpg"
import experince2 from "../../Assets/images/experience2.jpg"
import experince3 from "../../Assets/images/experience3.jpg"
import experince4 from "../../Assets/images/experience4.jpg"
import experience5 from "../../Assets/images/experience5.jpg"
import experience6 from "../../Assets/images/experience6.jpg"

// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../Footer/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import blog1 from "../../Assets/images/blog-1.jpg"
import blog2 from "../../Assets/images/blog-2.jpg"
import blog3 from "../../Assets/images/blog-3.jpg"
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
                    <h4>CLEANING SERVICES</h4>
                    <h1>Best Quality Solution<br /> In Cleaning</h1>
                    <Link to="/gallery"> <button>GALLERY</button></Link>
                  </div>
                </div>
                <Carousel.Caption>

                </Carousel.Caption>

              </Carousel.Item>
              <Carousel.Item>
                <div className='Slider-in-img'>
                  <img src={second} alt="" className='slider' />
                  <div className='Slider-in-content-2'>
                    <h4>CLEANING SERVICES</h4>
                    <h1>Highly Professional<br />  Cleaning Services </h1>
                    <Link to="/gallery"> <button>GALLERY</button></Link>

                  </div>

                </div>


                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className='Slider-in-img'>
                  <img src={third} alt="" className='slider' />
                  <div className='Slider-in-content-3'>
                    <h4>CLEANING SERVICES</h4>
                    <h1>Experienced & Expert <br /> Cleaners</h1>
                    <Link to="/gallery"> <button>GALLERY</button></Link>

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
                <img src={convenience} style={{ width: "50px", paddingTop: "15px" }} alt="" />
              </span>
              <span className='text'>
                <h6>convenience</h6>
                <p>With just a tap of button, Your laundry gets <br /> done,
                  giving your leisure time to  spend with <br /> family and friends.</p>
              </span>
            </div>
            <div className='explain-2 col-12 col-md-6 d-flex mt-5 '>
              <div className='imagee'>
                <img src={quality} style={{ width: "50px", paddingTop: "15px" }} alt="" />
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
            <img src={review} style={{
              width: "380px", height: "100vh", objectFit: "cover", borderRadius: "15px", boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            }} alt="" />
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
          {/* jkjkk */}
        </div>

      </div>


      <div className='container-fluid more-services'>
        <div className='services-n-slider row'>
          <div className='services col-md-6 col-sm-6'>
            <h4>OUR SERVICES</h4>
            <h1>Awesome Cleaning <br /> Service For You</h1>
            <p>Invidunt lorem justo clita. Erat lorem labore ea, <br />
              justo  dolor lorem ipsum ut sed eos, ipsum et dolor kasd <br />
              sit ea justo. Erat justo sed sed diam. Ea et erat ut sed <br /> diam sea ipsum</p>
            <Button variant="warning">More Services</Button>{' '}
          </div>

          <div className='service-slide col-md-6 col-sm-6'>
            <Carousel>
              <Carousel.Item>
                <div className='row'>
                  <div className='col-md-6 col-sm-6'>
                    <Card>
                      <Card.Body>
                        <h1 className='home-icon'><IoHomeSharp /></h1>
                        <Card.Title className='slide-title'>Home Cleaning</Card.Title>
                      </Card.Body>
                      <div className='card-img'>
                        <img src={cleaning} alt="" />
                      </div>
                    </Card>
                  </div>

                  <div className='col-md-6 col-sm-6'>
                    <Card>
                      <Card.Body>
                        <h1 className='window-icon'><GiWindow /></h1>
                        <Card.Title className='slide-title'>Window Cleaning</Card.Title>
                      </Card.Body>
                      <div className='card-img'>
                        <img src={cleaning} alt="" />
                      </div>
                    </Card>
                  </div>


                </div>
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item>
                <div className='row'>
                  <div className='col-md-6 col-sm-6'>
                    <Card>
                      <Card.Body>
                        <h1 className='carpet-icon'><GiRedCarpet /></h1>
                        <Card.Title className='slide-title'>Carpet Cleaning</Card.Title>
                      </Card.Body>
                      <div className='card-img'>
                        <img src={cleaning} alt="" />
                      </div>
                    </Card>
                  </div>

                  <div className='col-md-6 col-sm-6'>
                    <Card>
                      <Card.Body>
                        <h1 className='kitchen-icon'><FaKitchenSet /></h1>
                        <Card.Title className='slide-title'>Kitchen Cleaning</Card.Title>
                      </Card.Body>
                      <div className='card-img'>
                        <img src={cleaning} alt="" />
                      </div>
                    </Card>
                  </div>


                </div>
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
          </div>
        </div>
      </div>


      <div className='services-experience container'>
        <div className='row'>
          <div className='choose-us col-md-6 col-sm-12'>
            <h5>WHY CHOOSE US</h5>
            <h1>25 Years Experience In <br />Cleaning Industry</h1>
            <p className='text-secondary'>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam <br />
              dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet
              <br />dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed <br />diam duo.</p>
            <div className='about-servies row'>
              <div className='col-md-4 col-sm-3'>
                <h3>225</h3>
                <h6>Our Cleaners</h6>
              </div>

              <div className='col-md-4 col-sm-3'>
                <h3>1050</h3>
                <h6>Happy Clients</h6>
              </div>

              <div className='col-md-4 col-sm-3'>
                <h3>2500</h3>
                <h6>Projects Done</h6>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <img src={feature} style={{ width: "380px", height: "90vh", borderRadius: "5px" }} alt="" />

          </div>


        </div>

      </div>

      <div className='container mt-5'>
        <Carousel>
          <Carousel.Item>
            <div className='row'>
              <div className='col-md-4 col-sm-12'>
                <Card className='back-color'>
                  <div className='experienced-cleaner-card-img'>
                    <img src={experince1} alt="" />
                  </div>
                  <Card.Body>
                    <Card.Title className='title'></Card.Title>
                    <div className='experience-name'>
                      <h4>Full Name</h4>
                      <p>Designation</p>
                    </div>

                  </Card.Body>
                </Card>
              </div>

              <div className='col-md-4 col-sm-12'>
                <Card className='back-color'>
                  <div className='experienced-cleaner-card-img'>
                    <img src={experince2} alt="" />
                  </div>
                  <Card.Body>
                    <Card.Title className='title'></Card.Title>
                    <div className='experience-name'>
                      <h4>Full Name</h4>
                      <p>Designation</p>
                    </div>

                  </Card.Body>
                </Card>
              </div>


              <div className='col-md-4 col-sm-12'>
                <Card className='back-color'>
                  <div className='experienced-cleaner-card-img'>
                    <img src={experince3} alt="" />
                  </div>
                  <Card.Body>
                    <Card.Title className='title'></Card.Title>

                    <div className='experience-name'>
                      <h4>Full Name</h4>
                      <p>Designation</p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <Carousel.Caption>
            </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item>


            <div className='row'>
              <div className='col-md-4 col-sm-12'>
                <Card className='back-color'>
                  <div className='experienced-cleaner-card-img'>
                    <img src={experince4} alt="" />
                  </div>
                  <Card.Body>
                    <Card.Title className='title'></Card.Title>
                    <div className='experience-name'>
                      <h4>Full Name</h4>
                      <p>Designation</p>
                    </div>

                  </Card.Body>
                </Card>
              </div>

              <div className='col-md-4 col-sm-12'>
                <Card className='back-color'>
                  <div className='experienced-cleaner-card-img'>
                    <img src={experience5} alt="" />
                  </div>
                  <Card.Body>
                    <Card.Title className='title'></Card.Title>
                    <div className='experience-name'>
                      <h4>Full Name</h4>
                      <p>Designation</p>
                    </div>

                  </Card.Body>
                </Card>
              </div>


              <div className='col-md-4 col-sm-12'>
                <Card className='back-color'>
                  <div className='experienced-cleaner-card-img'>
                    <img src={experience6} alt="" />
                  </div>
                  <Card.Body>
                    <Card.Title className='title'></Card.Title>
                    <div className='experience-name'>
                      <h4>Full Name</h4>
                      <p>Designation</p>
                    </div>

                  </Card.Body>
                </Card>
              </div>
            </div>
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>




      <div className='testonimial container-fluid'>
        <div className='row'>
          <div className='testonimal-txt col-md-7 col-sm-12'>
            <h5>TESTIMONIAL</h5>
            <h1>What Our Clients Say</h1>
            <div className='clients'>
              <div className='client-img'>
                <img src={clients} alt="" />
              </div>
              <div className='client-data'>
                <h4>Client Name</h4>
                <h6>profession</h6>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Praesentium, <br />
              facere rerum architecto ex maiores reiciendisconsectetur  quibusdam <br />
              tempora hic eum necessitatibus aliquam  inventore saepe ea voluptate <br />
              repellendus ipsam id sequi.</p>
          </div>

          <div className='testonimal-img col-md-5 col-sm-12'>
            <img src={testonimialimg} alt="" />
          </div>

        </div>
      </div>


      <div className='container'>
        <div className='blogg row'>
          <div className='blog col-md-6 col-sm-6'>
            <h4>LATEST BLOG</h4>
            <h1>Latest Articles <br />From Our Blog Post</h1>
          </div>

          <div className='blog-p col-md-6 col-sm-6'>
            <p>Eirmod kasd duo eos et magna, diam <br />
              dolore stet sea clita sit ea erat lorem. <br />
              Ipsum eos ipsum magna lorem stet</p>
          </div>
        </div>

      </div>

      <div className='container'>
        <div className='row mt-3 mb-5'>
          <div className='blog-text col-md-4 col-sm-12'>
            <img src={blog1} alt="" className='blog-img' />
            <h6>ADMIN <span className='blog-admin'>|</span> CLEANING</h6>
            <h4>Rebum lorem eos ipsum <br />diam</h4>
            <p>Dolor justo sea kasd lorem clita <br />
              justo no diam amet. Kasd magna <br />
              dolor amet</p>
            <Link to="/readmore"><button>Read More</button></Link>
          </div>
          <div className='blog-text col-md-4 col-sm-12'>
            <img src={blog1} alt="" className='blog-img' />
            <h6>ADMIN <span className='blog-admin'>|</span> CLEANING</h6>
            <h4>Rebum lorem eos ipsum <br />diam</h4>
            <p>Dolor justo sea kasd lorem clita <br />
              justo no diam amet. Kasd magna <br />
              dolor amet</p>
              <Link to="/readmore"><button>Read More</button></Link>
          </div>
          <div className='blog-text col-md-4 col-sm-12'>
            <img src={blog1} alt="" className='blog-img' />
            <h6>ADMIN <span className='blog-admin'>|</span> CLEANING</h6>
            <h4>Rebum lorem eos ipsum <br />diam</h4>
            <p>Dolor justo sea kasd lorem clita <br />
              justo no diam amet. Kasd magna <br />
              dolor amet</p>
              <Link to="/readmore"><button>Read More</button></Link>
          </div>
        </div>

      </div>

      <Footer />

    </>
  )
}

export default Home
