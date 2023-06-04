import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Container, Row, Col } from 'react-bootstrap'
import LevelSelection from 'src/components/LevelSelection/LevelSelection'

const GruposPage = () => {
  return (
    <>
      <MetaTags title="Grupos" description="Grupos page" />
      <Container style={{ backgroundColor: '#749DF5' }} fluid>
        <LevelSelection rota={'grupos'}/>
      </Container>
    </>
  )
}

export default GruposPage
