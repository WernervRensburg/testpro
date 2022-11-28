import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Slide = ({service, description}) => {

    return(
        <Row className="services-block">
            <Col xs={12} md={6} className="d-flex justify-content-md-end justify-content-center">
                <div className="d-flex justify-content-center">
                    <Image className="service-img" src="https://via.placeholder.com/450x300/FFFF00"></Image>
                </div>
            </Col>

            <Col xs={12} md={6} className="d-flex justify-content-md-start justify-content-center">
                <div className="seperator-md d-flex justify-content-center">
                    <div className="vr d-none d-md-block">
                    </div>
                    <div className="service-text-block text-border">
                    </div>
                </div>
            </Col>

        </Row>
    );
}

export default Slide;