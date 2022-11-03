import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactPage() {
    return (
        <>
            <Container fluid>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} className="d-flex justify-content-center">
                        Contact
                    </Col>
                </Row>
            </Container>
        </>
    )
}