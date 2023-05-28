import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ModeGamePage = () => {
  return (
    <>
      <MetaTags title="ModeGame" description="ModeGame page" />

      <div id="centro">
        <h1 id="tituloJogo">CayleyGame</h1>
        <button id="botao1" type="button">
          <a href={routes.grupos()}>
            <h2>Grupos</h2>
          </a>
        </button>
        <button id="botao2" type="button">
          <a href={routes.aneis()}>
            <h2>Anéis</h2>
          </a>
        </button>
      </div>
      <img id="apple_mango" src="/apple_mango.png" alt="logo"></img>
      <img id="strawberry" src="/strawberry.png" alt="logo"></img>
    </>
  )
}

export default ModeGamePage
