// ***** React ***** //
import React from 'react'

// ***** Redux ***** //
import configureStore from 'redux-mock-store'

// ***** Libraries ***** //
import { expect } from 'chai'
import { shallow } from 'enzyme'

// ***** Components ***** //
import { Modal } from '../../src/components/Modal'

describe('Modal', () => {
  const initialState = {}
  const initialProps = {
    modal: null,
    toggleModal: () => {},
  }

  const mockStore = configureStore()
  let store
  let wrapper

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<Modal store={store} {...initialProps} />)
  })

  it('should render correctly', () => {
    expect(wrapper).to.have.length(1)
  })

  it("should not render Lightbox when prop 'modal' is null", () => {
    expect(wrapper.find('Lightbox')).to.have.length(0)
  })

  it("should render Lightbox when modal prop 'modal' is not null", () => {
    wrapper.setProps({
      modal: {
        key: 'value',
      },
    })
    expect(wrapper.find('Lightbox')).to.have.length(1)
  })
})
