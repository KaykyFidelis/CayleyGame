import React from 'react'

import { Container, Image, Row, Col } from 'react-bootstrap'

import { routes } from '@redwoodjs/router'

import ButtonLink from '../ButtonLink/ButtonLink'

const GameMenu = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: 'calc(100vh - 56px)', // Subtract the height of the navbar
      }}
    >
      <Container
        className="position-relative d-flex flex-column align-items-center"
        style={{
          backgroundColor: '#6187DA',
          width: '50%',
          height: 'calc(70vh)',
          borderRadius: '10px',
          paddingTop: '56px', // Height of the navbar
        }}
      >
        <Image
          src="/strawberry.png"
          alt="Logo"
          style={{
            width: '10%',
            position: 'absolute',
            top: '0',
            right: '0',
          }}
        />
        <Image
          src="/apple_mango.png"
          alt="Logo"
          style={{
            width: '24%',
            position: 'absolute',
            bottom: '2%',
            left: '2%',
          }}
        />

        <div className="mb-md-5 p-3">
          <h1 className="game-title">CayleyGame</h1>
        </div>
        <Row className="w-75 align-items-center justify-content-center mt-md-5">
          <Col className="d-flex align-items-center justify-content-center">
            <ButtonLink
              route={routes.grupos()}
              value="Grupos"
              className="btn-primary btn-lg"
            />
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <ButtonLink
              route={routes.aneis()}
              value="Anéis"
              className="btn-primary btn-lg"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GameMenu
