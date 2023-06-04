import { render } from '@redwoodjs/testing/web'

import Square from './Square'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Square', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Square />)
    }).not.toThrow()
  })
})
