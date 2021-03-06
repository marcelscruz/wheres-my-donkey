// ***** React ***** //
import React from 'react'

// ***** Libraries ***** //
import { expect } from 'chai'
import { shallow } from 'enzyme'

// ***** Components ***** //
import About from '../../src/components/About'

describe('About', () => {
  const wrapper = shallow(<About />)
  const name = 'Marcel Cruz'

  it('should render component', () => {
    expect(wrapper).to.have.length(1)
  })

  it(`should contain text '${name}'`, () => {
    expect(wrapper.text()).to.contain(name)
  })

  it('should contain profile picture', () => {
    expect(wrapper.find('img')).to.have.length(1)
  })

  it('should contain button to return', () => {
    expect(wrapper.find('.button__close')).to.have.length(1)
  })
})
