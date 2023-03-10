import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Bounce from "react-reveal/Bounce";

import "./static/styles/projects.css";

function ProjectsPage() {
    return (
        <Container fluid className='projects-container'>
            <Row className='projects-intro-row'>
                <Col className='projects-intro-col'>
                    <h2 className='projects-header'>Projects</h2>
                    <Bounce left>
                        <hr className='hr-projects' />
                    </Bounce>
                    <div className='desc-projects'>
                        <p>
                            At Testpro Laboratory, we are committed to
                            delivering exceptional service that meet your every
                            need. We take pride in our ability to deliver high
                            quality work that is both innovative and cost
                            effective.
                        </p>
                        <p>
                            Here is a showcase of some of the work we have done.
                        </p>
                    </div>
                </Col>
            </Row>
            <hr className='hr-projects-small' />
            <Row className='projects-row justify-content-center'>
                <Col xs='auto' className='projects-col'>
                    <div className='project-name'>
                        Upgrading of R62 between Louterwater & Joubertinia
                        <Bounce left>
                            <hr className='projects-ul' />
                        </Bounce>
                    </div>
                    <div className="proj-desc">
                    </div>
                    <div className='project-image-container'>
                        <div className='project-image'></div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ProjectsPage;
