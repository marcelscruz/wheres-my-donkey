import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Footer from '../../src/components/Footer'

describe('Footer', params => {
  const wrapper = shallow(<Footer />)

  it('should render correctly', () => {
    expect(wrapper).to.have.length(1)
  })

  it('should contain button to About page', () => {
    expect(wrapper.find('Link')).to.have.length(1)
  })
})
