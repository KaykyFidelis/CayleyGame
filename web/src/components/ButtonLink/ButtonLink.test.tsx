import { render } from '@redwoodjs/testing/web'

import ButtonLink from './ButtonLink'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ButtonLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ButtonLink />)
    }).not.toThrow()
  })
})
