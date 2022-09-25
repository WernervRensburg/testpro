import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function FooterComponent() {

    return(
        <div className="Footer">
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        Contact Us
                    </Col>
                    <Col xs={12} md={4}>
                        Accreditation Details
                    </Col>
                    <Col xs={12} md={4}>
                        Short brag spot
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FooterComponent;