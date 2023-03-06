import { Col, Row, Container, Image } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import image from '../../assets/SSGDetailed.png';

import '../static/styles/services.css';

function SoilGravelPage() {
    return (
        <>
            <Container fluid>
                <Row className="d-flex justify-content-center service-row header-row">
                    <Col xxl={12} className="d-flex justify-content-center">
                        <h2 className="service-header">
                            SOIL, SAND & GRAVEL SERVICES
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
                                We provide a comprehensive range of soil, sand, and gravel
                                services, including testing and other related services
                                </h5>
                                <div className="dsc-text">
                                    <p className="dsc-par">
                                    Our experienced team uses industry-standard testing methods and
                                    equipment to assess the properties of these materials, ensuring that
                                    the results are reliable and accurate.
                                    </p>
                                    <p className="dsc-par">
                                    Whether you require testing for a construction project or need advice
                                    on material selection, we have the expertise and resources to meet
                                    your needs. Our goal is to provide you with accurate and reliable
                                    results, helping you make informed decisions about your materials
                                    and ensuring the success of your project.
                                    </p>
                                    <p className="dsc-par">
                                        Some of the tests we perform:
                                    </p>
                                </div>
                                <div className="dsc-ul ul-left">
                                    <ul className="dsc-ul">
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">One-Point Liquid Limit</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Plastic Limit, Plastic Index & Linear Shrinkage</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Maximum Dry Density & Moisture Content</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Maximum Dry Density & Optimum Moisture Content of Lab-Mixed Cementitiously Stabilised Materials</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">California Bearing Ratio</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Flow Curve</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Wet Preparation & Particle Size Analysis</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Indirect Tensile Strength of Compacted & Cured Specimens</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Moisture-Content by Oven Drying</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dsc-ul ul-right">
                                    <ul className="dsc-ul">
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Hydrometer</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Prep, Compaction & Curing of Field Stabilised Materials</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Sampling & Prep of Matured Field Stabilised Materials</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Unconfined Compressive Strength of Compacted & Cured Specimens</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Prep, Compaction & Curing of Specimens of Lab-Mixed Cementitiously Stabilised Materials</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">Determination of Cement or Lime Content</span>
                                        </li>
                                        <li className="dsc-list-item">
                                            <i className="dsc-i fa-solid fa-angle-right align-angle fa-fw"></i>
                                            <span className="no-emph-dsc">ICL</span>
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

export default SoilGravelPage;