import React from 'react'

import { ButtonGroup, Col, Container, Image } from 'react-bootstrap';

import ButtonLink from '../ButtonLink/ButtonLink'
import { routes } from '@redwoodjs/router';

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
            <ButtonLink route={ getRoute(rota, 'facil') } value="Fácil" className={"d-flex align-items-center justify-content-center mb-3"}/>
            <ButtonLink route={ getRoute(rota, 'medio') } value="Médio" className={"d-flex align-items-center justify-content-center mb-3"}/>
            <ButtonLink route={ getRoute(rota, 'dificil') } value="Dificil" className={"d-flex align-items-center justify-content-center"}/>
          </ButtonGroup>
        </div>
      </Container>
    </div>
  )
}

export default LevelSelection


