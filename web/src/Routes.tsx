// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import CayleyGamePageLayout from './layouts/CayleyGamePageLayout/CayleyGamePageLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={CayleyGamePageLayout}>
        <Route path="/aneis-partida" page={AneisPartidaPage} name="aneisPartida" />
        <Route path="/grupos-partida" page={GruposPartidaPage} name="gruposPartida" />
        <Route path="/aneis" page={AneisPage} name="aneis" />
        <Route path="/grupos" page={GruposPage} name="grupos" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
