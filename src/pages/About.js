import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './static/styles/about.css';

function AboutPage() {
  return (
    <>
      <Container fluid>
        <Row className="d-flex">
          <Col xs={12} md={6} className="d-flex justify-content-center txt-about">
            About Us
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center img-about">
            photo
          </Col>

          <Col xs={12} md={6} className="d-flex justify-content-center img-about">
            photo
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center txt-about">
            Meet The Team
          </Col>

          <Col xs={12} md={6} className="d-flex justify-content-center txt-about">
            Vision
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center img-about">
            photo
          </Col>

        </Row>
        <Row className="big-seperator"></Row>
      </Container>
    </>
  )
}

export default AboutPage;
