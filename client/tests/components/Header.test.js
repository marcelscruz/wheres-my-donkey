// ***** React ***** //
import React from 'react'

// ***** Libraries ***** //
import { expect } from 'chai'
import { shallow } from 'enzyme'

// ***** Components ***** //
import Header from '../../src/components/Header'

describe('Header', () => {
  const wrapper = shallow(<Header />)
  const title = "Where's My Donkey?"

  it('should render component', () => {
    expect(wrapper).to.have.length(1)
  })

  it(`should contain title '${title}'`, () => {
    expect(wrapper.text()).to.contain(title)
  })
})
