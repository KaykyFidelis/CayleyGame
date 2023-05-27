import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const GruposPartidaPage = () => {
  return (
    <>
      <MetaTags title="GruposPartida" description="GruposPartida page" />

      <h1>GruposPartidaPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/GruposPartidaPage/GruposPartidaPage.js</code>
      </p>
      <p>
        My default route is named <code>gruposPartida</code>, link to me with `
        <Link to={routes.gruposPartida()}>GruposPartida</Link>`
      </p>
    </>
  )
}

export default GruposPartidaPage
