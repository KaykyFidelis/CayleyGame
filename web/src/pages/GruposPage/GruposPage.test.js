import { render } from '@redwoodjs/testing/web'

import GruposPage from './GruposPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GruposPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GruposPage />)
    }).not.toThrow()
  })
})
