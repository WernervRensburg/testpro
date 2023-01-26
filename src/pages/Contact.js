import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useEffect, useRef, useState } from 'react';

import { Wrapper, Status } from '@googlemaps/react-wrapper';

import './static/styles/contact.css';

function ContactPage() {
    return (
        <>
            <Container fluid>
                <Row className="d-flex justify-content-center contact-wrapper">
                    <Col xs={12} sm={4} className="d-flex justify-content-center container-contact">
                        Image
                    </Col>
                    <Col xs={12} sm={4} className="d-flex justify-content-center container-contact">
                        Details
                    </Col>
                    <Col xs={12} sm={4} className="d-flex justify-content-center container-contact">
                        Map
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center form-wrapper">
                    <Col xs={12} className="d-flex justify-content-center container-map">
                        Contact Form
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ContactPage;