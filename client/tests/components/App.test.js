// ***** React ***** //
import React from 'react'

// ***** Libraries ***** //
import { shallow } from 'enzyme'
import { expect } from 'chai'

// ***** Components ***** //
import App from '../../src/components/App'

describe('App', () => {
  const wrapper = shallow(<App />)

  it('should render component', () => {
    expect(wrapper).to.have.length(1)
  })

  it('should contain four children', () => {
    expect(wrapper.children().length).to.equal(4)
  })
})
