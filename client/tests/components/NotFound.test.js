// ***** React ***** //
import React from 'react'

// ***** Libraries ***** //
import { expect } from 'chai'
import { shallow } from 'enzyme'

// ***** Components ***** //
import NotFound from '../../src/components/NotFound'

describe('NotFound', () => {
  const wrapper = shallow(<NotFound />)
  const message = '404 - Page not found'

  it('should render component', () => {
    expect(wrapper).to.have.length(1)
  })

  it(`should contain message '${message}'`, () => {
    expect(wrapper.text()).to.contain(message)
  })

  it('should contain button to return', () => {
    expect(wrapper.find('Link')).to.have.length(1)
  })
})
