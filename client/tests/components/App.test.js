import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import App from '../../src/components/App'

describe('App', () => {
  const wrapper = shallow(<App />)

  it('should render correctly', () => {
    expect(wrapper).to.have.length(1)
  })

  it('should have four children', () => {
    expect(wrapper.children().length).to.equal(4)
  })
})
