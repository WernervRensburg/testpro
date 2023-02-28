import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import './static/styles/home.css'

import landing_page_lg from '../assets/landing-page-lg.png';
import mobilelandingpage from '../assets/mobilelandingpage.jpg';
import aggregate_img from '../assets/PSA.jpg';
import soilandgravel_img from '../assets/SG.jpg';
import asphalt_img from '../assets/asphalt.jpg';
import concrete_img from '../assets/Concrete.jpg';
import fieldtest_img from '../assets/FT.jpg';
import sampling_img from '../assets/Sampling.jpg';
import other_img from '../assets/other.jpg';

function HomePage() {

  return (
    <>
    <Container fluid>
      <Row className="justify-content-center d-flex bg-row">
        <div className="bg-div">
          <Image className="landing-page d-flex d-none d-sm-block" src={landing_page_lg}></Image>
          <Image className="mobile-landing-page d-flex d-sm-none" src={mobilelandingpage}></Image>
        </div>
      </Row>
    </Container>

    <Container fluid>
      <Row className="services-container">
        
        { /* Concrete */ }
        <Col xs={12} xxl={3} className="d-flex d-none d-xxl-block justify-content-center border-2">
          <Fade bottom>
            <Image className="service-img" src={concrete_img}></Image>
          </Fade>
        </Col>
        <Col xs={12} xxl={3} className="d-flex justify-content-xxl-start justify-content-center border-3">
          <div className="service-text-block text-border">
            <h2 className="service-name">CONCRETE</h2>
            <Bounce left>
              <hr className="hr-home"/>
            </Bounce>
            <div className="d-flex d-xxl-none justify-content-center">
              <Fade bottom>
                <Image className="service-img" src={concrete_img}></Image>
              </Fade>
            </div>
            <div className="service-description border-1">
              <div className="text-container">
                Our accredited facility provides a wide variety of concrete testing
                services to evaluate the strength, durability, and overall quality of
                concrete. Our accredited facility uses cutting-edge equipment and
                industry-standard methods to carry out tests for factors such as
                compressive strength, flexural strength, workability, consistency,
                and density.
              </div>
              <ul className="home-ul l1">
                <li className="home-list-item l2">
                  {/* Link to concrete services */}
                  <a href="/services/concrete">
                    <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                    <span className="no-emph-home l4">Flow Test</span>
                  </a>
                </li>
                <li className="home-list-item l2">
                  <a href="/services/concrete">  
                    <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                    <span className="no-emph-home l4">Compressive Strength Tests</span>
                  </a>
                </li>
                <li className="home-list-item l2">
                  <a href="/services/concrete">  
                    <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                    <span className="no-emph-home l4">Slump tests</span>
                  </a>
                </li>
                <li className="home-list-item l2">
                  <a href="/services/concrete">  
                    <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                    <span className="no-emph-home l4">Making & Curing Specimens</span>
                  </a>
                </li>
                <li className="home-list-item l2">
                  <a href="/services/concrete">  
                    <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                    <span className="no-emph-home l4">More...</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>

        <hr className="col-seperator d-xxl-none"></hr>

        <Col xs={12} xxl={3} className="d-flex d-none d-xxl-block justify-content-center border-2">
          <div className="d-flex justify-content-center">
            <Fade bottom>
              <Image className="service-img" src={asphalt_img}></Image>
            </Fade>
          </div>
        </Col>
        <Col xs={12} xxl={3} className="d-flex justify-content-xxl-start justify-content-center border-3">
          <div className="service-text-block text-border">
            <h2 className="service-name">ASPHALT & BITUMEN</h2>
              <Bounce left>
                <hr className="hr-home"/>
              </Bounce>
              <div className="d-flex d-xxl-none justify-content-center">
                <Fade bottom>
                  <Image className="service-img" src={asphalt_img}></Image>
                </Fade>
              </div>
              <div className="service-description border-1">
                <div className="text-container">
                Our accredited facility offers comprehensive asphalt testing services,
                including tests for asphalt mix design, stability, flow, and density,
                as well as tests to evaluate resistance to water and air.
                </div>
                <ul className="home-ul l1">
                  <li className="home-list-item l2">
                    {/* Link to concrete services */}
                    <a href="/services/asphalt">
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">Marshall Stability, Flow and Quotient</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="/services/asphalt">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">Penetration of Bitumen</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="/services/asphalt">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">Penetration of Bitumen</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="/services/asphalt">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">Viscosity</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="/services/asphalt">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">More...</span>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </Col>

        <hr className="col-seperator d-xxl-none"></hr>

        <Col xs={12} xxl={3} className="d-flex d-none d-xxl-block justify-content-center border-2">
          <div className="d-flex justify-content-center">
            <Fade bottom>
              <Image className="service-img" src={soilandgravel_img}></Image>
            </Fade>
          </div>
        </Col>
        <Col xs={12} xxl={3} className="d-flex justify-content-xxl-start justify-content-center border-3">
          <div className="service-text-block text-border">
            <h2 className="service-name">SOIL, SAND & GRAVEL</h2>
              <Bounce left>
                <hr className="hr-home"/>
              </Bounce>
              <div className="d-flex d-xxl-none justify-content-center">
                <Fade bottom>
                  <Image className="service-img" src={soilandgravel_img}></Image>
                </Fade>
              </div>
              <div className="service-description border-1">
                <div className="text-container">
                We provide a wide range of soil and gravel testing services to evaluate
                factors such as particle size distribution, compaction, shear strength,
                and permeability. Our accredited facility uses advanced equipment and
                industry-standard methods to deliver accurate and reliable results for each test.
                </div>
                <ul className="home-ul l1">
                  <li className="home-list-item l2">
                    {/* Link to concrete services */}
                    <a href="/services/ssg">
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">Hydrometer</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="/services/ssg">
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">Flow Curve</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="/services/ssg">
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">Maximum Dry Density & Moisture Content</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="/services/ssg">
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">Wet Preparation & Particle Size Analysis</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="/services/ssg">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">More...</span>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </Col>

        <hr className="col-seperator d-xxl-none"></hr>

        <Col xs={12} xxl={3} className="d-flex d-none d-xxl-block justify-content-center border-2">
          <div className="d-flex justify-content-center">
            <Fade bottom>
              <Image className="service-img" src={aggregate_img}></Image>
            </Fade>
          </div>
        </Col>
        <Col xs={12} xxl={3} className="d-flex justify-content-xxl-start justify-content-center border-3">
          <div className="service-text-block text-border">
            <h2 className="service-name">AGGREGATE</h2>
              <Bounce left>
                <hr className="hr-home"/>
              </Bounce>
              <div className="d-flex d-xxl-none justify-content-center">
                <Fade bottom>
                  <Image className="service-img" src={aggregate_img}></Image>
                </Fade>
              </div>
              <div className="service-description border-1">
                <div className="text-container">
                Our accredited facility offers a comprehensive range of aggregate testing
                services to evaluate factors such as particle size distribution, abrasion
                resistance, and specific gravity. We use advanced equipment and industry-standard
                methods to provide accurate and reliable results for each test, helping to ensure
                that the aggregates used in your construction project meet industry standards and
                performance expectations.
                </div>
                <ul className="home-ul l1">
                  <li className="home-list-item l2">
                    {/* Link to concrete services */}
                    <a href="/services/aggregate">
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">Particle Size Analysis By Sieving</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="/services/aggregate">
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">Sand Equivalent Value</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="/services/aggregate">
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">Ehtylene Glycol Durability Index</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="/services/aggregate">
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">Shrinkage & Expansion Of Cement Aggregate Mixes</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="/services/aggregate">
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">More...</span>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </Col>

        <hr className="col-seperator d-xxl-none"></hr>

        <Col xs={12} xxl={3} className="d-flex d-none d-xxl-block justify-content-center border-2">
          <div className="d-flex justify-content-center">
            <Fade bottom>
              <Image className="service-img" src={fieldtest_img}></Image>
            </Fade>
          </div>
        </Col>
        <Col xs={12} xxl={3} className="d-flex justify-content-xxl-start justify-content-center border-3">
          <div className="service-text-block text-border">
            <h2 className="service-name">FIELD TESTING</h2>
              <Bounce left>
                <hr className="hr-home"/>
              </Bounce>
              <div className="d-flex d-xxl-none justify-content-center">
                <Fade bottom>
                  <Image className="service-img" src={fieldtest_img}></Image>
                </Fade>
              </div>
              <div className="service-description border-1">
                <div className="text-container">
                Our accredited facility provides field testing services to evaluate the
                quality and performance of construction materials on-site. We use advanced
                equipment and industry-standard methods to conduct tests for factors such
                as soil compaction, asphalt density, and concrete strength. Our field testing
                services help ensure that construction materials are performing as intended,
                and can prevent costly delays or safety hazards.
                </div>
                <ul className="home-ul l1">
                  <li className="home-list-item l2">
                    {/* Link to concrete services */}
                    <a href="/services/fieldtesting">
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">Borrow Pit Investigation</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    {/* Link to concrete services */}
                    <a href="/services/fieldtesting">
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">Centre Line Investigation</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="/services/fieldtesting">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">Geotechnical Investigation</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="/services/fieldtesting">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">More...</span>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </Col>

        <hr className="col-seperator d-xxl-none"></hr>

        <Col xs={12} xxl={3} className="d-flex d-none d-xxl-block justify-content-center border-2">
          <div className="d-flex justify-content-center">
            <Fade bottom>
              <Image className="service-img" src={sampling_img}></Image>
            </Fade>
          </div>
        </Col>
        <Col xs={12} xxl={3} className="d-flex justify-content-xxl-start justify-content-center border-3">
          <div className="service-text-block text-border">
            <h2 className="service-name">SAMPLING</h2>
              <Bounce left>
                <hr className="hr-home"/>
              </Bounce>
              <div className="d-flex d-xxl-none justify-content-center">
                <Fade bottom>
                  <Image className="service-img" src={sampling_img}></Image>
                </Fade>
              </div>
              <div className="service-description border-1">
                <div className="text-container">
                We provide sampling services to ensure the accuracy and representativeness
                of construction material samples. We use industry-standard methods to collect
                samples of soil, concrete, asphalt, and aggregates. We carefully handle and
                transport samples to our laboratory for testing, ensuring that the quality
                and integrity of the samples are preserved. Our sampling services help ensure
                that test results accurately represent the properties and characteristics of
                the materials being used in your construction project.
                </div>
                <ul className="home-ul l1">
                  <li className="home-list-item l2">
                    {/* Link to concrete services */}
                    <a href="/services/sampling">
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">Sampling Of Premixed Asphalt</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="/services/sampling">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">Sampling Of Freshly Mixed Concrete</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="/services/sampling">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">More...</span>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </Col>

        <hr className="col-seperator d-xxl-none"></hr>

        <Col xs={12} xxl={3} className="d-flex d-none d-xxl-block justify-content-center border-2">
          <div className="d-flex justify-content-center">
            <Fade bottom>
              <Image className="service-img" src={other_img}></Image>
            </Fade>
          </div>
        </Col>
        <Col xs={12} xxl={3} className="d-flex justify-content-xxl-start justify-content-center border-3">
          <div className="service-text-block text-border">
            <h2 className="service-name">OTHER TESTS</h2>
              <Bounce left>
                <hr className="hr-home"/>
              </Bounce>
              <div className="d-flex d-xxl-none justify-content-center">
                <Fade bottom>
                  <Image className="service-img" src={other_img}></Image>
                </Fade>
              </div>
              <div className="service-description border-1">
                <div className="text-container">
                We also provide a range of other test methods to evaluate construction
                materials and structures. Our test methods provide comprehensive
                insights into the quality and condition of construction materials and
                structures, helping to ensure their safety and longevity.
                </div>
                <ul className="home-ul l1">
                  <li className="home-list-item l2">
                    {/* Link to concrete services */}
                    <a href="/services/other">
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">Bedding, Compactibility Test</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="/services/other">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">In Situ Percolation Test</span>
                    </a>
                  </li>
                  <li className="home-list-item l2">
                    <a href="/services/other">  
                      <i className="l3 fa-solid fa-angle-right align-angle fa-fw"></i>
                      <span className="no-emph-home l4">More...</span>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default HomePage;
