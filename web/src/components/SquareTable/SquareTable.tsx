import React, { useState } from 'react';
import { Container, Table, Col, Row, Image } from 'react-bootstrap';
import Square from '../Square/Square';

const SquareTable = ({ size }) => {
  const [selectedImage, setSelectedImage] = useState('1');

  const handleImageClick = (imageName) => {
    setSelectedImage(imageName);
  };

  const renderImages = ({ size }) => {
    const images = [];

    // Loop para gerar as imagens
    for (let i = 1; i < size; i += 2) {
      const image1 = (
        <Col className="d-flex align-items-center justify-content-center mb-3" key={`${i}`}>
          <Image
            src={`/frutas/${i}.png`}
            alt={`Image ${i}`}
            style={{ width: '100%' }}
            fluid
            onClick={() => handleImageClick(`${i}`)}
          />
        </Col>
      );
      const image2 = (
        <Col className="d-flex align-items-center justify-content-center mb-3" key={`${i + 1}`}>
          <Image
            src={`/frutas/${i + 1}.png`}
            alt={`Image ${i + 1}`}
            style={{ width: '100%' }}
            fluid
            onClick={() => handleImageClick(`${i+1}`)}
          />
        </Col>
      );

      const imageGroup = (
        <Row className="d-flex align-items-end justify-content-center h-20" key={`image-group-${i}`}>
          {image1}
          {image2}
        </Row>
      );

      images.push(imageGroup);
    }

    return images;
  };

  const renderTable = ({ size }) => {
    const rows = [];
    for (let i = 0; i < size; i++) {
      const columns = [];
      for (let j = 0; j < size; j++) {
        const squareNumber = i * size + j;
        columns.push(<Square id={squareNumber} />);
      }
      rows.push(<tr key={i}>{columns}</tr>);
    }
    return rows;
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '92vh' }}>
      <Container
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ backgroundColor: '#6187DA', width: '50%', height: '95%', borderRadius: '10px' }}
      >
        <Table className="table-borderless mt-3" style={{ backgroundColor: '#6187DA', width: '100%', height: '100%' }}>
          <tbody>{renderTable({ size })}</tbody>
        </Table>
      </Container>

      <Container
        className="d-flex flex-column align-items-center"
        style={{ backgroundColor: '#6187DA', width: '10%', height: '85%', borderRadius: '10px', marginLeft: '1rem' }}
      >
        <Container className="d-flex flex-column align-items-center" style={{ backgroundColor: '#6187DA', width: '100%', height: '100%', borderRadius: '10px' }}>
          <h1 className="text-white mt-3">OPA</h1>
          <Image src={`/frutas/${selectedImage}.png`} alt="Atual" style={{ width: '100%' }} />
        </Container>
        {renderImages({ size })}
      </Container>
    </div>
  );
};

export default SquareTable;
