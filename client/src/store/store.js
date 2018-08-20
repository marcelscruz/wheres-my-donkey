// ***** Redux ***** //
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import errorReducer from '../reducers/error'
import modalReducer from '../reducers/modal'
import photosReducer from '../reducers/photos'
import searchReducer from '../reducers/search'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  combineReducers({
    error: errorReducer,
    modal: modalReducer,
    photos: photosReducer,
    search: searchReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)),
)
