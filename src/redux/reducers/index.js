import { combineReducers } from 'redux'
import counter from './counter'

// 建议一个模块一个module
const reducerModules = {
  counter,
}

export default combineReducers(reducerModules)