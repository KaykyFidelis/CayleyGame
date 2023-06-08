import React, { useState } from 'react'

import { Button, ButtonGroup, Col, Container, Form, Image, Modal, Row } from 'react-bootstrap';

import ButtonLink from '../ButtonLink/ButtonLink'
import { routes } from '@redwoodjs/router';

const ModalComponent = ({ showModal, handleCloseModal, route }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <Modal centered show={showModal} onHide={handleCloseModal} size="xl">
      <Modal.Header closeButton style={{ backgroundColor: '#6187DA', color: 'white' }}>
        <Modal.Title>Antes de começar...</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: '#6187DA', color: 'white' }}>
        <div className="text-center d-flex flex-column align-items-center">
          <p>Você deseja que o elemento identidade seja revelado para você no início do jogo?</p>
          <p>Lembrando que isso não vai facilitar sua jogabilidade, pois no caso de relevar a identidade, haverão outros empecilhos</p>
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-content-center text-center" style={{ backgroundColor: '#6187DA', color: 'white' }}>
        <Container className="align-items-center justify-content-center" style={{ backgroundColor: '#6187DA', width: '60%'}}>
          <Row className="align-items-center justify-content-center">
            <Col className="d-flex align-items-center justify-content-center">
              <Form.Check
                type="radio"
                label="Quero a identidade revelada"
                name="radioOptions"
                id="radioOption1"
                defaultChecked={true}
                onChange={handleCheckChange}
              />
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <Form.Check
                type="radio"
                label="Quero não"
                name="radioOptions"
                id="radioOption2"
                onChange={handleCheckChange}
              />
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center" style={{ width: '100%' }}>
            <ButtonLink route={ route } value="Iniciar" className="d-flex align-items-center justify-content-center mt-4 mb-3" />
          </Row>
        </Container>
      </Modal.Footer>
    </Modal>
  );
};

const InternalButtonLink = ({ route, value, className }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Button
        style={{
          backgroundColor: '#F5BBD1',
          fontSize: '1.5rem',
          textTransform: 'capitalize',
          borderRadius: '5px',
          color: 'white',
          height: '100%',
          width: '90%',
        }}
        onClick={handleOpenModal}
        variant="contained"
        className={ className }
      >
        {value}
      </Button>
      <ModalComponent route={route} showModal={showModal} handleCloseModal={handleCloseModal} />
    </>
  );
};

const LevelSelection = ({ rota }: { rota: string }) => {
  const getRoute = (rota: string , value:string) => {
    if(rota == 'grupos'){
      return routes.gruposPartida({ dificuldade: value });
    }
    return routes.aneisPartida({ dificuldade: value });
  }

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '92vh' }}>
      <Container className="position-relative d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#6187DA', width: '30%', height: '70%', borderRadius: '10px' }}>
        <div className="mt-10">
          <h1 className="text-center text-white" style={{ fontSize: '3rem' }}>Level Select</h1>
        </div>
        <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', width: '80%' }}>
          <ButtonGroup className="d-flex align-items-center justify-content-center" style={{ height: '55%', width: '85%' }} vertical>
            <InternalButtonLink route={ getRoute(rota, 'facil') } value="Fácil" className={"d-flex align-items-center justify-content-center mb-3"}/>
            <InternalButtonLink route={ getRoute(rota, 'medio') } value="Médio" className={"d-flex align-items-center justify-content-center mb-3"}/>
            <InternalButtonLink route={ getRoute(rota, 'dificil') } value="Dificil" className={"d-flex align-items-center justify-content-center"}/>
          </ButtonGroup>
        </div>
      </Container>
    </div>
  )
}

export default LevelSelection


