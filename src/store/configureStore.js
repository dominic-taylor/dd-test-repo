import {  createStore, 
          applyMiddleware,
          compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers/index.js'

export default function configureStore (initialState) {
  const middlewares = [thunk]
  if (global.__DEV__) {
    if (global.reduxNativeDevTools) middlewares.push(global.reduxNativeDevTools())
  }
  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
    )
}

