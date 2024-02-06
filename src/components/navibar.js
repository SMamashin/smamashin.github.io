import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export function Navibar() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" bg="dark" className="bg-body-tertiary navbar">
      <Container fluid>
        <Navbar.Brand href="#">
            <img src={logo} style={{height: '75px', width: '95px', marginLeft: '20%'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0" 
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to={'/'} className='me-auto my-2 my-lg-0 nav-link'>Домой</Link>
            {/*<Nav.Link href="#action2">Link</Nav.Link>*/}
            {/* Python */}
            <NavDropdown title="Python" id="navbarScrollingDropdown" className='navlink'>
              <Link to={'../pages/python'} className='dropdown-item'>Books</Link>
              <NavDropdown.Item href="#action4">
                Docs
              </NavDropdown.Item>
              {/*<NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
            </NavDropdown.Item>*/}
            </NavDropdown>
            {/* JavaScript */}
            <NavDropdown title="JavaScript" id="navbarScrollingDropdown">
            <Link to={'../pages/javascript'} className='dropdown-item'>Books</Link>
              <NavDropdown.Item href="#action4">
                Docs
              </NavDropdown.Item>
              </NavDropdown>
            {/* Ruby */}
            <NavDropdown title="Ruby" id="navbarScrollingDropdown">
            <Link to={'../pages/ruby'} className='dropdown-item'>Books</Link>
              <NavDropdown.Item href="#action4">
                Docs
              </NavDropdown.Item>
              </NavDropdown>
            {/* Rust */}
            <NavDropdown title="Rust" id="navbarScrollingDropdown">
            <Link to={'../pages/rust'} className='dropdown-item'>Books</Link>
              <NavDropdown.Item href="#action4">
                Docs
              </NavDropdown.Item>
              </NavDropdown>
            {/* C++ */}
            <NavDropdown title="C++" id="navbarScrollingDropdown">
            <Link to={'../pages/cpp'} className='dropdown-item'>Books</Link>
              <NavDropdown.Item href="#action4">
                Docs
              </NavDropdown.Item>
              </NavDropdown>
            {/* HTML/CSS */}
            <NavDropdown title="HTML/CSS" id="navbarScrollingDropdown">
            <Link to={'../pages/web'} className='dropdown-item'>Books</Link>
              <NavDropdown.Item href="#action4">
                Docs
              </NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;