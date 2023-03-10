import { Col, Row, Container, Image } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import image from '../../assets/ConcreteDetailed.png';

import '../static/styles/services.css';

function ConcretePage() {
    return (
        <>
            <Container fluid>
                <Row className="d-flex justify-content-center service-row header-row">
                    <Col xxl={12} className="d-flex justify-content-center">
                        <h2 className="service-header">
                            CONCRETE SERVICES
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
                                    We offer a comprehensive range of concrete tests and other
                                    related concrete services.
                                </h5>
                                <div className="dsc-text">
                                    <p className="dsc-par">
                                        We understand the importance of reliable and precise results, and
                                        we strive to deliver the highest quality service to our clients.
                                    </p>
                                    <p className="dsc-par">
                                        Whether you need testing for a small residential project or a
                                        large-scale commercial development, we can provide the expertise
                                        and resources necessary to ensure your concrete meets the required
                                        standards and specifications.
                                    </p>
                                    <p className="dsc-par">
                                        Some of the tests we perform:
                                    </p>
                                </div>
                                <div className="dsc-ul ul-left">
                                    <ul className="dsc-ul">
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Making & Curing of Test Specimens</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Slump Test</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Compressive Strength of Hardened Concrete</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Concrete Paving Blocks</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Drilling, Preparing & Testing for Compressive Strength of Cores Taken From Hardened Concrete</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dsc-ul ul-right">
                                    <ul className="dsc-ul">
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Sampling of Freshly Mixed Concrete</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Linear Drying Shrinkage</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Preparation of Test Specimens</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Flow Test</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-md-start justify-content-center service-col">
                        <div className="dsc-services-container img-services">
                            <Fade right>
                                <Image className="dsc-image" src={image}></Image>
                            </Fade>
                        </div>
                    </Col>
                </Row>                
           </Container>
        </>
    );
}

export default ConcretePage;