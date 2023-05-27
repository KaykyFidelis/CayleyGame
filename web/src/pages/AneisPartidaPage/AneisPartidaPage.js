import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AneisPartidaPage = () => {
  return (
    <>
      <MetaTags title="AneisPartida" description="AneisPartida page" />

      <h1>AneisPartidaPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/AneisPartidaPage/AneisPartidaPage.js</code>
      </p>
      <p>
        My default route is named <code>aneisPartida</code>, link to me with `
        <Link to={routes.aneisPartida()}>AneisPartida</Link>`
      </p>
    </>
  )
}

export default AneisPartidaPage
