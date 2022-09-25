import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardComponent from '../components/Card';

function HomePage() {
  return (
    <>
    <Container fluid>
      <Row className="justify-content-center">
        <Col>
          Fluid container
        </Col>
      </Row>
    </Container>

    <Container fluid>
      <Row xs={1} md={2} lg={3}>
        <Col xs={12} md={6} lg={4}>
          <CardComponent />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <CardComponent />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <CardComponent />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <CardComponent />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <CardComponent />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <CardComponent />
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default HomePage;
