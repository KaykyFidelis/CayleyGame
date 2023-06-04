import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Container } from 'react-bootstrap'
import LevelSelection from 'src/components/LevelSelection/LevelSelection'

const AneisPage = () => {
  return (
    <>
      <MetaTags title="Aneis" description="Aneis page" />
      <Container style={{ backgroundColor: '#749DF5' }} fluid>
        <LevelSelection rota={'aneis'}/>
      </Container>
    </>
  )
}

export default AneisPage
