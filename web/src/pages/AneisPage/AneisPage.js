import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AneisPage = () => {
  return (
    <>
      <MetaTags title="Aneis" description="Aneis page" />

      <h1>AneisPage</h1>
      <p>
        Find me in <code>./web/src/pages/AneisPage/AneisPage.js</code>
      </p>
      <p>
        My default route is named <code>aneis</code>, link to me with `
        <Link to={routes.aneis()}>Aneis</Link>`
      </p>
    </>
  )
}

export default AneisPage
