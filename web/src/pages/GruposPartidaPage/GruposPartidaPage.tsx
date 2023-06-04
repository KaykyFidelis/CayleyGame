import { MetaTags } from '@redwoodjs/web'
import SquareTable from 'src/components/SquareTable/SquareTable'
import { Container } from 'react-bootstrap';

const GruposPartidaPage = ({ dificuldade }: { dificuldade: string }) => {
  let size = 0;
  switch (dificuldade) {
    case 'facil':
      size = 6;
      break;
    case 'medio':
      size = 8;
      break;
    case 'dificil':
      size = 10;
      break;
  }
  return (
    <>
      <MetaTags title="GruposPartida" description="GruposPartida page" />
      <Container style={{ backgroundColor: '#749DF5' }} fluid>
        <SquareTable size={size}/>
      </Container>
    </>
  )
}

export default GruposPartidaPage
