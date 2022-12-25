import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Collapse from 'react-bootstrap/Collapse';

import { Link } from 'react-router-dom';

import { useState } from 'react';

import './static/styles/navbar.css';
import logo from '../assets/logo.png';
import logo_small from '../assets/testpro-logo.png';

function NavbarComponent() {
  
  const [show, setShow] = useState(false);
   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [hover, setHover] = useState(false);
  
  return(
    <>
    {['xl'].map((expand) => (
      <Navbar key={expand} expand={expand} className="mb-3" variant='light'>
        <Container fluid>
          <Navbar.Brand as={Link} to="/" title="Home">
            <Image className="navbar-logo fluid d-none d-md-block" src={logo}/>
            <Image className="navbar-logo-small d-md-none" src={logo_small}/>
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

                { /* Dropdown menu for services */ }                
                <NavDropdown
                  title="SERVICES"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                  className="dropdown-transition"
                >
                  <NavDropdown.Item>
                    <Nav.Link className="expand" as={Link} to="/services/concrete" title="Projects" onClick={handleClose}>
                      &nbsp;&nbsp;CONCRETE&nbsp;&nbsp;
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link className="expand" as={Link} to="/services/asphalt" title="Projects" onClick={handleClose}>
                      &nbsp;&nbsp;ASPHALT&nbsp;&nbsp;
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link className="expand" as={Link} to="/services/soilgravel" title="Projects" onClick={handleClose}>
                      &nbsp;&nbsp;SOIL & GRAVEL&nbsp;&nbsp;
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link className="expand" as={Link} to="/services/aggregate" title="Projects" onClick={handleClose}>
                      &nbsp;&nbsp;AGGREGATE&nbsp;&nbsp;
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link className="expand" as={Link} to="/services/centerline" title="Projects" onClick={handleClose}>
                      &nbsp;&nbsp;CENTER LINE&nbsp;&nbsp;
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link className="expand" as={Link} to="/services/placeholder" title="Projects" onClick={handleClose}>
                      &nbsp;&nbsp;PLACEHOLDER&nbsp;&nbsp;
                    </Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
                  
                <Nav.Item>
                  <Nav.Link className="expand" as={Link} to="/projects" title="Projects" onClick={handleClose}>
                    &nbsp;&nbsp;PROJECTS&nbsp;&nbsp;
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="expand" as={Link} to="/contact" title="Contact" onClick={handleClose}>
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
