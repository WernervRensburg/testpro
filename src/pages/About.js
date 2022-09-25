import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutPage() {
  return (
    <>
      <Container fluid>
        <Row className="d-flex justify-content-center">
          <Col xs={12} className="d-flex justify-content-center">
            About Us
          </Col>
          <Col xs={12} className="d-flex justify-content-center">
            Meet The Team
          </Col>
          <Col xs={12} className="d-flex justify-content-center">
            Vision
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AboutPage;
