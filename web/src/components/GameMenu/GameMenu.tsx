import React from 'react'

import { Col, Container, Image } from 'react-bootstrap';

import { routes } from '@redwoodjs/router'

import ButtonLink from '../ButtonLink/ButtonLink'

const GameMenu = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '92vh' }}>
      <Container className="position-relative d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: '#6187DA', width: '50%', height: '70%', borderRadius: '10px' }}>
        <Image src="/strawberry.png" alt="Logo" className="position-absolute top-0 end-0" style={{ width: '10%' }} />
        <Image src="/apple_mango.png" alt="Logo" className="position-absolute bottom-2 start-0" style={{ width: '24%' }} />
        <div className="mt-10">
          <h1 className="text-center text-white" style={{ fontSize: '3rem' }}>CayleyGame</h1>
        </div>
        <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', width: '80%' }}>
          <Col className="d-flex align-items-center justify-content-center w-100 h-25">
            <ButtonLink route={routes.grupos()} value="Grupos" className={"d-flex align-items-center justify-content-center"}/>
          </Col>
        </div>
      </Container>
    </div>
  )
}
export default GameMenu