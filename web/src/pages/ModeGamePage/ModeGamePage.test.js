import { render } from '@redwoodjs/testing/web'

import ModeGamePage from './ModeGamePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ModeGamePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ModeGamePage />)
    }).not.toThrow()
  })
})
