import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './static/styles/header.css';

function HeaderComponent() {

    return(
        <div className="header-container">
            <div className="header-spacer"></div>
            <Container fluid>
                <Row className="header-row">
                    <Col md={12} lg={6} className="contact-details d-flex justify-content-lg-start justify-content-center">
                        <div className="inner">
                            <b className="emph">CALL US&nbsp;:</b><span className="no-emph">&nbsp;+27&nbsp;44&nbsp;695&nbsp;0831&nbsp;|</span>
                            <b className="emph">&nbsp;EMAIL&nbsp;:</b><span className="no-emph">&nbsp;info@testpro.co.za</span>
                        </div>
                    </Col>
                    <Col md={12} lg={6} className="media-links d-flex justify-content-lg-end justify-content-center">
                        <div className="inner">
                            <a href="https://www.facebook.com/testpro.laboratory.01/?ref=page_internal" target="blank" className="icon fa-brands fa-square-facebook fa-xl" aria-hidden="true"/>
                            <a href="#" target="_blank" className="icon fa-brands fa-linkedin fa-xl" alt="LinkedIn page of Manager"/>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="header-spacer"></div>
        </div>
    );
}

export default HeaderComponent;