import { render } from '@redwoodjs/testing/web'

import ModalMode from './ModalMode'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ModalMode', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ModalMode />)
    }).not.toThrow()
  })
})
