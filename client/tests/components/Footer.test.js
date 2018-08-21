// ***** React ***** //
import React from 'react'

// ***** Libraries ***** //
import { expect } from 'chai'
import { shallow } from 'enzyme'

// ***** Components ***** //
import Footer from '../../src/components/Footer'

describe('Footer', () => {
  const wrapper = shallow(<Footer />)

  it('should render component', () => {
    expect(wrapper).to.have.length(1)
  })

  it('should contain button to About page', () => {
    expect(wrapper.find('Link')).to.have.length(1)
  })
})
