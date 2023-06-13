import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Bounce from "react-reveal/Bounce";

import ProjectWidget from "../components/ProjectWidget";

import "./static/styles/projects.css";

import hartland from '../assets/HartlandEstate.png';
import n2circle from '../assets/n2CircleHartland.jpg';
import fynbosheights from '../assets/FynbosHeights.jpg';

function ProjectsPage() {

    const projects = [
        {
            mainImage: n2circle,
            projectTitle: 'N2 Traffic Circle, Hartland',
            content: 'This infrastructure project was initiated to provide access to Hartenbos off the N2 highway. It will also provide access to the new filling station under construction as well as the Hartland Lifestyle Estate. The project took 3 months to complete and was finished in December 2021.\nCivil Contractor : urwhebo e-Transand\nTestpro Laboratory was responsible for all quality control testing for the Civil Contractor i.e road layerworks compaction, asphalt control testing & concrete strength testing.',
        },
        {
            mainImage: '',
            projectTitle: 'Renosterbos Estate',
            content: 'Renosterbos Estate is a private development situated on the north facing slopes west of the beautiful town of Hartenbos. It includes a selection of private residences, a retirement village component as well as assisted living with frail care facilities.\nConsulting Civil Engineer : Niel Lyners & Associates\nMain Civil Contractor : urwhebo e-Transand\nBuilding Contractor : Schoeman Trio Builders\nTestpro Laboratory was responsible for all quality control testing for the Civil Contractor as well as the Building Contractor i.e road layerworks compaction, asphalt control testing, concrete strength testing & floor compaction testing.',
        },
        {
            mainImage: hartland,
            projectTitle: 'Hartland Lifestyle Estate',
            content: 'Hartland Lifestyle Estate is situated in the heart of the Garden Route in Hartenbos on 375ha of beautiful coastal land and will house over 2000 homes eventually.\nBuilding Contractor & Developer : Dalmar Konstruksie\nMain Civil Contractor : urwhebo e-Transand\nTestpro Laboratory was responsible for all quality control testing for the Civil Contractor as well as the Building Contractor i.e road layerworks compaction, asphalt control testing, concrete strength testing & floor compaction testing.',
        },
        {
            mainImage: fynbosheights,
            projectTitle: 'Fynbos Heights Lifestyle Village',
            content: 'FHLV is a non profit Rotary project just north of the Pinnacle Point Casino in Mossel Bay. On completion of phase 3 the development will consist of 197 units with a frail care unit.\nConsulting Engineer : V3 Consulting Engineers\nBuilding Contractor : Tretsom Bouers\nTestpro Laboratory was responsible for all quality control testing for the Civil Contractor as well as the Building Contractor i.e road layerworks compaction, concrete strength testing, foundation & floor compaction testing.',
        }

    ]

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
            <div>
                {projects.map((project, index) => (
                    <ProjectWidget
                        key={index}
                        mainImage={project.mainImage}
                        projectTitle={project.projectTitle}
                        content={project.content}
                        additionalFirst={project.additionalFirst}
                        additionalSecond={project.additionalSecond}
                        additionalThird={project.additionalThird}
                    />
                ))}
            </div>
            
        </Container>
    );
}

export default ProjectsPage;
