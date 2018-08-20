import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import NotFound from '../../src/components/NotFound'

describe('NotFound', () => {
  const wrapper = shallow(<NotFound />)
  const message = '404 - Page not found'

  it('should render correctly', () => {
    expect(wrapper).to.have.length(1)
  })

  it("should contain message '404 - Page not found'", () => {
    expect(wrapper.text()).to.contain(message)
  })

  it('should contain button to return', () => {
    expect(wrapper.find('Link')).to.have.length(1)
  })
})
