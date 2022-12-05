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
        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-end justify-content-center">
          <Fade bottom>
            <Image className="service-img" src="https://via.placeholder.com/350x250/FFFF00"></Image>
          </Fade>
        </Col>
        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-start justify-content-center">
          <div className="service-text-block text-border">
            <h2 className="service-name">Concrete</h2>
              <Bounce left>
                <hr/>
              </Bounce>
              <div className="service-description">
              
              </div>
          </div>
        </Col>

        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-end justify-content-center">
          <div className="d-flex justify-content-center">
            <Fade bottom>
              <Image className="service-img" src="https://via.placeholder.com/350x250/FFFF00"></Image>
            </Fade>
          </div>
        </Col>
        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-start justify-content-center">
          <div className="service-text-block text-border">
            <h2 className="service-name">Asphalt</h2>
              <Bounce left>
                <hr/>
              </Bounce>
              <div className="service-description">
              
              </div>
          </div>
        </Col>

        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-end justify-content-center">
          <div className="d-flex justify-content-center">
            <Fade bottom>
              <Image className="service-img" src="https://via.placeholder.com/350x250/FFFF00"></Image>
            </Fade>
          </div>
        </Col>
        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-start justify-content-center">
          <div className="service-text-block text-border">
            <h2 className="service-name">Soil & Gravel</h2>
              <Bounce left>
                <hr/>
              </Bounce>
              <div className="service-description">
              
              </div>
          </div>
        </Col>

        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-end justify-content-center">
          <div className="d-flex justify-content-center">
            <Fade bottom>
              <Image className="service-img" src="https://via.placeholder.com/350x250/FFFF00"></Image>
            </Fade>
          </div>
        </Col>
        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-start justify-content-center">
          <div className="service-text-block text-border">
            <h2 className="service-name">Aggregate</h2>
              <Bounce left>
                <hr/>
              </Bounce>
              <div className="service-description">
              
              </div>
          </div>
        </Col>

        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-end justify-content-center">
          <div className="d-flex justify-content-center">
            <Fade bottom>
              <Image className="service-img" src="https://via.placeholder.com/350x250/FFFF00"></Image>
            </Fade>
          </div>
        </Col>
        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-start justify-content-center">
          <div className="service-text-block text-border">
            <h2 className="service-name">Center Line</h2>
              <Bounce left>
                <hr/>
              </Bounce>
              <div className="service-description">
              
              </div>
          </div>
        </Col>

        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-end justify-content-center">
          <div className="d-flex justify-content-center">
            <Fade bottom>
              <Image className="service-img" src="https://via.placeholder.com/350x250/FFFF00"></Image>
            </Fade>
          </div>
        </Col>
        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-start justify-content-center">
          <div className="service-text-block text-border">
            <h2 className="service-name">Placeholder</h2>
              <Bounce left>
                <hr/>
              </Bounce>
              <div className="service-description">
              
              </div>
          </div>
        </Col>

      </Row>
      <Row className="big-seperator">
      </Row>
    </Container>
  </>
  );
}

export default HomePage;
