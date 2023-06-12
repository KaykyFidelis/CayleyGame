import { Container } from 'react-bootstrap'

import { MetaTags } from '@redwoodjs/web'

import SquareTable from 'src/components/SquareTable/SquareTable'

const GruposPartidaPage = ({ dificuldade }: { dificuldade: string }) => {
  let size = 0
  switch (dificuldade) {
    case 'facil':
      size = 5
      break
    case 'medio':
      size = 7
      break
    case 'dificil':
      size = 9
      break
  }
  return (
    <>
      <MetaTags title="GruposPartida" description="GruposPartida page" />
      <Container style={{ backgroundColor: '#749DF5' }} fluid>
        <SquareTable
          size={size}
          rowCol={Math.floor(Math.random() * (5 - 1 + 1) + 1)}
        />
      </Container>
    </>
  )
}

export default GruposPartidaPage
