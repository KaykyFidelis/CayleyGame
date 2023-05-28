import { render } from '@redwoodjs/testing/web'

import CayleyGamePageLayout from './CayleyGamePageLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CayleyGamePageLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CayleyGamePageLayout />)
    }).not.toThrow()
  })
})
