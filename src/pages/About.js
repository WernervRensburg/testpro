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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque mauris, molestie sed tempus dapibus, tincidunt a turpis. Mauris ut elit nunc. Nullam congue quam ac arcu sodales, et facilisis ipsum gravida. Nam eget eros sit amet lorem luctus ullamcorper. Nulla sagittis accumsan massa, nec tristique dui condimentum quis. Vestibulum id ligula eget dui accumsan viverra. Vivamus eget orci sed urna iaculis eleifend. Curabitur sagittis mauris sed mollis ultricies.
                Morbi id maximus justo. Aenean tempus quam metus, vitae sagittis ligula maximus in. Vivamus venenatis urna orci, at euismod tellus accumsan ac. Nunc dignissim massa molestie ipsum efficitur, ut convallis mauris.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque mauris, molestie sed tempus dapibus, tincidunt a turpis. Mauris ut elit nunc. Nullam congue quam ac arcu sodales, et facilisis ipsum gravida. Nam eget eros sit amet lorem luctus ullamcorper. Nulla sagittis accumsan massa, nec tristique dui condimentum quis. Vestibulum id ligula eget dui accumsan viverra. Vivamus eget orci sed urna iaculis eleifend. Curabitur sagittis mauris sed mollis ultricies.
                Morbi id maximus justo. Aenean tempus quam metus, vitae sagittis ligula maximus in. Vivamus venenatis urna orci, at euismod tellus accumsan ac. Nunc dignissim massa molestie ipsum efficitur, ut convallis mauris.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque mauris, molestie sed tempus dapibus, tincidunt a turpis. Mauris ut elit nunc. Nullam congue quam ac arcu sodales, et facilisis ipsum gravida. Nam eget eros sit amet lorem luctus ullamcorper. Nulla sagittis accumsan massa, nec tristique dui condimentum quis. Vestibulum id ligula eget dui accumsan viverra. Vivamus eget orci sed urna iaculis eleifend. Curabitur sagittis mauris sed mollis ultricies.
                Morbi id maximus justo. Aenean tempus quam metus, vitae sagittis ligula maximus in. Vivamus venenatis urna orci, at euismod tellus accumsan ac. Nunc dignissim massa molestie ipsum efficitur, ut convallis mauris.
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
