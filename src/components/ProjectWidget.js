import React from 'react';

import { Row, Col, Image } from 'react-bootstrap';

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import "./static/styles/widget.css";

function ProjectWidget(props) {
    
    const lines = props.content.split('\n');
    
    return (
        <>
            <hr className='widget-seperator'/>
            <Row className='d-flex main-container-row justify-content-center'>
                <Col lg={6} className='d-flex align-items-center main-image-col'>
                    <Fade left>
                        <Image className='widget-image' src={props.mainImage}></Image>
                    </Fade>
                </Col>
                <Col lg={6} className='description-col col-outer'>
                    <h3 className='widget-title'>{props.projectTitle}</h3>
                    <Bounce right>
                        <hr className='hr-projects-widget' />
                    </Bounce>
                    {lines.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </Col>
            </Row>
        </>
    );
}

export default ProjectWidget;