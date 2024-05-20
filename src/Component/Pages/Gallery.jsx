import React from 'react'
import Card from 'react-bootstrap/Card';
import gallery1 from "../../Assets/images/gallery-1.jpeg"
import gallery2 from "../../Assets/images/gallery-2.jpeg"
import gallery3 from "../../Assets/images/gallery-3.jpeg"
import gallery16 from "../../Assets/images/gallery-16.jpeg"
import gallery5 from "../../Assets/images/gallery-5.jpeg"
import gallery6 from "../../Assets/images/gallery-6.jpeg"
import gallery7 from "../../Assets/images/gallery-7.jpeg"
import gallery8 from "../../Assets/images/gallery-8.jpeg"
import gallery9 from "../../Assets/images/gallery-9.jpeg"
import gallery10 from "../../Assets/images/gallery-10.jpeg"
import gallery11 from "../../Assets/images/gallery-11.jpeg"
import gallery12 from "../../Assets/images/gallery-12.jpeg"
import gallery13 from "../../Assets/images/gallery-13.jpeg"
import gallery14 from "../../Assets/images/gallery-14.jpeg"
import gallery15 from "../../Assets/images/gallery-15.jpeg"
import dry1 from "../../Assets/images/dry-1.jpeg"
import dry2 from "../../Assets/images/dry-2.jpeg"
import dry3 from "../../Assets/images/dry-3.jpeg"
import dry4 from "../../Assets/images/dry-4.jpeg"
import dry5 from "../../Assets/images/dry-5.jpeg"
import dry6 from "../../Assets/images/dry-6.jpeg"
import dry7 from "../../Assets/images/dry-7.jpeg"
import dry8 from "../../Assets/images/dry-8.webp"
import dry9 from "../../Assets/images/dry-9.jpeg"
import dry10 from "../../Assets/images/dry-10.jpeg"
import dry11 from "../../Assets/images/dry-11.jpeg"
import dry12 from "../../Assets/images/dry-12.jpeg"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import iron1 from "../../Assets/images/iron-1.jpeg"
import iron2 from "../../Assets/images/iron-2.jpeg"
import iron3 from "../../Assets/images/iron-3.jpeg"
import iron4 from "../../Assets/images/iron-4.jpeg"
import iron5 from "../../Assets/images/iron-5.jpeg"
import iron6 from "../../Assets/images/iron-6.jpeg"
import iron7 from "../../Assets/images/iorn-7.jpeg"
import iron8 from "../../Assets/images/iron-8.jpeg"
import iron9 from "../../Assets/images/iron-9.jpeg"
import hs1 from "../../Assets/images/hs-1.jpeg"
import hs2 from "../../Assets/images/hs-2.jpeg"
import hs3 from "../../Assets/images/hs-3.jpeg"
import hs4 from "../../Assets/images/hs-4.jpeg"
import hs5 from "../../Assets/images/hs-5.jpeg"
import hs6 from "../../Assets/images/hs-6.jpeg"
import hs7 from "../../Assets/images/hs-7.jpeg"
import hs8 from "../../Assets/images/hs-8.jpeg"
import hs9 from "../../Assets/images/hs-9.jpeg"
import hs10 from "../../Assets/images/hs-10.jpeg"
import hs11 from "../../Assets/images/hs-11.jpeg"
import hs12 from "../../Assets/images/hs-12.jpeg"
import hs13 from "../../Assets/images/hs-13.jpeg"
import hs14 from "../../Assets/images/hs-14.jpeg"
import hs15 from "../../Assets/images/hs-15.jpeg"
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
   <>
   <Header/>
   

   <div className='contact  row'>
<div className='cont-logo col-12 col-md-12'>
<h1>GALLERY</h1>
 <Link to="/"><button>Home</button></Link>
<Link to="/about"><button>Contact</button></Link>

</div>  
     </div>
   <div className='gallery container-fluid'>

   <div className='service-imgs'>
<h1>House & Soft Furnishing</h1>
    </div>



   <div className='row'>
        <div className='col-12 col-md-4 mt-4'>
        <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={hs1} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>

              </Card.Body> */}
            </Card>
          </div>
          <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={hs2} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
          </div>
          <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={hs3} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
          </div>

          <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={hs4} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={hs5} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={hs6} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={hs7} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
       <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={hs8} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={hs9} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={hs10} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={hs11} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={hs12} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={hs13} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={hs14} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4 mb-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={hs15} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
    </div>

    <div className='service-imgs'>
<h1>Kitchen Services</h1>
    </div>
    <div className='row'>
        <div className='col-12 col-md-4 mt-4'>
        <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={gallery1} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>

              </Card.Body> */}
            </Card>
          </div>
          <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={gallery2} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
          </div>
          <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={gallery3} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
          </div>

          <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={gallery16} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={gallery5} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={gallery6} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={gallery7} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
       <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={gallery8} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={gallery9} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={gallery10} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={gallery11} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={gallery12} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={gallery13} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={gallery14} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4 mb-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={gallery15} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
    </div>



<div className='service-imgs'>
<h1>Dry Cleaning</h1>
</div>

    <div className='row'>
        <div className='col-12 col-md-4 mt-4'>
        <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={dry1} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>

              </Card.Body> */}
            </Card>
          </div>
          <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={dry2} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
          </div>
          <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={dry3} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
          </div>

          <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={dry4} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={dry5} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={dry6} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={dry7} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
       <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={dry8} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={dry9} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={dry10} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={dry11} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={dry12} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
       
    </div>


    
<div className='service-imgs'>
<h1>Iron Services</h1>
</div>

<div className='row'>
        <div className='col-12 col-md-4 mt-4'>
        <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={iron1} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>

              </Card.Body> */}
            </Card>
          </div>
          <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={iron2} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
          </div>
          <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={iron3} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
          </div>

          <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={iron4} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={iron5} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={iron6} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={iron7} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
       <div className='col-12 col-md-4 mt-4'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={iron8} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
        <div className='col-12 col-md-4 mt-4 mb-5'>
            <Card className='gallery-box'>
              <div className='gallery-imgg'>
                <img src={iron9} alt="" />
              </div>
              {/* <Card.Body>
                <Card.Title className='gallery-title'></Card.Title>
              </Card.Body> */}
            </Card>
        </div>
    </div>
   </div>

   <Footer/>
   </>
  )
}

export default Gallery
