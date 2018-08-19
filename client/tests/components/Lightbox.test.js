import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Lightbox from '../../src/components/Lightbox'

describe('Lightbox', params => {
  const wrapper = shallow(<Lightbox />)

  it('should render correctly', () => {
    expect(wrapper).to.have.length(1)
  })

  it('should render photo', () => {
    expect(wrapper.find('.lightbox__photo')).to.have.length(1)
  })

  it('should render photo information', () => {
    expect(wrapper.find('.lightbox__info')).to.have.length(1)
  })

  it('should contain button to return', () => {
    expect(wrapper.find('.button__close')).to.have.length(1)
  })
})
