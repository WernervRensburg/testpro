import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import React, { useState } from 'react';

import './static/styles/contact.css';

function ContactPage() {
    
    const [validated, setValidated] = useState(false);
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <Container fluid>
                <Row className="d-flex justify-content-center contact-wrapper">
                    <Col xs={12} lg={4} className="d-flex justify-content-lg-end justify-content-center container-contact">
                        <Image className="image-container" src="https://via.placeholder.com/480"></Image>
                    </Col>
                    <Col xs={12} lg="auto" className="d-flex justify-content-center container-contact">
                        <div className="contact-list-container">
                            <ul className="contact-ul">
                                
                                <li className="contact-li d-header">
                                    <h2>mossel bay</h2>
                                </li>

                                <li className="contact-li contact-person">
                                    <i className="fa-solid fa-user c-icon fa-fw"></i>
                                    <span className="ct">
                                        Jaco van Rensburg
                                    </span>
                                </li>

                                <li className="contact-li contact-address">
                                    <i className="fa-solid fa-location-dot fa-fw c-icon"></i>
                                    <a href="https://goo.gl/maps/e7yKJbfZ4hrRydV58">
                                        <span className="ct">
                                            5 Voorbaai Crescent
                                        </span><br/>
                                        <span className="ct">
                                            Die Voor Bay
                                        </span><br/>
                                        <span className="ct">
                                            Mossel Bay
                                        </span><br/>
                                        <span className="ct">
                                            6506
                                        </span>
                                    </a>
                                </li>

                                <li className="contact-li contact-number">
                                    <a href="tel:+27446950831">
                                        <i className="fa-solid fa-phone c-icon fa-fw"></i>
                                        <span className="ct">Tel:&nbsp;+27&nbsp;44&nbsp;695&nbsp;0831&nbsp;</span> 
                                    </a>
                                </li>

                                <li className="contact-li contact-office">
                                    <a href="tel:+27829287562">
                                        <i className="fa-solid fa-mobile-screen-button c-icon fa-fw"></i>
                                        <span className="ct">Cell:&nbsp;+27&nbsp;82&nbsp;928&nbsp;7562&nbsp;</span> 
                                    </a>
                                </li>

                                <li className="contact-li personal-email">
                                    <a href="mailto:jaco@testpro.co.za">
                                        <i className="fa-solid fa-envelope c-icon fa-fw"></i>
                                        <span className="ct">&nbsp;jaco@testpro.co.za</span>
                                    </a>
                                </li>
                                
                                <li className="contact-li office-email">
                                    <a href="mailto:info@testpro.co.za">
                                        <i className="fa-solid fa-envelope c-icon fa-fw visibility"></i>
                                        <span className="ct">&nbsp;info@testpro.co.za</span>
                                    </a>
                                </li>

                                <li className="contact-li contact-buttons justify-content-start">
                                    <a className="btn btn-color" href="/#">contact us</a>
                                    <a className="btn btn-color btn-spacing" href="/#" style={{ marginLeft: '1em'}}>experience</a>
                                </li>

                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} lg={4} className="d-flex justify-content-lg-start justify-content-center container-contact">
                    <iframe title="google-maps" className="map-container" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.5513189286663!2d22.101969829303574!3d-34.14108999878626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dd66918c3c3321b%3A0x810429f2c46899f2!2s5%20Voorbaai%20Cres%2C%20Die%20Voor%20Bay%2C%20Mossel%20Bay%2C%206506!5e0!3m2!1sen!2sza!4v1675086589453!5m2!1sen!2sza"></iframe>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} className="d-flex justify-content-start contact-seperator">
                        { /*
                        <div className="sep-v">
                            <span className="cu-image">contact us</span>
                        </div>
                        */ }
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center form-wrapper">
                    <Col xs={12} className="d-flex justify-content-center container-form">
                        { /* Name */  }
                        <Form noValidate validated={validated} onSubmit={handleSubmit} className="contact-form">
                            <FloatingLabel
                                required
                                controlId="floatingInput"
                                label="Name"
                                className="mb-3"
                            >
                                <Form.Control className="form-input" type="text" placeholder="Name"/>
                            </FloatingLabel>
                            { /* Email */  }
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email"
                                className="mb-3"
                            >
                                <Form.Control className="form-input" type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            { /* Contact Number */  }
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Contact Number"
                                className="mb-3"
                            >
                                <Form.Control className="form-input" type="text" placeholder="name@example.com" />
                            </FloatingLabel>
                            { /* Query */  }
                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Query"
                                className="mb-3"
                            >
                                <Form.Control className="query" type="text" placeholder="name@example.com" />
                            </FloatingLabel>
                            <div>
                                <a className="btn btn-color" href="/#">submit</a>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ContactPage;