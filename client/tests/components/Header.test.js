import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Header from '../../src/components/Header'

describe('Header', params => {
  const wrapper = shallow(<Header />)
  const title = "Where's My Donkey?"

  it('should render correctly', () => {
    expect(wrapper).to.have.length(1)
  })

  it("should contain text 'Marcel Cruz'", () => {
    expect(wrapper.text()).to.contain(title)
  })
})
