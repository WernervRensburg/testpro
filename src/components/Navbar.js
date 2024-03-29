import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link, useLocation } from "react-router-dom";

import React, { useState } from "react";

import "./static/styles/navbar.css";
import logo from "../assets/logo.png";
import name from "../assets/name.png";
import small from "../assets/testpro-logo.png";

function NavbarComponent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const location = useLocation();

    const shadowPages = [
        "/services/concrete",
        "/services/asphalt",
        "/services/ssg",
        "/services/aggregate",
        "/services/fieldtesting",
        "/services/sampling",
        "/services/other",
        "/about",
        "/projects",
        "/contact",
    ];

    const shouldHaveShadow = shadowPages.includes(location.pathname);

    const navbarClassName = shouldHaveShadow
        ? "mb-3 navbar with-shadow"
        : "mb-3 navbar";

    return (
        <>
            {["xl"].map((expand) => (
                <Navbar
                    key={expand}
                    expand={expand}
                    className={navbarClassName}
                    variant='light'
                >
                    <Container fluid>
                        <Navbar.Brand as={Link} to='/' title='Home' className="nav-brand">
                            <Image
                                className='navbar-logo fluid d-none d-md-block'
                                src={logo}
                            />
                            <Image
                                className='navbar-logo-small d-md-none'
                                src={small}
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                            onClick={handleShow}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement='end'
                            show={show}
                            onHide={handleClose}
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbar-label-${expand}`}
                                    onClick={handleClose}
                                    className='navbar-header'
                                >
                                    <React.Fragment>
                                        <img
                                            className='canvas-name'
                                            src={name}
                                            alt="Testpro Laboratory Name"
                                        />
                                    </React.Fragment>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className='justify-content-end flex-grow-1 pe-3'>
                                    <Nav.Item>
                                        <Nav.Link
                                            className='expand nav-link-text'
                                            as={Link}
                                            to='/'
                                            title='Home'
                                            onClick={handleClose}
                                        >
                                            &nbsp;&nbsp;HOME&nbsp;&nbsp;
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className='expand nav-link-text'
                                            as={Link}
                                            to='/about'
                                            title='About'
                                            onClick={handleClose}
                                        >
                                            &nbsp;&nbsp;ABOUT&nbsp;&nbsp;
                                        </Nav.Link>
                                    </Nav.Item>

                                    {/* Dropdown menu for services */}
                                    <NavDropdown
                                        title={
                                            <span className='dropdown-text expand-dropdown'>
                                                &nbsp;&nbsp;SERVICES
                                            </span>
                                        }
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        className='dropdown-transition'
                                    >
                                        <NavDropdown.Item>
                                            <Nav.Link
                                                className='expand nav-link-text'
                                                as={Link}
                                                to='/services/concrete'
                                                title='concrete-service'
                                                onClick={handleClose}
                                            >
                                                &nbsp;&nbsp;CONCRETE&nbsp;&nbsp;
                                            </Nav.Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Nav.Link
                                                className='expand nav-link-text'
                                                as={Link}
                                                to='/services/asphalt'
                                                title='asphalt-service'
                                                onClick={handleClose}
                                            >
                                                &nbsp;&nbsp;ASPHALT &
                                                BITUMEN&nbsp;&nbsp;
                                            </Nav.Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Nav.Link
                                                className='expand nav-link-text'
                                                as={Link}
                                                to='/services/ssg'
                                                title='ssg-service'
                                                onClick={handleClose}
                                            >
                                                &nbsp;&nbsp;SOIL, SAND &
                                                GRAVEL&nbsp;&nbsp;
                                            </Nav.Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Nav.Link
                                                className='expand nav-link-text'
                                                as={Link}
                                                to='/services/aggregate'
                                                title='aggregate-service'
                                                onClick={handleClose}
                                            >
                                                &nbsp;&nbsp;AGGREGATE&nbsp;&nbsp;
                                            </Nav.Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Nav.Link
                                                className='expand nav-link-text'
                                                as={Link}
                                                to='/services/fieldtesting'
                                                title='ft-service'
                                                onClick={handleClose}
                                            >
                                                &nbsp;&nbsp;FIELD
                                                TESTING&nbsp;&nbsp;
                                            </Nav.Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Nav.Link
                                                className='expand nav-link-text'
                                                as={Link}
                                                to='/services/sampling'
                                                title='sampling-service'
                                                onClick={handleClose}
                                            >
                                                &nbsp;&nbsp;SAMPLING&nbsp;&nbsp;
                                            </Nav.Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Nav.Link
                                                className='expand nav-link-text'
                                                as={Link}
                                                to='/services/other'
                                                title='other-service'
                                                onClick={handleClose}
                                            >
                                                &nbsp;&nbsp;OTHER
                                                SERVICES&nbsp;&nbsp;
                                            </Nav.Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Item>
                                        <Nav.Link
                                            className='expand nav-link-text'
                                            as={Link}
                                            to='/projects'
                                            title='Projects'
                                            onClick={handleClose}
                                        >
                                            &nbsp;&nbsp;PROJECTS&nbsp;&nbsp;
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className='expand nav-link-text'
                                            as={Link}
                                            to='/contact'
                                            title='Contact'
                                            onClick={handleClose}
                                        >
                                            &nbsp;&nbsp;CONTACT&nbsp;US&nbsp;&nbsp;
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
