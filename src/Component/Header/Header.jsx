import React from 'react'
import logo from "../../Assets/images/laundry logo.jpeg"
import "../../Assets/css/Main.css"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
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

            <Link className='HeaderLink' to="/">Home</Link>
            <Link className='HeaderLink' to="/about">About</Link>
            <Link className='HeaderLink' to="/contact">Contact</Link>
            <Link className='HeaderLink' to="/login"><span className='login-button'>Login</span></Link>
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
