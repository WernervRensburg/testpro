import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';

import ReactCardFlip from 'react-card-flip';

import './static/styles/card.css';

function CardComponent() {

  const [flipped, setFlipped] = useState(false);

  const handleFlip = (e) => {
    e.preventDefault();
    setFlipped(!flipped);
  }

  return(
    <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
      <Card className="service-display-card" style={{ width: '22rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150/FFFF00" onClick={handleFlip}/>
      </Card>

      <Card className="service-display-card" style={{ width: '22rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150/FF0000" onClick={handleFlip}/>
      </Card>
    </ReactCardFlip>
  );
}

export default CardComponent;
