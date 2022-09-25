import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function HeaderComponent() {

    return(
        <div className="Footer">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        Call Us
                    </Col>
                    <Col xs={6} md={4}>
                        Email Us
                    </Col>
                    <Col xs={12} md={4}>
                        Links to other media
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderComponent;