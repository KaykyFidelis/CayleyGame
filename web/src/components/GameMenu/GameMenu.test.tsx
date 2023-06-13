import { render } from '@redwoodjs/testing/web'

import GameMenu from './GameMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GameMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GameMenu />)
    }).not.toThrow()
  })
})
