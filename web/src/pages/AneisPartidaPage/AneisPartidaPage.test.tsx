import { render } from '@redwoodjs/testing/web'

import AneisPartidaPage from './AneisPartidaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AneisPartidaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AneisPartidaPage dificuldade="medio" />)
    }).not.toThrow()
  })
})
