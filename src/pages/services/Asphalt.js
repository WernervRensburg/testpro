import { Col, Row, Container, Image } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import image from '../../assets/AsphaltDetailed.png';

import '../static/styles/services.css';

function AsphaltPage() {
    return (
        <>
            <Container fluid>
                <Row className="d-flex justify-content-center service-row header-row">
                    <Col xxl={12} className="d-flex justify-content-center">
                        <h2 className="service-header">
                            ASPHALT & BITUMEN SERVICES
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
                                    We conduct a wide variety of asphalt and bitumen tests and other
                                    related tests.
                                </h5>
                                <div className="dsc-text">
                                    <p className="dsc-par">
                                        We understand that reliable materials are essential to the success
                                        of any construction project, which is why we use industry-standard
                                        testing methods to assess the characteristics of these materials.
                                    </p>
                                    <p className="dsc-par">
                                        Whether you require testing for a minor asphalt repair job or a
                                        major highway construction project, we have the knowledge and
                                        equipment needed to ensure that your asphalt and bitumen
                                        materials meet the necessary standards and specifications.
                                        With the help of our experienced technicians, you can make
                                        informed decisions about your materials, ensuring the quality
                                        and performance of your projects.
                                    </p>
                                    <p className="dsc-par">
                                        Some of the tests we perform:
                                    </p>
                                </div>
                                <div className="dsc-ul ul-left">
                                    <ul className="dsc-ul">
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Making of Asphalt Briquettes for Marshall Tests and Other Specialised Tests</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Marshall Stability, Flow & Quotient</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Softening Point of Bitumen (Ring and Ball Apparatus)</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Soluble Binder Content and Particle Size Analysis</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Binder Content of Slurry</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Rubber Bitumen Testing</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dsc-ul ul-right">
                                    <ul className="dsc-ul">
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Bulk Density and Void Content</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Maximum Voidless Density of Asphalt and Quantity of Binder Absorbed</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">ITS</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Viscosity</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Penetration of Bitumen</span>
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
    )
}

export default AsphaltPage;