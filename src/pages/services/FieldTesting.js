import { Col, Row, Container, Image } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import '../static/styles/services.css';

function CenterlinePage() {
    return (
        <>
            <Container fluid>
                <Row className="d-flex justify-content-center service-row header-row">
                    <Col xxl={12} className="d-flex justify-content-center">
                        <h2 className="service-header">
                            FIELD TESTING
                            <Bounce left>
                                <hr className="dsc-home"/>
                            </Bounce>
                        </h2>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center service-row">
                    <Col xs={12} md={6} className="d-flex justify-content-md-end justify-content-center service-col">
                        <div className="dsc-services-container text-services">
                            <div className="dsc-service-inner">
                                <h5 className="dsc-header">
                                    We offer a variety of field testing services.
                                </h5>
                                <div className="dsc-text">
                                    <p className="dsc-par">
                                        Our team provides a comprehensive range of field testing
                                        services to help you evaluate and monitor the performance
                                        of your construction materials in real-world conditions.
                                    </p>
                                    <p className="dsc-par">
                                        We use advanced testing techniques and equipment to gather
                                        accurate data on factors such as soil density, compaction,
                                        and moisture content.
                                    </p>
                                    <p className="dsc-par">
                                        With us, you can ensure that your construction materials
                                        meet the required specifications and standards, reducing
                                        the risk of costly delays or failures. Whether you need
                                        periodic testing or continuous monitoring, we have the
                                        expertise and resources to meet your needs and keep your
                                        project on track.
                                    </p>
                                    <p className="dsc-par">
                                        Some of the tests we perform:
                                    </p>
                                </div>
                                <div className="dsc-ul ul-left">
                                    <ul className="dsc-ul">
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Marvil Test</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Insitu Density Using Nuclear Density Gauge</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">In Place Density of Soils & Gravels by Nuclear Methods</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dsc-ul ul-right">
                                    <ul className="dsc-ul">
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Ball Penetration Desk Test</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Testure Depth Measurement</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Insitu Strength of Soils by the Dynamic Cone Penetrometer</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-md-start justify-content-center service-col">
                        <div className="dsc-services-container img-services">
                            <Fade right>
                                <Image className="dsc-image" src="placeholder.com/250"></Image>
                            </Fade>
                        </div>
                    </Col>
                </Row>                
           </Container>
        </>
    )
}

export default CenterlinePage;