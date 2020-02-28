import { createStore as _createStore } from 'redux'
import reducer from './reducers/index'

export default function createStore(initialState = {}) {
  const store = _createStore(reducer, initialState)
  return store
}