import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import footer_background from '../assets/footer-background.png';
import logo_transparent from '../assets/logo-transparent.png';

import './static/styles/footer.css';

function FooterComponent() {

    return(
        <div className="Footer footer-container">
            <Container fluid>
                <Row>
                    <Col xs={12} lg={4} className="footer-container-inner justify-content-md-start">
                        <div className="footer-emph">
                            CONTACT US
                        </div>
                        <Row>
                            <Col xs={6} className="inner-c">
                                <div className="footer-list">
                                    <ul className="footer-ul">
                                        <li className="footer-list-item">
                                            <a href="tel:+27446950831">
                                                <i className="fa-solid fa-phone"></i>
                                                <span className="no-emph">&nbsp;+27&nbsp;44&nbsp;695&nbsp;0831&nbsp;</span> 
                                            </a>
                                        </li>
                                        <li className="footer-list-item">
                                            <a href="mailto:info@testpro.co.za">
                                                <i className="fa-solid fa-envelope"></i>
                                                <span className="no-emph">&nbsp;info@testpro.co.za</span>
                                            </a>
                                        </li>
                                        <li className="footer-list-item">
                                            <a href="https://goo.gl/maps/e7yKJbfZ4hrRydV58">
                                                <i className="fa-solid fa-location-dot"></i>
                                                <span className="no-emph">
                                                    5 Voorbaai Crescent
                                                    <br/>
                                                    Bayview
                                                    <br/>
                                                    Hartenbos
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={6} className="inner-c">
                                <div className="footer-list">
                                    <ul className="footer-ul">
                                        <li className="footer-list-item">
                                            <a href="https://www.facebook.com/testpro.laboratory.01">
                                                <i className="fa-brands fa-facebook"></i>
                                                <span className="no-emph">fb.me/testpro</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={4} className="footer-container-inner footer-accdetails justify-content-md-start">
                        <div className="accdetails-wrapper">
                            <div className="footer-emph">
                                LINKS
                            </div>
                            <Row>
                                <Col xs={12} className="inner-c">
                                    <div className="links-list">
                                        <ul className="footer-ul">
                                            <li className="footer-list-item">
                                                <a href="#">
                                                    <i className="fa-solid fa-angle-right"></i>
                                                    <span className="no-emph">Accreditation</span>
                                                </a>
                                            </li>
                                            <li className="footer-list-item">
                                                <a href="#">
                                                    <i className="fa-solid fa-angle-right"></i>
                                                    <span className="no-emph">BEE</span>
                                                </a>
                                            </li>
                                            <li className="footer-list-item">
                                                <a href="#">
                                                    <i className="fa-solid fa-angle-right"></i>
                                                    <span className="no-emph">Projects</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={12} lg={4} className="footer-container-inner justify-content-md-start">
                        <div className="footer-quick-about justify-content-md-start">
                            <Image className="logo-transparent" src={logo_transparent}></Image>
                        </div>
                        <div className="no-emph">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae congue turpis, et ornare magna. Sed fermentum vel mauris sed cursus. Duis eu mattis mi. Pellentesque nec semper dui. Suspendisse volutpat odio tincidunt ante tincidunt tincidunt. In id neque velit. Aliquam euismod ligula nibh. Fusce vel leo at neque venenatis.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FooterComponent;