import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';



function Appbar() {
  return (
    <div className=''>
       <Navbar expand="lg" className="appachi">
      <Container className='fluid'>
        <Navbar.Brand className='java'>Furni.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="Total">
      <div className="home"><NavLink className='home'  to='/'>Home</NavLink></div>      
      <div className="home"> <NavLink className='home' to='/shop'>Shop</NavLink></div>     
      <div className="home"><NavLink className='about' to='/about'>About</NavLink></div>      
       <div className="home"><NavLink className='services' to='/services'>Services</NavLink></div>     
       <div className=""><NavLink className='blog' to='/Rblog'>Blog</NavLink></div>     
       <div className="home"><NavLink className='contact' to='/contact'>Contact Us</NavLink></div>     
       {/* <div className="home"><NavLink className='contact' to='/Signin'>Signin</NavLink></div>    
       <div className="home"><NavLink className='contact' to='/Login'>Login</NavLink></div>   */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Appbar
