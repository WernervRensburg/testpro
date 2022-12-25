import { Col, Row, Container, Image } from "react-bootstrap";
import Fade from 'react-reveal/Fade';

import '../static/styles/services.css';

function AggregatePage() {
    return (
        <>
            <Container fluid>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} lg={6} className="d-flex justify-content-md-end justify-content-center service-container">
                        <div className="img-services-container">
                            <Fade left>
                                <Image className="service-img" src="https://via.placeholder.com/250x350/FFFF00"></Image>
                            </Fade>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className="d-flex justify-content-md-start justify-content-center service-container">
                        <div className="dsc-services-container">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae luctus turpis. Integer semper, lacus nec tristique tincidunt, justo augue mollis ex, commodo pulvinar purus magna a neque. In id laoreet metus. Maecenas placerat porttitor rutrum. Nulla varius turpis vel.
                        </div>
                    </Col>
                </Row>                
            </Container>
        </>
    )
}

export default AggregatePage;