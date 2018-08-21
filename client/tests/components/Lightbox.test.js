// ***** React ***** //
import React from 'react'

// ***** Libraries ***** //
import { expect } from 'chai'
import { shallow } from 'enzyme'

// ***** Components ***** //
import Lightbox from '../../src/components/Lightbox'

describe('Lightbox', () => {
  const photo = {
    id: '123456',
    dateupload: '1534693344',
    description: 'Some description here',
    farm: 2,
    ownername: 'marcelcruz',
    secret: 'a549c07399',
    server: '1899',
    title: "The photo's title",
  }
  const toggleModal = () => {}

  const wrapper = shallow(<Lightbox photo={photo} toggleModal={toggleModal} />)

  it('should render component', () => {
    expect(wrapper).to.have.length(1)
  })

  it('should contain photo', () => {
    expect(wrapper.find('.lightbox__photo')).to.have.length(1)
  })

  it('should contain post information', () => {
    expect(wrapper.find('.lightbox__info')).to.have.length(1)
  })

  it('should contain button to return', () => {
    expect(wrapper.find('.button__close')).to.have.length(1)
  })
})
