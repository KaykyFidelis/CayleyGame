import { routes, Link } from '@redwoodjs/router'

type CayleyGamePageLayoutProps = {
  children?: React.ReactNode
}

const CayleyGamePageLayout = ({ children }: CayleyGamePageLayoutProps) => {
  return (
    <>
      <header>
        <div id="container">
          <Link to={routes.modeGame()}>
            <h3 id="barra_superior">atividade - fmcc II</h3>
          </Link>
          <img src="/logo_ufcg.png" alt="logo"></img>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default CayleyGamePageLayout
