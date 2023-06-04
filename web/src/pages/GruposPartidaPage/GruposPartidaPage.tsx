import { MetaTags } from '@redwoodjs/web'

const GruposPartidaPage = ({ dificuldade }: { dificuldade: string }) => {
  return (
    <>
      <MetaTags title="GruposPartida" description="GruposPartida page" />

      <div id="centro">
        <h1 id="tituloJogo">Grupos</h1>
        <h3 id="temporarioRemoverIndexCss">
          Tu escolheu o nível {dificuldade} pow
        </h3>
      </div>
    </>
  )
}

export default GruposPartidaPage
