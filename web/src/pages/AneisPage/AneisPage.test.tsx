import { render } from '@redwoodjs/testing/web'

import AneisPage from './AneisPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AneisPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AneisPage />)
    }).not.toThrow()
  })
})
