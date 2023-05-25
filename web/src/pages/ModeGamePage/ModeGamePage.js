import { MetaTags } from '@redwoodjs/web'

const ModeGamePage = () => {
  return (
    <>
      <MetaTags title="ModeGame" description="ModeGame page" />
      <div id="container">
        <h3 id="barra_superior">atividade - fmcc II</h3>
        <img src="/logo_ufcg.png" alt="logo"></img>
      </div>

      <div id="centro">
        <h1 id="tituloJogo">CayleyGame</h1>
        <button id="botao1" type="button">
          <h2>Grupos</h2>
        </button>
        <button id="botao2" type="button">
          <h2>Anéis</h2>
        </button>
      </div>
      <img id="apple_mango" src="/apple_mango.png" alt="logo"></img>
      <img id="strawberry" src="/strawberry.png" alt="logo"></img>
    </>
  )
}

export default ModeGamePage
