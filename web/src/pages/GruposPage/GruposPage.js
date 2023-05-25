import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const GruposPage = () => {
  return (
    <>
      <MetaTags title="Grupos" description="Grupos page" />

      <h1>GruposPage</h1>
      <p>
        Find me in <code>./web/src/pages/GruposPage/GruposPage.js</code>
      </p>
      <p>
        My default route is named <code>grupos</code>, link to me with `
        <Link to={routes.grupos()}>Grupos</Link>`
      </p>
    </>
  )
}

export default GruposPage
