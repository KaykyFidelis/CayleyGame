import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const GruposPage = () => {
  return (
    <>
      <MetaTags title="Grupos" description="Grupos page" />
      <div id="container">
        <a href={routes.modeGame()}>
          <h3 id="barra_superior">atividade - fmcc II</h3>
        </a>
        <img src="/logo_ufcg.png" alt="logo"></img>
      </div>

      <h1 id="titleSelectMode">Grupos</h1>

      <div id="centroGrupos">
        <h2 id="tituloJogo">Selecione o nível do jogo</h2>
        <button id="botaoFacil" type="button">
          <a href={routes.grupos()}>
            <h2>Fácil</h2>
          </a>
        </button>
        <button id="botaoMedio" type="button">
          <a href={routes.grupos()}>
            <h2>Médio</h2>
          </a>
        </button>
        <button id="botaoDificil" type="button">
          <a href={routes.grupos()}>
            <h2>Dificil</h2>
          </a>
        </button>
      </div>
      <img id="appleMangoGrupos" src="/apple_mango.png" alt="logo"></img>
      <img id="strawberryGrupos" src="/strawberry.png" alt="logo"></img>
    </>
  )
}

export default GruposPage
