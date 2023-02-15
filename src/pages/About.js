import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import './static/styles/about.css';

import team from '../assets/theteam.png';
import about from '../assets/aboutus.png';
import vision from '../assets/vision.png';

function AboutPage() {
  return (
    <>
      <Container fluid>
        <Row className="d-flex about-row justify-content-center">
          <Col xs={12} xl={6} xxl={6} className="d-flex justify-content-center txt-about">
            <div className="about-header-container">
              <h2 className="about-header">ABOUT US</h2>
              <Bounce left>
                <hr className="ul-about"/>
              </Bounce>
              <div className="tc">
                Established in May 2020, Testpro Laboratory (Pty) Ltd is a privately owned Civil
                Engineering Materials Testing Laboratory. Our friendly and dedicated team of
                professionals is committed to providing high-quality testing and analysis services to our
                clients. Since we opened, we have built a good clientele with the Civil Engineering and
                construction industry, Municipal and private sectors, and it grows every day. Although
                our SANAS-Accredited lab is sited in Mossel Bay, Western Cape, we are not afraid to
                travel to other towns and provinces. We use state-of-the-art equipment and follow strict
                protocols to ensure that our results are accurate and reliable.
              </div>
            </div>
          </Col>
          <Col xs={12} xl={6} xxl={6} className="d-flex justify-content-xl-start justify-content-center img-about">
            <div className="d-flex justify-content-center img-container">
              <Fade right>
                <Image className="service-img-about" src={about}></Image>
              </Fade>
            </div>
          </Col>
        </Row>
        <hr className="section-seperator"></hr>
        <Row className="d-flex about-row justify-content-center">
          {/* This Column's visibility is set to false at a certain screen size */}
          <Col xs={12} xl={6} xxl={6} className="d-flex d-none d-xl-block justify-content-center img-about">
            <div className="d-flex justify-content-xl-end justify-content-center img-container">
              <Fade left>
                <Image className="service-img-about" src={team}></Image>
              </Fade>
            </div>
          </Col>
          <Col xs={12} xl={6} xxl={6} className="d-flex justify-content-center txt-about">
            <div className="about-header-container">
              <h2 className="about-header">MEET THE TEAM</h2>
              <Bounce left>
                <hr className="ul-about"/>
              </Bounce>
              <div className="tc">
                Our team includes our lead civil engineer, technicians, and support staff who work
                together to provide exceptional testing and analysis services to our clients. Each
                member of our team brings a unique set of skills and expertise to the table, and we are
                constantly striving to learn and grow in our field. We are dedicated to providing the
                highest level of service and quality to our clients, and we believe that our team is the
                key to our success.
              </div>
            </div>
          </Col>
          <Col xs={12} xl={6} xxl={6} className="d-flex d-xl-none justify-content-center img-about">
            <div className="d-flex justify-content-center img-container">
              <Fade left>
                <Image className="service-img-about" src={team}></Image>
              </Fade>
            </div>
          </Col>
        </Row>
        <hr className="section-seperator"></hr>
        <Row className="d-flex about-row justify-content-center">
          <Col xs={12} xl={6} xxl={6} className="d-flex justify-content-center txt-about">
            <div className="about-header-container">
              <h2 className="about-header">OUR VISION</h2>
              <Bounce left>
                <hr className="ul-about"/>
              </Bounce>
              <div className="tc">
                We strive to be the trusted partner of choice for our clients, to provide accurate and
                efficient service delivery through competent and well trained staff.  
              </div>
            </div>
          </Col>
          <Col xs={12} xl={6} xxl={6} className="d-flex justify-content-xl-start justify-content-center img-about">
            <div className="d-flex justify-content-xl-start justify-content-center  img-container">
              <Fade right>
                <Image className="service-img-about" src={vision}></Image>
              </Fade>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AboutPage;
