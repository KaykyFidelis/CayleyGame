import { MetaTags } from '@redwoodjs/web'

const AneisPartidaPage = ({ dificuldade }: { dificuldade: string }) => {
  return (
    <>
      <MetaTags title="AneisPartida" description="AneisPartida page" />

      <div id="centro">
        <h1 id="tituloJogo">CayleyGame</h1>
        <h3 id="temporarioRemoverIndexCss">
          Tu escolheu o nível {dificuldade} pow
        </h3>
      </div>
      <img id="apple_mango" src="/apple_mango.png" alt="logo"></img>
      <img id="strawberry" src="/strawberry.png" alt="logo"></img>
    </>
  )
}

export default AneisPartidaPage
