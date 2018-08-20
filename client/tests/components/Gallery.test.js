// ***** DOM ***** //
import 'jsdom-global/register'

// ***** React ***** //
import React from 'react'

// ***** Redux ***** //
import configureStore from 'redux-mock-store'

// ***** Libraries ***** //
import { expect } from 'chai'
import { mount } from 'enzyme'

// ***** Components ***** //
import { Gallery } from '../../src/components/Gallery'

describe('Gallery', () => {
  const initialState = {
    key: 'value',
  }
  const initialProps = {
    error: false,
    page: 1,
    photos: {},
    tag: 'donkeys',
    errorFetchingPhotos: () => {},
  }

  const mockStore = configureStore()
  let store
  let wrapper

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = mount(<Gallery store={store} {...initialProps} />)
  })

  it('should render correctly', () => {
    expect(wrapper).to.have.length(1)
  })
})
