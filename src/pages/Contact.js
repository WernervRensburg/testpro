import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

import React, { useState } from 'react';

import './static/styles/contact.css';
import jaco_profile from '../assets/bigbossgrayscale.png';

function ContactPage() {
    
    const [name, setName] = useState(""),
        onInputName = ({target:{value}}) => setName(value);
    const [email, setEmail] = useState(""),
        onInputEmail = ({target:{value}}) => setEmail(value);
    const [number, setNumber] = useState(""),
        onInputNumber = ({target:{value}}) => setNumber(value);
    const [subject, setSubject] = useState(""),
        onInputSubject = ({target:{value}}) => setSubject(value);
    const [query, setQuery] = useState(""),
        onInputQuery = ({target:{value}}) => setQuery(value);

    const handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch("http://ec2-13-42-49-222.eu-west-2.compute.amazonaws.com:8000/contact/reachout/", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                number: number,
                subject: subject,
                query: query
            })
        });

        console.log(response.status)
        console.log(response)

    };

    return (
        <>
            <Container fluid>
                <Row className="d-flex justify-content-center contact-wrapper">
                    <Col xs={12} xl={4} className="d-flex justify-content-xl-end justify-content-center container-contact">
                        <Image className="image-container" src={jaco_profile}></Image>
                    </Col>
                    <Col xs={12} xl="auto" className="d-flex justify-content-center container-contact">
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
                    <Col xs={12} xl={4} className="d-flex justify-content-xl-start justify-content-center container-contact">
                        <iframe
                            title="google-maps"
                            className="map-container"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.5513189286663!2d22.101969829303574!3d-34.14108999878626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dd66918c3c3321b%3A0x810429f2c46899f2!2s5%20Voorbaai%20Cres%2C%20Die%20Voor%20Bay%2C%20Mossel%20Bay%2C%206506!5e0!3m2!1sen!2sza!4v1675086589453!5m2!1sen!2sza"
                        ></iframe>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} className="d-flex justify-content-start contact-seperator">
                        <div className="sep-v">
                            <span className="cu-image">reach out to us</span>
                        </div>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center form-wrapper">
                    <Col xs={12} className="d-flex justify-content-center container-form">
                        { /* Name */  }
                        <Form onSubmit={handleSubmit} className="contact-form">
                            <FloatingLabel
                                required
                                controlId="floatingInput"
                                label="Name"
                                className="mb-3"
                            >
                                <Form.Control 
                                    className="form-input"
                                    type="text"
                                    placeholder="Name"
                                    onChange={onInputName}
                                    value={name}
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email"
                                className="mb-3"
                            >
                                <Form.Control
                                    className="form-input"
                                    type="email"
                                    placeholder="name@example.com"
                                    onChange={onInputEmail}
                                    value={email}
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Contact Number"
                                className="mb-3"
                            >
                                <Form.Control
                                    className="form-input"
                                    type="text"
                                    placeholder="+27 12 345 6789"
                                    onChange={onInputNumber}
                                    value={number}
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Subject"
                                className="mb-3"
                            >
                                <Form.Control
                                    className="form-input"
                                    type="text"
                                    placeholder=""
                                    onChange={onInputSubject}
                                    value={subject}
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Query"
                                className="mb-3"
                            >
                                <Form.Control
                                    as="textarea"
                                    className="form-input"
                                    style={{ height: '170px', resize: 'none' }}
                                    type="text"
                                    placeholder=""
                                    onChange={onInputQuery}
                                    value={query}
                                />
                            </FloatingLabel>
                            <div>
                                <Button className="btn btn-color submit-button" type="submit">submit</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ContactPage;