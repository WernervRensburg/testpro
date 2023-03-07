import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

import eroConsulting from "../assets/EroConsulting.png";

import "./static/styles/projects.css";

function ProjectsPage() {

    return (
        <Container fluid>
            <Row className="projects-row justify-content-lg-center">
                <Col xs="auto" className="projects-col">
                    <div className="project-name">
                        Ero Consulting Engineers: Upgrading of R62 between Louterwater & Joubertinia
                        <Bounce left>
                            <hr className="projects-ul"/>
                        </Bounce>
                    </div>
                    <div className="project-image-container">
                        <div className="project-image">
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectsPage;
