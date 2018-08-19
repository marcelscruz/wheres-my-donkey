import 'jsdom-global/register'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { expect } from 'chai'
import { mount } from 'enzyme'

import Gallery from '../../src/components/Gallery'

// var jsdom = require('jsdom')
// const { JSDOM } = jsdom

// const { document } = new JSDOM('').window
// global.document = document

// describe('Gallery', params => {
//   const mockState = {
//     loadingMore: false,
//   }
//   const mockStore = configureStore()
//   const store = mockStore(mockState)

//   let wrapper
//   beforeEach(() => {
//     wrapper = mount(
//       <Provider store={store}>
//         <Gallery />
//       </Provider>,
//     )
//   })
// const wrapper = mount(<Gallery />)
// it('should render correctly', () => {
// expect(wrapper).to.have.length(1)
// })
// it('should have initial loadingMore state set to false', () => {
//   expect(wrapper.state().loadingMore).to.equal(false)
// })
// })
