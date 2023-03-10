import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import logo_transparent from "../assets/logo-transparent.png";

import accreditation from "../media/TestproAccreditation.pdf";
import profile from "../media/TestproCompanyProfile.pdf";

import "./static/styles/footer.css";

function FooterComponent() {
    return (
        <Container fluid>
            <Row className='big-seperator'></Row>
            <Row className='Footer footer-container'>
                <Col
                    xs={12}
                    lg={4}
                    className='footer-container-inner justify-content-md-start'
                >
                    <div className='footer-emph'>CONTACT US</div>
                    <Row className='list-row'>
                        <Col xs={6} className='inner-c a6'>
                            <div className='footer-list a5'>
                                <ul className='footer-ul a4'>
                                    <li className='footer-list-item a3'>
                                        <a href='tel:+27446950831'>
                                            <i className='fa-solid fa-phone a2 fa-fw'></i>
                                            <span className='no-emph a1'>
                                                &nbsp;+27&nbsp;44&nbsp;695&nbsp;0831&nbsp;
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-list-item a3'>
                                        <a href='mailto:info@testpro.co.za'>
                                            <i className='fa-solid fa-envelope a2 fa-fw'></i>
                                            <span className='no-emph a1'>
                                                &nbsp;info@testpro.co.za
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-list-item a3'>
                                        <div className='address'>
                                            <i className='fa-solid fa-location-dot a2 fa-fw'></i>
                                            <a href='https://goo.gl/maps/e7yKJbfZ4hrRydV58'>
                                                <span className='no-emph a1'>
                                                    5 Voorbaai Crescent
                                                </span>
                                                <br />
                                                <span className='no-emph a1'>
                                                    Die Voor Bay
                                                </span>
                                                <br />
                                                <span className='no-emph a1'>
                                                    Mossel Bay
                                                </span>
                                                <br />
                                                <span className='no-emph a1'>
                                                    6506
                                                </span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={6} className='inner-c a6'>
                            <div className='footer-list a5'>
                                <ul className='footer-ul a4'>
                                    <li className='footer-list-item a3'>
                                        <a href='https://www.facebook.com/testpro.laboratory.01'>
                                            <i className='fa-brands fa-facebook a2 fa-fw'></i>
                                            <span className='no-emph a1'>
                                                fb.me/testpro
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col
                    xs={12}
                    lg={4}
                    className='footer-container-inner footer-accdetails'
                >
                    <div className='accdetails-wrapper'>
                        <div className='footer-emph links'>LINKS</div>
                        <Row className='list-row'>
                            <Col xs={12} className='inner-c a6'>
                                <div className='links-list a5'>
                                    <ul className='footer-ul a4'>
                                        <li className='footer-list-item a3'>
                                            <a
                                                href={accreditation}
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                <i className='fa-solid fa-angle-right align-angle a2 fa-fw'></i>
                                                <span className='no-emph a1'>
                                                    Accreditation
                                                </span>
                                            </a>
                                        </li>
                                        <li className='footer-list-item a3'>
                                            <a
                                                href={profile}
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                <i className='fa-solid fa-angle-right align-angle a2 fa-fw'></i>
                                                <span className='no-emph a1'>
                                                    Company Profile
                                                </span>
                                            </a>
                                        </li>
                                        {/* 
                                        <li className="footer-list-item a3">
                                            <a href="/#">
                                                <i className="fa-solid fa-angle-right align-angle a2 fa-fw"></i>
                                                <span className="no-emph a1">BEE</span>
                                            </a>
                                        </li>
                                        */ }
                                        { /*
                                        <li className='footer-list-item a3'>
                                            <a href='/projects'>
                                                <i className='fa-solid fa-angle-right align-angle a2 fa-fw'></i>
                                                <span className='no-emph a1'>
                                                    Projects
                                                </span>
                                            </a>
                                        </li>
                                        */ }
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col
                    xs={12}
                    lg={4}
                    className='footer-container-inner justify-content-md-start'
                >
                    <div className='footer-quick-about justify-content-md-start'>
                        <Image
                            className='logo-transparent'
                            src={logo_transparent}
                        ></Image>
                    </div>
                    <div className='no-emph'>
                        <p>
                            Testpro Laboratory is a privately owned Civil
                            Engineering Materials Testing Laboratory established
                            in 2020 by Jaco van Rensburg. We pride ourselves on
                            offering our customers responsive, competent, and
                            excellent service.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className='pty-ltd-row'>
                <div className="pty-ltd">
                    2023 Testpro Laboratory Pty Ltd. All rights reserved.
                </div>
            </Row>
        </Container>
    );
}

export default FooterComponent;
