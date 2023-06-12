import { Container, Row, Col } from 'react-bootstrap'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import GameMenu from 'src/components/GameMenu'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Container style={{ backgroundColor: '#749DF5' }} fluid>
        <GameMenu />
      </Container>
    </>
  )
}

export default HomePage
