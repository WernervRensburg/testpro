import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

import { useState } from 'react';

import './static/styles/navbar.css';

function NavbarComponent() {
  
  const [show, setShow] = useState(false);
   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return(
    <>
    {['sm'].map((expand) => (
      <Navbar key={expand} expand={expand} className="mb-3" variant='light'>
        <Container fluid>
          <Navbar.Brand as={Link} to="/" title="Home">Brand</Navbar.Brand>
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
                  <Nav.Link as={Link} to="/" title="Home" onClick={handleClose}>
                    HOME
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/about" title="About" onClick={handleClose}>
                    ABOUT
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/services" title="Services" onClick={handleClose}>
                    SERVICES
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/projects" title="Projects" onClick={handleClose}>
                    PROJECTS
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/about" title="About" onClick={handleClose}>
                    CONTACT US
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
