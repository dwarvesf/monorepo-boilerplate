/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react'
import { Button } from './index'

describe('<Button />', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Button>Hello</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
