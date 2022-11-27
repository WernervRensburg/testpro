import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './static/styles/home.css'

import test_small from '../assets/test-small.png';
import test_sm_2l from '../assets/test-sm-2l.png';
import test_sm_365t35bv2 from '../assets/test-sm-365t35bv2.png';

function HomePage() {
  return (
    <>
    <Container fluid>
      <Row className="justify-content-center d-flex bg-row">
        <div className="bg-div">
          <Image className="landing-page" src={test_sm_365t35bv2}></Image>
        </div>
      </Row>
    </Container>

    <Container fluid>
      <Row className="services-block">
        <Col xs={12} md={6} className="d-flex justify-content-md-end justify-content-center">
          <div className="d-flex justify-content-center">
            <Image className="service-img" src="https://via.placeholder.com/450x300/FFFF00"></Image>
          </div>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-md-start justify-content-center">
        <div className="seperator-md d-flex justify-content-center">
            <div className="vr d-none d-md-block">
            </div>
            <div className="service-text-block text-border">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae congue turpis, et ornare magna. Sed fermentum vel mauris sed cursus. Duis eu mattis mi. Pellentesque nec semper dui. Suspendisse volutpat odio tincidunt ante tincidunt tincidunt. In id neque velit. Aliquam euismod ligula nibh. Fusce vel leo at neque venenatis.
            </div>
          </div>
        </Col>

        <Col xs={12} md={6} className="d-flex justify-content-md-end justify-content-center">
          <div className="d-flex justify-content-center">
            <Image className="service-img" src="https://via.placeholder.com/450x300/FFFF00"></Image>
          </div>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-md-start justify-content-center">
        <div className="seperator-md d-flex justify-content-center">
            <div className="vr d-none d-md-block">
            </div>
            <div className="service-text-block text-border">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae congue turpis, et ornare magna. Sed fermentum vel mauris sed cursus. Duis eu mattis mi. Pellentesque nec semper dui. Suspendisse volutpat odio tincidunt ante tincidunt tincidunt. In id neque velit. Aliquam euismod ligula nibh. Fusce vel leo at neque venenatis.
            </div>
          </div>
        </Col>

        <Col xs={12} md={6} className="d-flex justify-content-md-end justify-content-center">
          <div className="d-flex justify-content-center">
            <Image className="service-img" src="https://via.placeholder.com/450x300/FFFF00"></Image>
          </div>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-md-start justify-content-center">
        <div className="seperator-md d-flex justify-content-center">
            <div className="vr d-none d-md-block">
            </div>
            <div className="service-text-block text-border">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae congue turpis, et ornare magna. Sed fermentum vel mauris sed cursus. Duis eu mattis mi. Pellentesque nec semper dui. Suspendisse volutpat odio tincidunt ante tincidunt tincidunt. In id neque velit. Aliquam euismod ligula nibh. Fusce vel leo at neque venenatis.
            </div>
          </div>
        </Col>

        <Col xs={12} md={6} className="d-flex justify-content-md-end justify-content-center">
          <div className="d-flex justify-content-center">
            <Image className="service-img" src="https://via.placeholder.com/450x300/FFFF00"></Image>
          </div>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-md-start justify-content-center">
        <div className="seperator-md d-flex justify-content-center">
            <div className="vr d-none d-md-block">
            </div>
            <div className="service-text-block text-border">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae congue turpis, et ornare magna. Sed fermentum vel mauris sed cursus. Duis eu mattis mi. Pellentesque nec semper dui. Suspendisse volutpat odio tincidunt ante tincidunt tincidunt. In id neque velit. Aliquam euismod ligula nibh. Fusce vel leo at neque venenatis.
            </div>
          </div>
        </Col>

      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={6} className="d-flex justify-content-center">
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center">
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default HomePage;
