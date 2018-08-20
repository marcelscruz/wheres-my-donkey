// ***** React ***** //
import React from 'react'

// ***** Redux ***** //
import configureStore from 'redux-mock-store'

// ***** Libraries ***** //
import { expect } from 'chai'
import { mount } from 'enzyme'

// ***** Components ***** //
import { Search } from '../../src/components/Search'

describe('Search', () => {
  const initialState = {
    search: '',
  }

  const mockStore = configureStore()
  let store
  let wrapper

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = mount(<Search store={store} />)
  })

  it('should render correctly', () => {
    expect(wrapper).to.have.length(1)
  })
})
