import {  createStore, // applyMiddleware,
  compose } from 'redux'

import reducers from '../reducers/index.js'

export default function configureStore (initialState) {
  const middlewares = [
  ]
  if (global.__DEV__) {
    if (global.reduxNativeDevTools) middlewares.push(global.reduxNativeDevTools())
  }
  return createStore(
    reducers,
    initialState,
    compose(
      ...middlewares
    )
  )
}
