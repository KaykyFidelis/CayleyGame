import { render } from '@redwoodjs/testing/web'

import LevelSelection from './LevelSelection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LevelSelection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LevelSelection />)
    }).not.toThrow()
  })
})
