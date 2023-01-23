import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import './static/styles/home.css'

import landing_page_lg from '../assets/landing-page-lg.png';

function HomePage() {

  return (
    <>
    <Container fluid>
      <Row className="justify-content-center d-flex bg-row">
        <div className="bg-div">
          <Image className="landing-page" src={landing_page_lg}></Image>
        </div>
      </Row>
    </Container>

    <Container fluid>
      <Row className="services-container">
        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-end justify-content-center border-2">
          <Fade bottom>
            <Image className="service-img" src="https://via.placeholder.com/350x250/FFFF00"></Image>
          </Fade>
        </Col>
        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-start justify-content-center border-3">
          <div className="service-text-block text-border">
            <h2 className="service-name">CONCRETE</h2>
            <Bounce left>
              <hr className="hr-home"/>
            </Bounce>
            <div className="service-description border-1">
              <div className="text-container">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus sapien eget mauris facilisis, ut tempor risus volutpat. Pellentesque pulvinar in elit et fermentum. Maecenas condimentum, nisi ac viverra dapibus, lorem purus commodo leo, quis laoreet neque enim non neque. Nulla cursus orci purus, in fringilla sem sodales vel. Integer.
              </div>
              <ul className="home-ul l1">
                <li className="home-list-item l2">
                  {/* Link to concrete services */}
                  <a href="#">
                    <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                    <span className="no-emph l4">Slump tests</span>
                  </a>
                </li>
                <li className="home-list-item l2">
                  <a href="#">  
                    <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                    <span className="no-emph l4">Cube tests</span>
                  </a>
                </li>
                <li className="home-list-item l2">
                  <a href="#">  
                    <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                    <span className="no-emph l4">Core tests</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>

        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-end justify-content-center border-2">
          <div className="d-flex justify-content-center">
            <Fade bottom>
              <Image className="service-img" src="https://via.placeholder.com/350x250/FFFF00"></Image>
            </Fade>
          </div>
        </Col>
        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-start justify-content-center border-3">
          <div className="service-text-block text-border">
            <h2 className="service-name">ASPHALT</h2>
              <Bounce left>
                <hr className="hr-home"/>
              </Bounce>
              <div className="service-description border-1">
                <div className="text-container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus sapien eget mauris facilisis, ut tempor risus volutpat. Pellentesque pulvinar in elit et fermentum. Maecenas condimentum, nisi ac viverra dapibus, lorem purus commodo leo, quis laoreet neque enim non neque. Nulla cursus orci purus, in fringilla sem sodales vel. Integer.
                </div>
                <ul className="home-ul l1">
                  <li className="home-list-item l2">
                    {/* Link to concrete services */}
                    <a href="#">
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph l4">Slump tests</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="#">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph l4">Cube tests</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="#">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph l4">Core tests</span>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </Col>

        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-end justify-content-center border-2">
          <div className="d-flex justify-content-center">
            <Fade bottom>
              <Image className="service-img" src="https://via.placeholder.com/350x250/FFFF00"></Image>
            </Fade>
          </div>
        </Col>
        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-start justify-content-center border-3">
          <div className="service-text-block text-border">
            <h2 className="service-name">SOIL & GRAVEL</h2>
              <Bounce left>
                <hr className="hr-home"/>
              </Bounce>
              <div className="service-description border-1">
                <div className="text-container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus sapien eget mauris facilisis, ut tempor risus volutpat. Pellentesque pulvinar in elit et fermentum. Maecenas condimentum, nisi ac viverra dapibus, lorem purus commodo leo, quis laoreet neque enim non neque. Nulla cursus orci purus, in fringilla sem sodales vel. Integer.
                </div>
                <ul className="home-ul l1">
                  <li className="home-list-item l2">
                    {/* Link to concrete services */}
                    <a href="#">
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph l4">Slump tests</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="#">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph l4">Cube tests</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="#">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph l4">Core tests</span>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </Col>

        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-end justify-content-center border-2">
          <div className="d-flex justify-content-center">
            <Fade bottom>
              <Image className="service-img" src="https://via.placeholder.com/350x250/FFFF00"></Image>
            </Fade>
          </div>
        </Col>
        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-start justify-content-center border-3">
          <div className="service-text-block text-border">
            <h2 className="service-name">AGGREGATE</h2>
              <Bounce left>
                <hr className="hr-home"/>
              </Bounce>
              <div className="service-description border-1">
                <div className="text-container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus sapien eget mauris facilisis, ut tempor risus volutpat. Pellentesque pulvinar in elit et fermentum. Maecenas condimentum, nisi ac viverra dapibus, lorem purus commodo leo, quis laoreet neque enim non neque. Nulla cursus orci purus, in fringilla sem sodales vel. Integer.
                </div>
                <ul className="home-ul l1">
                  <li className="home-list-item l2">
                    {/* Link to concrete services */}
                    <a href="#">
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph l4">Slump tests</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="#">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph l4">Cube tests</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="#">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph l4">Core tests</span>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </Col>

        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-end justify-content-center border-2">
          <div className="d-flex justify-content-center">
            <Fade bottom>
              <Image className="service-img" src="https://via.placeholder.com/350x250/FFFF00"></Image>
            </Fade>
          </div>
        </Col>
        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-start justify-content-center border-3">
          <div className="service-text-block text-border">
            <h2 className="service-name">CENTER LINE</h2>
              <Bounce left>
                <hr className="hr-home"/>
              </Bounce>
              <div className="service-description border-1">
                <div className="text-container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus sapien eget mauris facilisis, ut tempor risus volutpat. Pellentesque pulvinar in elit et fermentum. Maecenas condimentum, nisi ac viverra dapibus, lorem purus commodo leo, quis laoreet neque enim non neque. Nulla cursus orci purus, in fringilla sem sodales vel. Integer.
                </div>
                <ul className="home-ul l1">
                  <li className="home-list-item l2">
                    {/* Link to concrete services */}
                    <a href="#">
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph l4">Slump tests</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="#">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph l4">Cube tests</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="#">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph l4">Core tests</span>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </Col>

        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-end justify-content-center border-2">
          <div className="d-flex justify-content-center">
            <Fade bottom>
              <Image className="service-img" src="https://via.placeholder.com/350x250/FFFF00"></Image>
            </Fade>
          </div>
        </Col>
        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-start justify-content-center border-3">
          <div className="service-text-block text-border">
            <h2 className="service-name">PLACEHOLDER</h2>
              <Bounce left>
                <hr className="hr-home"/>
              </Bounce>
              <div className="service-description border-1">
                <div className="text-container">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus sapien eget mauris facilisis, ut tempor risus volutpat. Pellentesque pulvinar in elit et fermentum. Maecenas condimentum, nisi ac viverra dapibus, lorem purus commodo leo, quis laoreet neque enim non neque. Nulla cursus orci purus, in fringilla sem sodales vel. Integer.
                </div>
                <ul className="home-ul l1">
                  <li className="home-list-item l2">
                    {/* Link to concrete services */}
                    <a href="#">
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph l4">Slump tests</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="#">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph l4">Cube tests</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="#">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph l4">Core tests</span>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default HomePage;
