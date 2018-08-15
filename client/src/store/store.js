import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import photosReducer from '../reducers/photos'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  combineReducers({
    photos: photosReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)),
)
