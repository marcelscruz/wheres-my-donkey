// ***** Redux ***** //
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import photosReducer from '../reducers/photos'
import searchReducer from '../reducers/search'
import modalReducer from '../reducers/modal'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  combineReducers({
    photos: photosReducer,
    search: searchReducer,
    modal: modalReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)),
)
