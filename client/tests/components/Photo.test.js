// ***** React ***** //
import React from 'react'

// ***** Redux ***** //
import configureStore from 'redux-mock-store'

// ***** Libraries ***** //
import { expect } from 'chai'
import { shallow } from 'enzyme'

// ***** Components ***** //
import { Photo } from '../../src/components/Photo'

describe('Photo', () => {
  const initialState = {}
  const photo = {
    id: '1',
    farm: 1,
    owner: 'owner',
    ownername: 'ownername',
    secret: 'secret',
    server: 'server',
    title: 'title',
  }
  const toggleModal = () => {}

  const mockStore = configureStore()
  let store
  let wrapper

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(
      <Photo store={store} photo={photo} toggleModal={toggleModal} />,
    )
  })

  it('should render component', () => {
    expect(wrapper).to.have.length(1)
  })

  it('should contain photo', () => {
    expect(wrapper.find('img')).to.have.length(1)
  })

  it('should contain caption', () => {
    expect(wrapper.find('.photo__caption').text()).to.equal(photo.title)
  })

  it('should contain link with owner name', () => {
    expect(
      wrapper
        .find('.photo__owner')
        .find('a')
        .text(),
    ).to.equal(photo.ownername)
  })
})
