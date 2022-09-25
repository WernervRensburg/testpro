import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardComponent from '../components/Card';

import './static/styles/home.css'

function HomePage() {
  return (
    <>
    <Container fluid>
      <Row className="justify-content-center d-flex">
        <Col>
          Fluid container
        </Col>
      </Row>
    </Container>

    <Container fluid>
      <Row className="row-bordered-purple d-flex justify-content-center">
        <Col xs={12} md={6} lg={4} className="col-bordered-red d-flex justify-content-center">
          <CardComponent />
        </Col>
        <Col xs={12} md={6} lg={4} className="col-bordered-red d-flex justify-content-center">
          <CardComponent />
        </Col>
        <Col xs={12} md={6} lg={4} className="col-bordered-red d-flex justify-content-center">
          <CardComponent />
        </Col>
        <Col xs={12} md={6} lg={4} className="col-bordered-red d-flex justify-content-center">
          <CardComponent />
        </Col>
        <Col xs={12} md={6} lg={4} className="col-bordered-red d-flex justify-content-center">
          <CardComponent />
        </Col>
        <Col xs={12} md={6} lg={4} className="col-bordered-red d-flex justify-content-center">
          <CardComponent />
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default HomePage;
