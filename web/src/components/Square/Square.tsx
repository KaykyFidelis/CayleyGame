import React, { useState } from 'react';
import { Image } from 'react-bootstrap';

const Square = ({ cor, padrao, frutaAtual }) => {
  const [selectedImage, setSelectedImage] = useState(`${padrao}`);

  const handleSquareClick = (squareId) => {
    setSelectedImage(squareId);
  };

  return (
    <td style={{ backgroundColor: '#6187DA', width: '10%', height: '10%' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: `${cor}`,
          borderRadius: '5%',
        }}
        onClick={() => handleSquareClick(frutaAtual)}
      >
        <Image
          src={`/frutas/${selectedImage}.png`}
          alt="Atual"
          style={{ maxWidth: '65%', maxHeight: '65%' }}
        />
      </div>
    </td>
  );
};

export default Square;
