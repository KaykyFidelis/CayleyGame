import { render } from '@redwoodjs/testing/web'

import SquareTable from './SquareTable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Table', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SquareTable size={undefined}/>)
    }).not.toThrow()
  })
})
