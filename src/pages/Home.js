import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Slide from '../components/Slide';

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
      <Row className="services-block">
        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-end justify-content-center">
          <div className="d-flex justify-content-center">
            <Image className="service-img" src="https://via.placeholder.com/350x250/FFFF00"></Image>
          </div>
        </Col>
        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-start justify-content-center">
        <div className="seperator-md d-flex justify-content-start">
          <i class="fa-solid fa-pipe"></i>
            <div className="service-text-block text-border">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae congue turpis, et ornare magna. Sed fermentum vel mauris sed cursus. Duis eu mattis mi. Pellentesque nec semper dui. Suspendisse volutpat odio tincidunt ante tincidunt tincidunt. In id neque velit. Aliquam euismod ligula nibh. Fusce vel leo at neque venenatis.
            </div>
          </div>
        </Col>

        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-end justify-content-center">
          <div className="d-flex justify-content-center">
            <Image className="service-img" src="https://via.placeholder.com/350x250/FFFF00"></Image>
          </div>
        </Col>
        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-start justify-content-center">
        <div className="seperator-md d-flex justify-content-start">
          <i class="fa-solid fa-pipe"></i>
            <div className="service-text-block text-border">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae congue turpis, et ornare magna. Sed fermentum vel mauris sed cursus. Duis eu mattis mi. Pellentesque nec semper dui. Suspendisse volutpat odio tincidunt ante tincidunt tincidunt. In id neque velit. Aliquam euismod ligula nibh. Fusce vel leo at neque venenatis.
            </div>
          </div>
        </Col>

        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-end justify-content-center">
          <div className="d-flex justify-content-center">
            <Image className="service-img" src="https://via.placeholder.com/350x250/FFFF00"></Image>
          </div>
        </Col>
        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-start justify-content-center">
        <div className="seperator-md d-flex justify-content-start">
          <i class="fa-solid fa-pipe"></i>
            <div className="service-text-block text-border">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae congue turpis, et ornare magna. Sed fermentum vel mauris sed cursus. Duis eu mattis mi. Pellentesque nec semper dui. Suspendisse volutpat odio tincidunt ante tincidunt tincidunt. In id neque velit. Aliquam euismod ligula nibh. Fusce vel leo at neque venenatis.
            </div>
          </div>
        </Col>

        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-end justify-content-center">
          <div className="d-flex justify-content-center">
            <Image className="service-img" src="https://via.placeholder.com/350x250/FFFF00"></Image>
          </div>
        </Col>
        <Col xs={12} md={6} xxl={3} className="d-flex justify-content-md-start justify-content-center">
        <div className="seperator-md d-flex justify-content-start">
          <i class="fa-solid fa-pipe fa-xl"></i>
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
