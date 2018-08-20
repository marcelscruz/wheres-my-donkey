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
  const initialProps = {
    id: '1',
    farm: 1,
    owner: 'owner',
    ownername: 'ownername',
    secret: 'secret',
    server: 'server',
    title: 'title',
    toggleModal: () => {},
  }

  const mockStore = configureStore()
  let store
  let wrapper

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<Photo store={store} {...initialProps} />)
  })

  it('should render correctly', () => {
    expect(wrapper).to.have.length(1)
  })

  it('should render photo', () => {
    expect(wrapper.find('img')).to.have.length(1)
  })

  it('should render caption correctly', () => {
    expect(wrapper.find('.photo__caption').text()).to.equal(initialProps.title)
  })

  it('should render link with owner name correctly', () => {
    expect(
      wrapper
        .find('.photo__owner')
        .find('a')
        .text(),
    ).to.equal(initialProps.ownername)
  })
})
