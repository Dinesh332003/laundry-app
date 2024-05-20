import React, { useEffect, useState } from 'react'
import logo from "../../Assets/images/laundry logo.jpeg"
import "../../Assets/css/Main.css"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useLocation} from "react-router-dom"
const Header = () => {

 
  const  location =useLocation()

  const activelink=["/","/about","/contact","/login"].indexOf(location.pathname)


 


// useEffect(()=>{
//   ActiveHandleChange();
// },[])
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary Navbar">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} style={{width:"50px",height:"50px"}} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 Header"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='menu'>

            <Link  className={`HeaderLink ${activelink === 0 ? "activee":""}`}
              to="/">Home</Link>
            <Link className={`HeaderLink ${activelink === 1 ? "activee":""}`} 
             to="/about">About</Link>
            <Link className={`HeaderLink ${activelink === 2 ? "activee":""}`} 
            to="/contact">Contact</Link>
            <Link className={`HeaderLink ${activelink === 3 ? "activee":""}`} 
             to="/login"><span >Login</span></Link>
            </div>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
