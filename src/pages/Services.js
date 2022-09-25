import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ServicesPage() {
  return (
    <>
      <Container fluid>
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={6} className="d-flex justify-content-center">Service A</Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">Service B</Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">Service C</Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">Service D</Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">Service E</Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">Service F</Col>
        </Row>
      </Container>
    </>
  )
}

export default ServicesPage;
