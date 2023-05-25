import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>Hello World JS!</p>
      <li>
        <Link to={routes.modeGame()}>ModeGame</Link>
      </li>
    </>
  )
}

export default HomePage
