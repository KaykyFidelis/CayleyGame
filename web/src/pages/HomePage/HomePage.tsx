import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div id="centro">
        <h1 id="tituloJogo">CayleyGame</h1>
        <button id="botao1" type="button">
          <Link to={routes.grupos()}>
            <h2>Grupos</h2>
          </Link>
        </button>
        <button id="botao2" type="button">
          <Link to={routes.aneis()}>
            <h2>Anéis</h2>
          </Link>
        </button>
      </div>
      <img id="apple_mango" src="/apple_mango.png" alt="logo"></img>
      <img id="strawberry" src="/strawberry.png" alt="logo"></img>
    </>
  )
}

export default HomePage
