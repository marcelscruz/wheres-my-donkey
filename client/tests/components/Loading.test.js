// ***** React ***** //
import React from 'react'

// ***** Libraries ***** //
import { expect } from 'chai'
import { shallow } from 'enzyme'

// ***** Components ***** //
import Loading from '../../src/components/Loading'

describe('Loading', () => {
  const wrapper = shallow(<Loading size="small" />)

  it('should render component', () => {
    expect(wrapper).to.have.length(1)
  })

  it('should contain loader gif', () => {
    expect(wrapper.find('img')).to.have.length(1)
  })
})
