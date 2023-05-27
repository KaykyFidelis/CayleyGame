import { render } from '@redwoodjs/testing/web'

import GruposPartidaPage from './GruposPartidaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GruposPartidaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GruposPartidaPage />)
    }).not.toThrow()
  })
})
