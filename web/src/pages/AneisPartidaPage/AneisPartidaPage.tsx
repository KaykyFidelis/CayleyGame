import { MetaTags } from '@redwoodjs/web'

const AneisPartidaPage = ({ dificuldade }: { dificuldade: string }) => {
  return (
    <>
      <MetaTags title="AneisPartida" description="AneisPartida page" />

      <div id="centro">
        <h1 id="tituloJogo">Aneis</h1>
        <h3 id="temporarioRemoverIndexCss">
          Tu escolheu o nível {dificuldade} pow
        </h3>
      </div>
    </>
  )
}

export default AneisPartidaPage
