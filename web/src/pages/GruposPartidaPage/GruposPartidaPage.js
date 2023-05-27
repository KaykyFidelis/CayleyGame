import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const GruposPartidaPage = ({ dificuldade }) => {
  if (dificuldade === 'facil') {
    return (
      <>
        <MetaTags title="GruposPartida" description="GruposPartida page" />

        <div id="container">
          <a href={routes.modeGame()}>
            <h3 id="barra_superior">atividade - fmcc II</h3>
          </a>
          <img src="/logo_ufcg.png" alt="logo"></img>
        </div>

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
  } else if (dificuldade == 'medio') {
    return (
      <>
        <MetaTags title="GruposPartida" description="GruposPartida page" />

        <div id="container">
          <a href={routes.modeGame()}>
            <h3 id="barra_superior">atividade - fmcc II</h3>
          </a>
          <img src="/logo_ufcg.png" alt="logo"></img>
        </div>

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
  } else {
    return (
      <>
        <MetaTags title="GruposPartida" description="GruposPartida page" />

        <div id="container">
          <a href={routes.modeGame()}>
            <h3 id="barra_superior">atividade - fmcc II</h3>
          </a>
          <img src="/logo_ufcg.png" alt="logo"></img>
        </div>

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
}

export default GruposPartidaPage
