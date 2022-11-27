import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';

import { Link } from 'react-router-dom';

import { useState } from 'react';

import './static/styles/navbar.css';
import logo from '../assets/logo.png';

function NavbarComponent() {
  
  const [show, setShow] = useState(false);
   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return(
    <>
    {['sm'].map((expand) => (
      <Navbar key={expand} expand={expand} className="mb-3" variant='light'>
        <Container fluid>
          <Navbar.Brand as={Link} to="/" title="Home">
            <Image className="navbar-logo fluid" src={logo}/>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            onClick={handleShow}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbar-label-${expand}`}  onClick={handleClose}>
                Testpro Laboratory
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>  
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Item>
                  <Nav.Link className="expand" as={Link} to="/" title="Home" onClick={handleClose}>
                    &nbsp;&nbsp;HOME&nbsp;&nbsp;
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="expand" as={Link} to="/about" title="About" onClick={handleClose}>
                    &nbsp;&nbsp;ABOUT&nbsp;&nbsp;
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="expand" as={Link} to="/services" title="Services" onClick={handleClose}>
                    &nbsp;&nbsp;SERVICES&nbsp;&nbsp;
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="expand" as={Link} to="/projects" title="Projects" onClick={handleClose}>
                    &nbsp;&nbsp;PROJECTS&nbsp;&nbsp;
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="expand" as={Link} to="/about" title="About" onClick={handleClose}>
                    &nbsp;&nbsp;CONTACT US&nbsp;&nbsp;
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
    </>
  );
}

export default NavbarComponent;
