import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import ReactCardFlip from 'react-card-flip';

function CardComponent() {

  const [flipped, setFlipped] = useState(false);

  const handleFlip = (e) => {
    e.preventDefault();
    console.log('flipped');
    setFlipped(!flipped);
  }

  return(
    <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150/FFFF00" onClick={handleFlip}/>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150/FF0000" onClick={handleFlip}/>
      </Card>
    </ReactCardFlip>
  );
}

export default CardComponent;
