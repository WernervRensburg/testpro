import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ProjectsPage() {
  return (
    <>
      <Container fluid>
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={6} className="d-flex justify-content-center">
            Project A
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            Project B
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            Project C
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProjectsPage;
